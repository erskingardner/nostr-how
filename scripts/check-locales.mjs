import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const pagesDir = path.join(rootDir, "src", "routes", "pages");
const localeMessagesDir = path.join(rootDir, "src", "lib", "locales");
const referenceLocale = "en";

function formatList(items) {
    return items.map((item) => `  - ${item}`).join("\n");
}

function flattenKeys(value, prefix = "", keys = []) {
    if (Array.isArray(value)) {
        keys.push(prefix);
        return keys;
    }

    if (value && typeof value === "object") {
        for (const [key, child] of Object.entries(value)) {
            flattenKeys(child, prefix ? `${prefix}.${key}` : key, keys);
        }

        return keys;
    }

    keys.push(prefix);
    return keys;
}

async function getLocaleDirectories() {
    const entries = await readdir(pagesDir, { withFileTypes: true });

    return entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort();
}

async function getMarkdownFiles(locale) {
    const localeDir = path.join(pagesDir, locale);
    const entries = await readdir(localeDir, { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
        .map((entry) => entry.name)
        .sort();
}

async function getMessageLocales() {
    const entries = await readdir(localeMessagesDir, { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
        .map((entry) => entry.name.replace(/\.json$/, ""))
        .sort();
}

async function getMessageKeys(locale) {
    const filePath = path.join(localeMessagesDir, `${locale}.json`);
    const fileContents = await readFile(filePath, "utf8");
    const parsed = JSON.parse(fileContents);

    return flattenKeys(parsed).sort();
}

function getMissingItems(referenceItems, candidateItems) {
    const candidateSet = new Set(candidateItems);
    return referenceItems.filter((item) => !candidateSet.has(item));
}

const errors = [];
const pageLocales = await getLocaleDirectories();
const messageLocales = await getMessageLocales();

if (!pageLocales.includes(referenceLocale)) {
    errors.push(`Missing reference page locale "${referenceLocale}".`);
}

if (!messageLocales.includes(referenceLocale)) {
    errors.push(`Missing reference message locale "${referenceLocale}".`);
}

const missingMessageLocales = getMissingItems(pageLocales, messageLocales);
if (missingMessageLocales.length > 0) {
    errors.push(
        `Missing locale message files for:\n${formatList(missingMessageLocales.map((locale) => `${locale}.json`))}`
    );
}

const missingPageLocales = getMissingItems(messageLocales, pageLocales);
if (missingPageLocales.length > 0) {
    errors.push(
        `Missing localized page directories for:\n${formatList(missingPageLocales.map((locale) => locale))}`
    );
}

if (errors.length === 0) {
    const referencePages = await getMarkdownFiles(referenceLocale);
    const referenceMessageKeys = await getMessageKeys(referenceLocale);

    for (const locale of pageLocales) {
        const localePages = await getMarkdownFiles(locale);
        const missingPages = getMissingItems(referencePages, localePages);
        const extraPages = getMissingItems(localePages, referencePages);

        if (missingPages.length > 0 || extraPages.length > 0) {
            let message = `Locale "${locale}" page files are out of sync with "${referenceLocale}".`;

            if (missingPages.length > 0) {
                message += `\nMissing pages:\n${formatList(missingPages)}`;
            }

            if (extraPages.length > 0) {
                message += `\nUnexpected pages:\n${formatList(extraPages)}`;
            }

            errors.push(message);
        }

        const localeMessageKeys = await getMessageKeys(locale);
        const missingKeys = getMissingItems(referenceMessageKeys, localeMessageKeys);
        const extraKeys = getMissingItems(localeMessageKeys, referenceMessageKeys);

        if (missingKeys.length > 0 || extraKeys.length > 0) {
            let message = `Locale "${locale}" translation keys are out of sync with "${referenceLocale}".`;

            if (missingKeys.length > 0) {
                message += `\nMissing keys:\n${formatList(missingKeys)}`;
            }

            if (extraKeys.length > 0) {
                message += `\nUnexpected keys:\n${formatList(extraKeys)}`;
            }

            errors.push(message);
        }
    }
}

if (errors.length > 0) {
    console.error("Locale consistency check failed.\n");
    console.error(errors.join("\n\n"));
    process.exit(1);
}

console.log(
    `Locale consistency check passed for ${pageLocales.length} locales and ${messageLocales.length} message files.`
);

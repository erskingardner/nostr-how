import { supportedLocales } from "$lib/config/l10n";
import { donationWays } from "$lib/data/donate";

interface MarkdownModule {
    metadata?: {
        title?: string;
        description?: string;
    };
}

interface LocaleMessages {
    donatePage: {
        metaDescription: string;
        title: string;
        intro: string;
        addressLabel: string;
    };
    [key: string]: unknown;
}

export interface PublicPage {
    locale: string;
    slug: string;
    title: string;
    description: string;
    path: string;
    markdown: string;
}

const markdownPageModules = import.meta.glob<MarkdownModule>("../../routes/pages/*/*.md", {
    eager: true,
});

const rawMarkdownModules = import.meta.glob<string>("../../routes/pages/*/*.md", {
    eager: true,
    import: "default",
    query: "?raw",
});

const localeMessageModules = import.meta.glob<LocaleMessages>("../locales/*.json", {
    eager: true,
    import: "default",
});

function stripFrontmatter(markdown: string) {
    return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
}

function normalizeHeadingAnchors(markdown: string) {
    return markdown.replace(/^(#{1,6})\s+\[§\]\(#.*?\)\s*/gm, "$1 ");
}

function buildMarkdownDocument(title: string, description: string, body: string) {
    return [`# ${title}`, "", description, "", body.trim()].join("\n").trim();
}

function getNestedMessage(localeMessages: LocaleMessages, path: string) {
    return path
        .split(".")
        .reduce<unknown>((value, segment) => {
            if (!value || typeof value !== "object") {
                return undefined;
            }

            return (value as Record<string, unknown>)[segment];
        }, localeMessages);
}

function renderDonateMarkdown(locale: string) {
    const localeMessages = localeMessageModules[`../locales/${locale}.json`];

    if (!localeMessages) {
        return null;
    }

    const sections = donationWays.map((way) => {
        const title = getNestedMessage(localeMessages, way.titleKey);
        const body = getNestedMessage(localeMessages, way.bodyKey);
        const cta = getNestedMessage(localeMessages, way.ctaKey);

        if (typeof title !== "string" || typeof body !== "string" || typeof cta !== "string") {
            return null;
        }

        const lines = [`## ${title}`, "", body];

        if (way.address) {
            lines.push("", `- ${localeMessages.donatePage.addressLabel}: \`${way.address}\``);
        }

        lines.push("", `- ${cta}: ${way.href}`);

        return lines.join("\n");
    }).filter((section): section is string => Boolean(section));

    return buildMarkdownDocument(
        localeMessages.donatePage.title,
        localeMessages.donatePage.metaDescription,
        [localeMessages.donatePage.intro, "", ...sections].join("\n")
    );
}

const markdownPages: PublicPage[] = Object.keys(markdownPageModules)
    .map((path) => {
        const match = path.match(/routes\/pages\/([^/]+)\/([^/]+)\.md$/);
        if (!match) {
            return null;
        }

        const [, locale, slug] = match;
        const module = markdownPageModules[path];
        const rawMarkdown = rawMarkdownModules[path];
        const title = module.metadata?.title;
        const description = module.metadata?.description;

        if (!rawMarkdown || !title || !description) {
            return null;
        }

        return {
            locale,
            slug,
            title,
            description,
            path: `/${locale}/${slug}`,
            markdown: buildMarkdownDocument(
                title,
                description,
                normalizeHeadingAnchors(stripFrontmatter(rawMarkdown))
            ),
        };
    })
    .filter((page): page is PublicPage => Boolean(page));

const donatePages: PublicPage[] = supportedLocales
    .map((locale) => {
        const localeMessages = localeMessageModules[`../locales/${locale}.json`];
        const markdown = renderDonateMarkdown(locale);

        if (!localeMessages || !markdown) {
            return null;
        }

        return {
            locale,
            slug: "donate",
            title: localeMessages.donatePage.title,
            description: localeMessages.donatePage.metaDescription,
            path: `/${locale}/donate`,
            markdown,
        };
    })
    .filter((page): page is PublicPage => Boolean(page));

const publicPages = [...markdownPages, ...donatePages].sort((a, b) => a.path.localeCompare(b.path));

export function getPublicPages() {
    return publicPages;
}

export function getPublicPagePaths() {
    return publicPages.map((page) => page.path);
}

export function getPublicPage(locale: string, slug: string) {
    return publicPages.find((page) => page.locale === locale && page.slug === slug) ?? null;
}

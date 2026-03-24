import { supportedLocales } from "$lib/config/l10n";
import { toAbsoluteUrl, toMarkdownPath } from "$lib/config/site";
import { getPublicPages } from "$lib/server/public-pages";

export const prerender = true;

const englishPages = getPublicPages().filter((page) => page.locale === "en");

export function GET() {
    const body = [
        "# Nostr.how",
        "",
        "> Plain-language guides for understanding Nostr, how it works, and how to get started.",
        "",
        "Nostr.how is a curated educational site about Nostr. It explains the protocol for newcomers, covers the core concepts people actually use, and publishes localized versions across 11 languages.",
        "",
        `Supported locales: ${supportedLocales.join(", ")}`,
        "",
        "Use the markdown versions of page URLs for agent-friendly reading. Both `/en/what-is-nostr.md` and `/en/what-is-nostr/index.html.md` are supported.",
        "",
        "## Core pages",
        ...englishPages.map(
            (page) =>
                `- [${page.title}](${toAbsoluteUrl(toMarkdownPath(page.path))}): ${page.description}`
        ),
        "",
        "## Full export",
        `- [Complete English markdown export](${toAbsoluteUrl("/llms-full.txt")}): All public English pages bundled into one markdown-friendly file.`,
    ].join("\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}

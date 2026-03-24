import { toAbsoluteUrl, toMarkdownPath } from "$lib/config/site";
import { getPublicPages } from "$lib/server/public-pages";

export const prerender = true;

const englishPages = getPublicPages().filter((page) => page.locale === "en");

export function GET() {
    const sections = englishPages.map((page) =>
        [
            `## ${page.title}`,
            "",
            `Source: ${toAbsoluteUrl(page.path)}`,
            `Markdown: ${toAbsoluteUrl(toMarkdownPath(page.path))}`,
            "",
            page.markdown,
        ].join("\n")
    );

    const body = [
        "# Nostr.how Full Export",
        "",
        "This file contains the full English markdown for Nostr.how's current public pages.",
        "",
        ...sections,
    ].join("\n\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}

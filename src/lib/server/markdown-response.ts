import { getPublicPage } from "#lib/server/public-pages.ts";
import { error } from "@sveltejs/kit";

export function getMarkdownResponse(locale: string, slug: string) {
    const page = getPublicPage(locale, slug);

    if (!page) {
        error(404, "Page not found", { title: "Page not found" });
    }

    return new Response(page.markdown, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
        },
    });
}

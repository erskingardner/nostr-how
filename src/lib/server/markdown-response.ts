import { getPublicPage } from "$lib/server/public-pages";
import { error } from "@sveltejs/kit";

export function getMarkdownResponse(locale: string, slug: string) {
    const page = getPublicPage(locale, slug);

    if (!page) {
        throw error(404);
    }

    return new Response(page.markdown, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
        },
    });
}

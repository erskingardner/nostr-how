import { getMarkdownResponse } from "$lib/server/markdown-response";

export function GET({ params }) {
    return getMarkdownResponse(params.locale, params.slug);
}

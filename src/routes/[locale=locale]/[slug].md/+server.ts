import { getMarkdownResponse } from "#lib/server/markdown-response.ts";

export function GET({ params }) {
    return getMarkdownResponse(params.locale, params.slug);
}

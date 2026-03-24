import { toAbsoluteUrl } from "$lib/config/site";
import { getPublicPagePaths } from "$lib/server/public-pages";

export const prerender = true;

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

export function GET() {
    const urls = getPublicPagePaths();
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${escapeXml(toAbsoluteUrl(path))}</loc></url>`).join("\n")}
</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}

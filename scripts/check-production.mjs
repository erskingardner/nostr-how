import assert from "node:assert/strict";
import { once } from "node:events";
import { readdir } from "node:fs/promises";
import { preview } from "vite";
import { isRtlLocale, supportedLocales } from "../src/lib/config/l10n.ts";

// Exercise the built app over HTTP, including the CSP around its hydration script.
const server = await preview({ preview: { host: "127.0.0.1", port: 0, open: false } });
const address = server.httpServer.address();
assert(address && typeof address !== "string");
const origin = `http://127.0.0.1:${address.port}`;

async function request(path, status = 200) {
    const response = await fetch(new URL(path, origin), {
        redirect: "manual",
        signal: AbortSignal.timeout(10_000),
    });
    assert.equal(response.status, status, path);
    return { response, body: await response.text() };
}

function checkHtmlSecurity(response, body, path) {
    const csp = response.headers.get("content-security-policy");
    assert(csp, `Missing CSP: ${path}`);
    assert.match(csp, /frame-ancestors 'none'/);
    assert.match(csp, /object-src 'none'/);
    const scripts = csp.match(/(?:^|;\s*)script-src ([^;]+)/)?.[1];
    assert(scripts, `Missing script policy: ${path}`);
    assert(!scripts.includes("'unsafe-inline'") && !scripts.includes("'unsafe-eval'"));

    for (const script of body.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
        if (/\bsrc=|type="application\/ld\+json"/.test(script[1]) || !script[2].trim()) {
            continue;
        }
        const nonce = script[1].match(/\bnonce="([^"]+)"/)?.[1];
        assert(nonce && scripts.includes(`'nonce-${nonce}'`), `Blocked inline script: ${path}`);
    }

    for (const [link] of body.matchAll(/<a\b[^>]*\btarget="_blank"[^>]*>/g)) {
        const rel = link.match(/\brel="([^"]+)"/)?.[1].split(/\s+/) ?? [];
        assert(rel.includes("noopener") && rel.includes("noreferrer"), `Unsafe link: ${path}`);
    }
}

try {
    let pages = 0;
    for (const locale of supportedLocales) {
        const files = await readdir(new URL(`../src/routes/pages/${locale}/`, import.meta.url));
        const slugs = [
            ...files.filter((file) => file.endsWith(".md")).map((file) => file.slice(0, -3)),
            "donate",
        ];
        for (const slug of slugs) {
            const path = `/${locale}/${slug}`;
            const { response, body } = await request(path);
            assert.match(
                body,
                new RegExp(`<html lang="${locale}" dir="${isRtlLocale(locale) ? "rtl" : "ltr"}">`)
            );
            assert.match(body, /<h1\b/);
            checkHtmlSecurity(response, body, path);

            const markdown = await request(`${path}.md`);
            assert.match(markdown.response.headers.get("content-type") ?? "", /^text\/markdown/);
            assert.match(markdown.body, /^# /);
            const alias = await request(`${path}/index.html.md`);
            assert.equal(alias.body, markdown.body);
            pages++;
        }
        const missing = await request(`/${locale}/this-page-does-not-exist`, 404);
        assert.match(missing.body, /<h1\b/);
        await request(`/${locale}/this-page-does-not-exist.md`, 404);
    }

    await request("/unsupported-locale/what-is-nostr", 404);
    const redirect = await request("/jp/what-is-nostr", 301);
    assert.equal(redirect.response.headers.get("location"), "/ja/what-is-nostr");
    for (const path of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/llms-full.txt"]) {
        const { body } = await request(path);
        assert(body.length > 0, path);
    }
    console.log(
        `Production checks passed: ${pages} HTML pages, ${pages * 2} Markdown routes, localized 404s, redirects, and discovery endpoints.`
    );
} finally {
    server.httpServer.close();
    server.httpServer.closeAllConnections();
    await once(server.httpServer, "close");
}

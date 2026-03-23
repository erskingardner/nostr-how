import { fallbackLocale, isRtlLocale, supportedLocales } from "$lib/config/l10n";
import { redirects } from "$lib/data/redirects";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

function getLocaleFromPathname(pathname: string) {
    const [maybeLocale] = pathname.split("/").filter(Boolean);
    if (maybeLocale && supportedLocales.includes(maybeLocale)) {
        return maybeLocale;
    }

    return fallbackLocale;
}

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname === "/jp") {
        throw redirect(301, "/ja/get-started");
    }

    if (event.url.pathname === "/jp/guides/get-verified") {
        throw redirect(301, "/ja/get-verified");
    }

    if (event.url.pathname.startsWith("/jp/")) {
        throw redirect(301, event.url.pathname.replace(/^\/jp/, "/ja"));
    }

    redirects.forEach((redirection) => {
        const pattern = new RegExp(`^${redirection.old}/?$`, "gi");
        if (event.url.pathname.match(pattern)) throw redirect(301, redirection.new);
    });

    const locale = getLocaleFromPathname(event.url.pathname);
    const dir = isRtlLocale(locale) ? "rtl" : "ltr";

    return resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace(
                '<html lang="en" dir="ltr" data-lang-token="%lang%" data-dir-token="%dir%">',
                `<html lang="${locale}" dir="${dir}">`
            );
        },
    });
};

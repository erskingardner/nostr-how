import { fallbackLocale, supportedLocales } from "$lib/config/l10n";
import { init, locale, register } from "svelte-i18n";

register("de", () => import("$lib/locales/de.json"));
register("en", () => import("$lib/locales/en.json"));
register("es", () => import("$lib/locales/es.json"));
register("fa", () => import("$lib/locales/fa.json"));
register("fr", () => import("$lib/locales/fr.json"));
register("it", () => import("$lib/locales/it.json"));
register("nl", () => import("$lib/locales/nl.json"));
register("ja", () => import("$lib/locales/ja.json"));
register("pt", () => import("$lib/locales/pt.json"));
register("zh", () => import("$lib/locales/zh.json"));
register("uk", () => import("$lib/locales/uk.json"));

export function setupI18n(localeString: string) {
    const parsedLocale = supported(localeString);

    // Init locales
    init({
        fallbackLocale: fallbackLocale,
        initialLocale: parsedLocale,
    });

    locale.set(parsedLocale);
}

// Check to see if the given locale is supported.
// If it isn't, return fallback locale.
function supported(locale: string | undefined) {
    if (locale && supportedLocales.includes(locale)) {
        return locale;
    } else {
        return fallbackLocale;
    }
}

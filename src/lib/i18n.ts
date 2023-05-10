import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { fallbackLocale, supportedLocales } from '$lib/config/l10n';

register('en', () => import('$lib/locales/en.json'));
register('es', () => import('$lib/locales/es.json'));
register('it', () => import('$lib/locales/it.json'));

interface i18nOpts {
    locale: string;
    page?: string;
}

export function setupI18n(opts?: i18nOpts) {
    const parsedLocale = supported(language(opts?.locale || getLocaleFromNavigator()));

    // Init locales
    init({
        fallbackLocale: fallbackLocale,
        initialLocale: parsedLocale
    });

    // Update locale if present
    if (opts && opts.locale) {
        locale.set(supported(opts.locale));
    }
}

// Extract the "en" bit from fully qualified locales, like "en-US"
function language(locale: string | null) {
    return locale?.replace('_', '-').split('-')[0];
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

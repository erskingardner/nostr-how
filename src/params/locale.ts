import { supportedLocales } from '$lib/config/l10n';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return supportedLocales.includes(param);
}

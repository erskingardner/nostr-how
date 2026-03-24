import { setupI18n } from "$lib/i18n";

export function load({ params }) {
    setupI18n(params.locale);

    return {
        locale: params.locale,
    };
}

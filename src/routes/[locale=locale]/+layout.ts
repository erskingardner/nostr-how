import { setupI18n } from "#lib/i18n.ts";

export function load({ params }) {
    setupI18n(params.locale);

    return {
        locale: params.locale,
    };
}

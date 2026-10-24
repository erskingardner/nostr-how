import { supportedLocales } from "#lib/config/l10n.ts";
import { defineParams } from "@sveltejs/kit/params";

export const params = defineParams({
    locale: (value) => (supportedLocales.includes(value) ? value : undefined),
});

import { error } from "@sveltejs/kit";
import { _ } from "svelte-i18n";
import { get } from "svelte/store";

export async function load({ params }) {
    try {
        const page = await import(`../../pages/${params.locale}/${params.slug}.md`);
        const { title, description } = page.metadata;
        const content = page.default;
        const slug = params.slug;

        return {
            content,
            title,
            description,
            slug,
        };
    } catch {
        const t = get(_);
        if (params.locale === "en") {
            throw error(404, {
                title: "Page not found",
                message: "Sorry, that page doesn't exist.",
            });
        } else {
            throw error(404, {
                title: t("errors.noTranslationTitle"),
                message: t("errors.noTranslationMessage"),
            });
        }
    }
}

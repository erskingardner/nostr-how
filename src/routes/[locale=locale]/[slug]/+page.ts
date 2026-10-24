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
            error(404, "Sorry, that page doesn't exist.", { title: "Page not found" });
        } else {
            error(404, t("errors.noTranslationMessage"), {
                title: t("errors.noTranslationTitle"),
            });
        }
    }
}

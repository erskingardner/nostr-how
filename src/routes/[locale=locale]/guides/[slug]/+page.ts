import { error } from '@sveltejs/kit';
import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { setupI18n } from '$lib/i18n';

export async function load({ params }) {
    // Initialize i18n
    setupI18n({ locale: params.locale });

    let page;
    try {
        page = await import(`../../../pages/${params.locale}/guides/${params.slug}.md`);
    } catch {
        const t = get(_);
        if (params.locale === 'en') {
            throw error(404, {
                title: 'Page not found',
                message: "Sorry, that page doesn't exist."
            });
        } else {
            throw error(404, {
                title: t('errors.noTranslationTitle'),
                message: t('errors.noTranslationMessage')
            });
        }
    }

    const { title, description } = page.metadata;
    const content = page.default;
    const slug = params.slug;

    return {
        content,
        title,
        description,
        slug
    };
}

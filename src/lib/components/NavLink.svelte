<script>
import { fallbackLocale } from "$lib/config/l10n";
import { page } from "$app/state";
import { _, isLoading } from "svelte-i18n";

let {
    href,
    localeString,
    onNavLinkClick,
} = $props();

let currentLocale = $derived(page.params.locale || fallbackLocale);
</script>

{#if !$isLoading}
    <a
        href={`/${currentLocale}${href}`}
        data-sveltekit-preload-data="tap"
        class:active={page.url.pathname.includes(href)}
        onclick={onNavLinkClick}
    >
        {$_(localeString)}
    </a>
{/if}

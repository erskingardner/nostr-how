<script lang="ts">
import { page } from "$app/state";
import { _, isLoading, locale } from "svelte-i18n";

let {
    href,
    localeString,
    onNavLinkClick,
}: { href: string; localeString: string; onNavLinkClick: () => void } = $props();
</script>

{#if !$isLoading}
    <a
        href={`/${$locale}${href}`}
        data-sveltekit-preload-data="tap"
        class:active={page.url.pathname.includes(href)}
        onclick={onNavLinkClick}
    >
        {$_(localeString)}
    </a>
{/if}

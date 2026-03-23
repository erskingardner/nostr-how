<script>
import { fallbackLocale } from "$lib/config/l10n";
import { page } from "$app/state";
import { _, isLoading } from "svelte-i18n";

let {
    href,
    localeString,
    label = undefined,
    onNavLinkClick,
} = $props();

let currentLocale = $derived(page.params.locale || fallbackLocale);
let isActive = $derived(page.url.pathname === `/${currentLocale}${href}`);
</script>

{#if !$isLoading}
    <a
        href={`/${currentLocale}${href}`}
        data-sveltekit-preload-data="tap"
        class="inline-block w-fit border-b border-transparent py-0.5 pr-2 text-[0.97rem] leading-5 no-underline transition-colors duration-200 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
        class:text-zinc-950={isActive}
        class:dark:text-zinc-50={isActive}
        class:font-semibold={isActive}
        class:border-zinc-950={isActive}
        class:dark:border-zinc-50={isActive}
        onclick={onNavLinkClick}
    >
        {label || $_(localeString)}
    </a>
{/if}

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
        class={`group inline-flex w-fit items-center gap-2.5 font-ui text-[0.92rem] leading-5 tracking-[0.01em] no-underline transition-colors duration-150 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 ${isActive ? "text-accent-700 dark:text-accent-300" : ""}`}
        onclick={onNavLinkClick}
    >
        <span
            class={`mt-px h-1.5 w-1.5 rounded-full bg-accent-500 opacity-0 transition-all duration-150 group-hover:opacity-35 dark:bg-accent-300 ${isActive ? "opacity-100" : ""}`}
        ></span>
        <span
            class={`border-b border-transparent pb-px transition-colors duration-150 ${isActive ? "border-accent-500 font-medium dark:border-accent-300" : ""}`}
        >
            {label || $_(localeString)}
        </span>
    </a>
{/if}

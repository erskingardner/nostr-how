<script>
import { page } from "$app/state";
import { fallbackLocale } from "$lib/config/l10n";
import { _, isLoading } from "svelte-i18n";

/** @typedef {"primary" | "secondary" | "filled" | "outline" | "text"} DonateButtonVariant */

/** @type {{ variant?: DonateButtonVariant; class?: string }} */
let {
    variant = "primary",
    class: className = "",
} = $props();

/** @type {Record<DonateButtonVariant, string>} */
const variantStyles = {
    primary:
        "rounded-full bg-accent-600 px-4 py-2 text-[0.92rem] font-medium text-white shadow-[0_16px_32px_-20px_rgba(143,80,44,0.9)] hover:bg-accent-700 dark:bg-accent-400 dark:text-zinc-950 dark:hover:bg-accent-300",
    secondary:
        "rounded-full bg-zinc-100 px-3.5 py-1.5 text-[0.92rem] font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
    filled:
        "rounded-full bg-accent-600 px-4 py-2 text-[0.92rem] font-medium text-white hover:bg-accent-700 dark:bg-accent-400 dark:text-zinc-950 dark:hover:bg-accent-300",
    outline:
        "rounded-full border border-accent-500/22 bg-accent-50/75 px-3.5 py-1.5 text-[0.92rem] font-medium text-accent-700 hover:border-accent-500/35 hover:bg-accent-100/80 hover:text-accent-800 dark:border-accent-400/18 dark:bg-accent-500/10 dark:text-accent-300 dark:hover:border-accent-300/28 dark:hover:bg-accent-500/14 dark:hover:text-accent-100",
    text: "px-0 py-1 text-[0.92rem] font-medium text-accent-700 hover:text-accent-800 dark:text-accent-300 dark:hover:text-accent-100",
};

let classNames = $derived(
    `inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-ui tracking-[0.01em] no-underline transition-colors duration-150 ${variantStyles[variant]} ${className}`.trim()
);

let currentLocale = $derived(page.params.locale || fallbackLocale);
</script>

{#if !$isLoading}
    <a href={`/${currentLocale}/donate`} class={classNames}>{$_("donateButton")}</a>
{/if}

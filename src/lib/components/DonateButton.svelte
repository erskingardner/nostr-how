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
        "rounded-full bg-zinc-950 px-3 py-1.5 text-sm text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white",
    secondary:
        "rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
    filled:
        "rounded-full bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white",
    outline:
        "rounded-full px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-inset ring-zinc-900/12 hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
    text: "px-0 py-1 text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100",
};

let classNames = $derived(
    `inline-flex items-center justify-center gap-1.5 whitespace-nowrap no-underline transition-colors duration-200 ${variantStyles[variant]} ${className}`.trim()
);

let currentLocale = $derived(page.params.locale || fallbackLocale);
</script>

{#if !$isLoading}
    <a href={`/${currentLocale}/donate`} class={classNames}>{$_("donateButton")}</a>
{/if}

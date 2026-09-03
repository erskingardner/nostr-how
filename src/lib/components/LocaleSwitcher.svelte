<script>
import { locales } from "$lib/config/l10n";
import Language from "$lib/elements/icons/Language.svelte";

let menuOpen = $state(false);

let { onLocaleChanged } = $props();

/** @param {MouseEvent} event */
function changeLocale(event) {
    event.preventDefault();
    const target = /** @type {HTMLButtonElement | null} */ (event.currentTarget);
    const nextLocale = target?.dataset?.localecode;

    if (nextLocale) {
        onLocaleChanged(nextLocale);
    }

    menuOpen = false;
}
</script>

<div class="relative flex flex-row items-center">
    <button
        type="button"
        aria-label="Change language"
        class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/65 text-zinc-500 transition-colors duration-150 hover:border-accent-400/35 hover:bg-accent-50 hover:text-accent-700 dark:border-zinc-800/80 dark:bg-zinc-900/65 dark:text-zinc-400 dark:hover:border-accent-400/30 dark:hover:bg-accent-500/10 dark:hover:text-accent-300"
        onclick={() => (menuOpen = !menuOpen)}
        ><Language />
    </button>
    <div
        class="{menuOpen ? 'absolute' : 'hidden'} top-11 rtl:left-0 ltr:right-0 min-w-[11rem] rounded-[1.15rem] border border-zinc-200/75 bg-zinc-50/96 p-1.5 shadow-[0_22px_60px_-34px_rgba(24,24,27,0.45)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/96"
    >
        {#each locales as localeItem}
            <button
                type="button"
                aria-label={`Switch to ${localeItem.name}`}
                class="block w-full rounded-[0.85rem] px-3 py-2 text-left font-ui text-sm leading-5 text-zinc-600 transition-colors duration-150 hover:bg-accent-50 hover:text-accent-700 dark:text-zinc-300 dark:hover:bg-accent-500/10 dark:hover:text-accent-300"
                data-localecode={localeItem.alpha2Code}
                onclick={changeLocale}
            >
                {localeItem.name}
            </button>
        {/each}
    </div>
</div>

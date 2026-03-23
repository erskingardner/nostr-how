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
        class="text-purple-950 dark:text-purple-400 dark:hover:text-purple-300"
        onclick={() => (menuOpen = !menuOpen)}
        ><Language />
    </button>
    <div class="{menuOpen ? 'absolute' : 'hidden'} top-10 rtl:left-0 ltr:right-0 transition-all rounded-md shadow-md bg-zinc-100 dark:bg-zinc-800 py-1">
        {#each locales as localeItem}
            <button
                type="button"
                aria-label={`Switch to ${localeItem.name}`}
                class="rounded-md py-1 pl-4 pr-8 block dark:text-purple-400 dark:hover:text-purple-300 text-purple-950 hover:text-purple-800 hover:bg-purple-300 dark:hover:bg-zinc-700/30 w-full"
                dir={localeItem.alpha2Code === "fa" ? "rtl" : "ltr"}
                data-localecode={localeItem.alpha2Code}
                onclick={changeLocale}
            >
                {localeItem.name}
            </button>
        {/each}
    </div>
</div>

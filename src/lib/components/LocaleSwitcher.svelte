<script lang="ts">
import { locales } from "$lib/config/l10n";
import Language from "$lib/elements/icons/Language.svelte";

let menuOpen = $state(false);

let { onLocaleChanged }: { onLocaleChanged: (locale: string) => void } = $props();

function changeLocale(event: Event) {
    event.preventDefault();
    const elem = event.target as HTMLElement;
    onLocaleChanged(elem.dataset.localecode as string);
    menuOpen = false;
}
</script>

<div class="relative flex flex-row items-center">
    <button class="text-purple-950 dark:text-purple-400 dark:hover:text-purple-300"
        onclick={() => (menuOpen = !menuOpen)}
        ><Language />
    </button>
    <div class="{menuOpen ? 'absolute' : 'hidden'} top-10 rtl:left-0 ltr:right-0 transition-all rounded-md shadow-md bg-zinc-100 dark:bg-zinc-800 py-1">
        {#each locales as localeItem}
            <button class="rounded-md py-1 pl-4 pr-8 block dark:text-purple-400 dark:hover:text-purple-300 text-purple-950 hover:text-purple-800 hover:bg-purple-300 dark:hover:bg-zinc-700/30 w-full"
                dir={localeItem.alpha2Code === "fa" ? "rtl" : "ltr"}
                data-localecode={localeItem.alpha2Code}
                onclick={changeLocale}
            >
                {localeItem.name}
            </button>
        {/each}
    </div>
</div>


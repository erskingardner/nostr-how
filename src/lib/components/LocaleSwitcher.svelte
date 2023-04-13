<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { locales } from '$lib/config/l10n';
    import { locale } from 'svelte-i18n';

    export let value: string | null | undefined;

    const dispatch = createEventDispatcher();

    function changeLocale(event: Event) {
        event.preventDefault();
        // @ts-ignore
        dispatch('locale-changed', event.target.value);
    }
</script>

<div class="locale-selector ml-auto mr-0 md:ml-0">
    <div class="select">
        <select
            {value}
            class="transition-all rounded-md shadow-sm py-1 text-white text-sm
            bg-purple-600/80 hover:bg-purple-700 dark:bg-purple-400/10 dark:hover:bg-purple-400/20
            dark:text-purple-400 dark:hover:text-purple-300 dark:border-purple-400/20
            first-letter:ring-1 ring-inset ring-purple-400/20 hover:ring-purple-300"
            on:change={changeLocale}
        >
            {#each locales as localeItem}
                <option value={localeItem.alpha2Code} selected={localeItem.alpha2Code === $locale}>
                    {localeItem.name}
                </option>
            {/each}
        </select>
    </div>
</div>

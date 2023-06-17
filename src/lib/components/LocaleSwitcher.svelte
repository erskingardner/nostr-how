<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { locales } from '$lib/config/l10n';
    import Language from '$lib/elements/icons/Language.svelte';
    import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';

    const dispatch = createEventDispatcher();

    function changeLocale(event: Event) {
        event.preventDefault();
        // @ts-ignore
        dispatch('locale-changed', event?.target?.dataset.localecode);
    }
</script>

<Menu class="relative flex flex-row items-center">
    <MenuButton class="text-purple-950 dark:text-purple-400 dark:hover:text-purple-300"
        ><Language />
    </MenuButton>
    <MenuItems
        class="absolute top-10 rtl:left-0 ltr:right-0 transition-all rounded-md shadow-md
    bg-zinc-100 dark:bg-zinc-800 py-1"
    >
        {#each locales as localeItem}
            <MenuItem>
                <a
                    dir={localeItem.alpha2Code === 'fa' ? 'rtl' : 'ltr'}
                    href="/"
                    data-localecode={localeItem.alpha2Code}
                    on:click={changeLocale}
                    class="rounded-md py-1 pl-4 pr-8 block dark:text-purple-400 dark:hover:text-purple-300 text-purple-950 hover:text-purple-800 hover:bg-purple-300 dark:hover:bg-zinc-700/30"
                    >{localeItem.name}</a
                >
            </MenuItem>
        {/each}
    </MenuItems>
</Menu>

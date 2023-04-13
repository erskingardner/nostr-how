<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
    import { _, locale, isLoading } from 'svelte-i18n';
    import { setupI18n } from '$lib/i18n';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import MenuIcon from '$lib/elements/icons/Menu.svelte';
    import { sidebarVisible } from '$lib/store';

    function updateLocale(newLocale: string) {
        setupI18n({ locale: newLocale });
        if (!$page.url.pathname.startsWith(`/${newLocale}`)) {
            const newPathname = `/${newLocale}/` + $page.url.pathname.split('/').slice(2).join('/');
            goto(newPathname);
        }
    }
</script>

{#if !$isLoading}
    <div
        class="
            header px-8 py-3 border-b
            border-zinc-400/20 dark:border-zinc-200/20
            flex flex-row justify-start gap-4 md:justify-end items-center
            backdrop-blur-sm w-full sticky top-0 z-50
            "
    >
        <button on:click={() => sidebarVisible.set(!$sidebarVisible)} class="block md:hidden">
            <MenuIcon />
        </button>
        <a href="/" class="md:hidden flex flex-row gap-2 items-center text-2xl no-underline">
            <!-- <img src="/images/nostrich-150.webp" class="w-10 h-10" alt="nostrich" /> -->
            <span class="font-extrabold leading-tight">{$_('title')}</span>
        </a>
        <DonateButton variant="primary" classes="text-sm hidden md:block" />
        <span class="hidden md:block ml-3 mr-4 border-r border-purple-400/20">&nbsp;</span>
        <LocaleSwitcher value={$locale} on:locale-changed={(e) => updateLocale(e.detail)} />
    </div>
{/if}

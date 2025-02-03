<script lang="ts">
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import DonateButton from "$lib/components/DonateButton.svelte";
import LocaleSwitcher from "$lib/components/LocaleSwitcher.svelte";
import MenuIcon from "$lib/elements/icons/Menu.svelte";
import { setupI18n } from "$lib/i18n";
import { sidebarVisible } from "$lib/store";
import { _, isLoading } from "svelte-i18n";

function updateLocale(newLocale: string) {
    setupI18n({ locale: newLocale });
    if (!$page.url.pathname.startsWith(`/${newLocale}`)) {
        const newPathname = `/${newLocale}/${$page.url.pathname.split("/").slice(2).join("/")}`;
        goto(newPathname);
    }
}
</script>

{#if !$isLoading}
    <div
        class="
            header px-8 py-3 border-b
            border-zinc-400/20 dark:border-zinc-200/20
            flex flex-row justify-between gap-4 md:justify-end items-center
            backdrop-blur-xs w-full sticky top-0 z-50
            "
    >
        <div class="flex flex-row items-center gap-4">
            <button on:click={() => sidebarVisible.set(!$sidebarVisible)} class="block md:hidden">
                <MenuIcon />
            </button>
            <a href="/" class="md:hidden flex flex-row gap-2 items-center text-2xl no-underline">
                <span class="font-extrabold leading-tight">{$_("title")}</span>
            </a>
        </div>
        <div class="flex flex-row items-center gap-4">
            <DonateButton variant="primary" class="text-sm hidden md:block" />
            <span class="hidden md:block border-r border-purple-400/20">&nbsp;</span>
            <LocaleSwitcher onLocaleChanged={(locale) => updateLocale(locale)} />
        </div>
    </div>
{/if}

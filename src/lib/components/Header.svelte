<script>
import { goto } from "$app/navigation";
import { page } from "$app/state";
import DonateButton from "$lib/components/DonateButton.svelte";
import LocaleSwitcher from "$lib/components/LocaleSwitcher.svelte";
import MenuIcon from "$lib/elements/icons/Menu.svelte";
import { sidebarVisible } from "$lib/store";
import { _, isLoading } from "svelte-i18n";

/** @param {string} newLocale */
function updateLocale(newLocale) {
    const segments = page.url.pathname.split("/").filter(Boolean);
    const slugPath = segments.slice(1).join("/");
    const nextPath = `/${newLocale}/${slugPath || "get-started"}`;

    if (page.url.pathname !== nextPath) {
        goto(nextPath);
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
            <button
                type="button"
                aria-label="Open navigation menu"
                onclick={() => sidebarVisible.set(!$sidebarVisible)}
                class="block md:hidden"
            >
                <MenuIcon />
            </button>
            <a href="/" class="md:hidden flex flex-row gap-2 items-center text-2xl no-underline">
                <span class="font-extrabold leading-tight">{$_("title")}</span>
            </a>
        </div>
        <div class="flex flex-row items-center gap-4">
            <DonateButton variant="primary" class="text-sm hidden md:block" />
            <span class="hidden md:block border-r border-purple-400/20">&nbsp;</span>
            <LocaleSwitcher onLocaleChanged={updateLocale} />
        </div>
    </div>
{/if}

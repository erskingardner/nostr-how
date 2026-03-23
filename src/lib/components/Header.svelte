<script>
import { goto } from "$app/navigation";
import { page } from "$app/state";
import DonateButton from "$lib/components/DonateButton.svelte";
import LocaleSwitcher from "$lib/components/LocaleSwitcher.svelte";
import MenuIcon from "$lib/elements/icons/Menu.svelte";
import { sidebarVisible } from "$lib/store";
import { isLoading } from "svelte-i18n";

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
    <header
        class="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/88 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/82"
    >
        <div class="mx-auto flex max-w-[76rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <div class="flex flex-row items-center gap-3">
            <button
                type="button"
                aria-label="Open navigation menu"
                onclick={() => sidebarVisible.set(!$sidebarVisible)}
                class="grid h-10 w-10 place-items-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50 lg:hidden"
            >
                <MenuIcon />
            </button>
                <a
                    href="/"
                    class="flex flex-row items-center gap-3 no-underline text-zinc-950 dark:text-zinc-50"
                >
                    <img
                        src="/images/nostrich-150.webp"
                        class="h-8 w-8 rounded-full ring-1 ring-zinc-900/10 dark:ring-white/10"
                        alt="nostrich"
                    />
                    <span class="font-serif text-2xl leading-none font-bold tracking-tight">Nostr.how</span>
                </a>
            </div>

            <div class="flex flex-row items-center gap-2 sm:gap-3">
                <DonateButton variant="outline" class="hidden sm:inline-flex" />
                <LocaleSwitcher onLocaleChanged={updateLocale} />
            </div>
        </div>
    </header>
{/if}

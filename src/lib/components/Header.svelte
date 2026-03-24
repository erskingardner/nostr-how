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
        class="sticky top-0 z-50 border-b border-zinc-200/45 bg-zinc-50/76 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/72"
    >
        <div class="mx-auto flex max-w-[76rem] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
            <div class="flex flex-row items-center gap-3">
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    onclick={() => sidebarVisible.set(!$sidebarVisible)}
                    class="grid h-9 w-9 place-items-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50 lg:hidden"
                >
                    <MenuIcon />
                </button>
                <a
                    href="/"
                    class="flex flex-row items-center gap-3 no-underline text-zinc-950 dark:text-zinc-50"
                >
                    <img
                        src="/images/nostrich-150.webp"
                        class="h-8 w-8 rounded-full ring-1 ring-zinc-900/8 dark:ring-white/10"
                        alt="nostrich"
                    />
                    <span class="font-serif text-[1.7rem] leading-none font-bold tracking-[-0.04em]">
                        Nostr.how
                    </span>
                </a>
            </div>

            <div class="flex flex-row items-center gap-2">
                <DonateButton variant="primary" class="hidden sm:inline-flex" />
                <LocaleSwitcher onLocaleChanged={updateLocale} />
            </div>
        </div>
    </header>
{/if}

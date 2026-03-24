<script>
import { page } from "$app/state";
import { isRtlLocale } from "$lib/config/l10n";
import "../app.css";
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import CloseIcon from "$lib/elements/icons/Close.svelte";
import { sidebarVisible } from "$lib/store";
import { slide } from "svelte/transition";

let { children } = $props();
let layoutDir = $derived(isRtlLocale(page.params.locale || ""));

function closeSidebar() {
    sidebarVisible.set(false);
}
</script>

<div class="relative min-h-screen overflow-x-clip" dir={layoutDir ? "rtl" : "ltr"}>
    <div
        class="
            pointer-events-none absolute inset-x-0 top-0 z-0 h-[28rem]
            bg-linear-to-r from-[#dcd2ff] via-[#f5efe8] to-[#f4d7ef]
            opacity-60 blur-3xl [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]
            dark:from-[#3b2754]/70 dark:via-[#1a1824]/80 dark:to-[#3b2234]/60 dark:opacity-90"
    ></div>

    <div class="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main class="flex-1 pb-24 pt-6 lg:pb-28 lg:pt-8">
            <div
                class="mx-auto grid max-w-[76rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,46rem)_minmax(0,1fr)] lg:gap-20 lg:px-8"
            >
                <div class="min-w-0">
                    {@render children()}
                </div>

                <aside class="hidden lg:block">
                    <div
                        class="sticky top-24 ml-auto w-52 opacity-60 transition-opacity duration-100 ease-out hover:opacity-100"
                    >
                        <Sidebar onNavLinkClicked={() => {}} />
                    </div>
                </aside>
            </div>
        </main>

        <Footer />
    </div>

    {#if $sidebarVisible}
        <div class="fixed inset-0 z-50 lg:hidden">
            <button
                type="button"
                aria-label="Close navigation menu"
                class="absolute inset-0 bg-zinc-950/20 backdrop-blur-[2px]"
                onclick={closeSidebar}
            ></button>
            <aside
                transition:slide={{ axis: 'y', duration: 220 }}
                class="absolute inset-x-4 top-[4.5rem] rounded-[1.6rem] border border-zinc-200/70 bg-zinc-50/96 p-5 shadow-[0_24px_80px_-44px_rgba(24,24,27,0.65)] ring-1 ring-zinc-900/6 dark:border-zinc-800/70 dark:bg-zinc-900/96 dark:ring-white/8"
            >
                <div class="mb-2 flex items-center justify-end">
                    <button
                        type="button"
                        aria-label="Close navigation menu"
                        class="grid h-9 w-9 place-items-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-50"
                        onclick={closeSidebar}
                    >
                        <CloseIcon />
                    </button>
                </div>

                <Sidebar mobile={true} onNavLinkClicked={closeSidebar} />
            </aside>
        </div>
    {/if}
</div>

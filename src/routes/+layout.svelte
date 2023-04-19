<script lang="ts">
    import '../app.css';
    import { waitLocale, locale } from 'svelte-i18n';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import { sidebarVisible } from '$lib/store';
    import CloseIcon from '$lib/elements/icons/Close.svelte';
    import { slide } from 'svelte/transition';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });

    export async function preload() {
        return waitLocale($locale as string);
    }
</script>

<div class="relative flex">
    <div
        class="
            absolute h-96 z-0 inset-0 bg-gradient-to-r from-[#5e08c1] to-[#e250f9]
            opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]
            dark:from-[#5e08c1]/50 dark:to-[#e250f9]/50"
    />

    <aside
        transition:slide={{ axis: 'x', duration: 200 }}
        class="w-full md:w-72 z-20 h-full md:h-screen fixed bg-zinc-900 md:bg-transparent hidden md:block md:sticky overflow-y-scroll
        top-0 px-6 pt-4 border-r border-zinc-400/20"
    >
        <button
            class="ml-auto block md:hidden"
            on:click={() => sidebarVisible.set(!$sidebarVisible)}
        >
            <CloseIcon />
        </button>
        <Sidebar />
    </aside>
    {#if $sidebarVisible}
        <aside
            transition:slide={{ axis: 'x', duration: 200 }}
            class="w-full md:w-72 z-20 h-full md:h-screen fixed bg-zinc-50 dark:bg-zinc-900 md:bg-transparent md:block md:sticky overflow-y-scroll
        top-0 px-6 pt-4 border-r border-zinc-400/20"
        >
            <button
                class="ml-auto block md:hidden"
                on:click={() => sidebarVisible.set(!$sidebarVisible)}
            >
                <CloseIcon />
            </button>
            <Sidebar on:navLinkClicked={() => sidebarVisible.set(!$sidebarVisible)} />
        </aside>
    {/if}

    <div class="z-10 grow">
        <Header />
        <div class="mainContent p-8 grow mb-20">
            <div class="prose dark:prose-invert mx-auto">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</div>

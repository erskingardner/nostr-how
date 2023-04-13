<script lang="ts">
    import { _, isLoading, locale } from 'svelte-i18n';
    import DonateButton from '$lib/components/DonateButton.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
</script>

{#if !$isLoading}
    <a href="/" class="hidden md:flex flex-row gap-2 items-end text-3xl no-underline">
        <img src="/images/nostrich-150.webp" class="w-10 h-10" alt="nostrich" />
        <span class="font-extrabold leading-tight">{$_('title')}</span>
    </a>

    <div class="navWrapper guides md:mt-10 ml-4">
        <h2 class="mb-2 font-semibold">{$_('nav.guides')}</h2>
        <ul class="nav text-base">
            <li><NavLink href="/get-started" localeString="nav.getStarted" /></li>
            <li><NavLink href="/guides/iris" localeString="nav.guideIris" /></li>
            <li><NavLink href="/guides/damus" localeString="nav.guideDamus" /></li>
            <li><NavLink href="/guides/amethyst" localeString="nav.guideAmethyst" /></li>
            <li><NavLink href="/guides/get-verified" localeString="nav.getNip05" /></li>
        </ul>
    </div>

    <div class="navWrapper resources mt-10 mb-10 ml-4">
        <h2 class="mb-2 font-semibold">{$_('nav.resources')}</h2>
        <ul class="nav text-base">
            <li><NavLink href="/what-is-nostr" localeString="nav.whatIs" /></li>
            <li><NavLink href="/why-nostr" localeString="nav.whyWeNeed" /></li>
            <li><NavLink href="/zaps" localeString="nav.whatZaps" /></li>
            <li><NavLink href="/the-protocol" localeString="nav.nostrProtocol" /></li>
            <li><NavLink href="/clients" localeString="nav.clients" /></li>
            <li><NavLink href="/relays" localeString="nav.relays" /></li>
            <li>
                <NavLink href="/relay-implementations" localeString="nav.relayImplementations" />
            </li>
            <li><NavLink href="/nostr-projects" localeString="nav.nostrProjects" /></li>
            <li><NavLink href="/contribute" localeString="nav.contribute" /></li>
        </ul>
    </div>

    <div class="flex flex-col items-center mx-auto">
        <DonateButton variant="primary" classes="text-sm" />
        <div class="colophon text-zinc-500 dark:text-zinc-400 mt-4 text-sm">
            <span>{$_('colophon')} </span>
            <a
                href="https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc"
                target="_blank"
                class="underline hover:text-zinc-600 dark:hover:text-zinc-200"
            >
                JeffG
            </a>
        </div>
    </div>
{/if}

<script>
import DonateButton from "$lib/components/DonateButton.svelte";
import NavLink from "$lib/components/NavLink.svelte";
import { _, isLoading } from "svelte-i18n";

const navLinks = {
    pages: [
        { href: "/what-is-nostr", localeString: "nav.whatIs" },
        { href: "/why-nostr", localeString: "nav.whyWeNeed" },
        { href: "/get-started", localeString: "nav.getStarted" },
        { href: "/the-protocol", localeString: "nav.nostrProtocol" },
        { href: "/clients", localeString: "nav.clients" },
        { href: "/relays", localeString: "nav.relays" },
        { href: "/zaps", localeString: "nav.whatZaps" },
        { href: "/get-verified", localeString: "nav.getNip05" },
    ],
};

let { onNavLinkClicked } = $props();
</script>

{#if !$isLoading}
    <a href="/" class="hidden md:flex flex-row gap-2 items-end text-3xl no-underline">
        <img src="/images/nostrich-150.webp" class="w-10 h-10" alt="nostrich" />
        <span class="font-extrabold leading-tight">{$_("title")}</span>
    </a>

    <div class="navWrapper resources mt-10 mb-10 rtl:mr-4 ltr:ml-4">
        <h2 class="mb-2 font-semibold">{$_("nav.resources")}</h2>
        <ul class="nav text-base">
            {#each navLinks.pages as link}
                <li>
                    <NavLink onNavLinkClick={onNavLinkClicked} href={link.href} localeString={link.localeString} />
                </li>
            {/each}
        </ul>
    </div>

    <div class="flex flex-col items-center mx-auto">
        <DonateButton variant="primary" class="text-sm" />
        <div class="colophon text-zinc-500 dark:text-zinc-400 mt-4 text-sm">
            <span>{$_("colophon")} </span>
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

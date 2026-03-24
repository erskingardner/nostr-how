<script>
import NavLink from "$lib/components/NavLink.svelte";
import { isLoading } from "svelte-i18n";

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
        { href: "/donate", localeString: "nav.donate" },
    ],
};

/** @type {{ onNavLinkClicked?: () => void; mobile?: boolean }} */
let {
    onNavLinkClicked = () => {},
    mobile = false,
} = $props();
</script>

{#if !$isLoading}
    <nav>
        <ul class:space-y-2={mobile} class:space-y-3={!mobile}>
            {#each navLinks.pages as link}
                <li>
                    <NavLink
                        onNavLinkClick={onNavLinkClicked}
                        href={link.href}
                        localeString={link.localeString}
                    />
                </li>
            {/each}
        </ul>
    </nav>
{/if}

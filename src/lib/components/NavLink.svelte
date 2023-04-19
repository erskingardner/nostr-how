<script lang="ts">
    import { _, isLoading, locale } from 'svelte-i18n';
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let href: string;
    export let localeString: string;

    function navLinkClick() {
        dispatch('navLinkClicked');
    }
</script>

{#if !$isLoading}
    <a
        href={`/${$locale}${href}`}
        data-sveltekit-preload-data="tap"
        class:active={$page.url.pathname.includes(href)}
        on:click={navLinkClick}
    >
        {$_(localeString)}
    </a>
{/if}

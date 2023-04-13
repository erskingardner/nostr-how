<script lang="ts">
    import { _, isLoading, locale } from 'svelte-i18n';
    import { page } from '$app/stores';

    export let href: string;
    export let localeString: string;
</script>

{#if !$isLoading}
    <a
        href={`/${$locale}${href}`}
        data-sveltekit-preload-data="tap"
        class:active={$page.url.pathname.includes(href)}
    >
        {$_(localeString)}
    </a>
{/if}

<script>
    import { page } from '$app/stores';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { _, isLoading } from 'svelte-i18n';
</script>

{#if $page.error && !$isLoading}
    <PageHeader text={$page.error.title} />
    <p>{$page.error.message}</p>
    <p>
        <a
            href="https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc"
            >{$_('contactMe')}</a
        >
    </p>
{/if}

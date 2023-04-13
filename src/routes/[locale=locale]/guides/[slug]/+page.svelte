<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { supportedLocales } from '$lib/config/l10n';
    import { locale } from 'svelte-i18n';

    export let data;

    const otherLocales: string[] = supportedLocales.filter((item) => {
        return item !== $locale;
    });
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    {#each otherLocales as supportedLocale}
        <link
            rel="alternate"
            hreflang={supportedLocale}
            href="https://nostr.how/{supportedLocale}/guides/{data.slug}"
        />
    {/each}
</svelte:head>

<PageHeader text={data.title} />

<p class="text-lg md:text-xl break-words max-w-xl text-zinc-50/50 font-light">
    {data.description}
</p>

<div class="markdownContent prose-md dark:prose-invert">
    <svelte:component this={data.content} />
</div>

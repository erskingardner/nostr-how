<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { _, isLoading } from 'svelte-i18n';
    import { locale } from 'svelte-i18n';

    let content: any;
    let title: string = '';
    let description: string = '';

    async function loadMarkdown() {
        const homepage = await import(`../pages/${$locale}/index.md`);
        title = homepage.metadata.title;
        description = homepage.metadata.description;
        content = homepage.default;
    }

    $: {
        if (!$isLoading && $locale) {
            loadMarkdown();
        }
    }
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head>

{#if !$isLoading}
    <PageHeader text={title} />
    <p class="text-lg md:text-xl break-words max-w-xl text-zinc-50/50 font-light">
        {description}
    </p>

    <div class="markdownContent prose-md dark:prose-invert">
        <svelte:component this={content} on:locale-changed={loadMarkdown()} />
    </div>
{/if}

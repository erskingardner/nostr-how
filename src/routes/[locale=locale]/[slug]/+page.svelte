<script>
import { page } from "$app/state";
import { supportedLocales } from "$lib/config/l10n";
import PageHeader from "$lib/components/PageHeader.svelte";

let { data } = $props();

let currentLocale = $derived(page.params.locale);
let pageUrl = $derived(page.url.pathname);
let otherLocales = $derived(
    supportedLocales.filter((item) => {
        return item !== currentLocale;
    })
);
</script>

<svelte:head>
    <!-- HTML Meta Tags -->
    <title>{data.title}</title>
    <meta name="description" content={data.description} />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://nostr.how{pageUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content="https://nostr.how/images/nostrich1200x630.webp" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="nostr.how" />
    <meta property="twitter:url" content="https://nostr.how{pageUrl}" />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content="https://nostr.how/images/nostrich1200x630.webp" />

    {#each otherLocales as supportedLocale}
        <link
            rel="alternate"
            hreflang={supportedLocale}
            href="https://nostr.how/{supportedLocale}/{data.slug}"
        />
    {/each}
</svelte:head>

<section class="space-y-8 md:space-y-10">
    <PageHeader text={data.title} />
    <p
        class="max-w-2xl break-words text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-[1.35rem] md:leading-9"
    >
        {data.description}
    </p>

    <div
        class="markdownContent prose prose-zinc max-w-none text-[1.02rem] leading-8 dark:prose-invert prose-headings:font-semibold prose-headings:text-zinc-950 prose-strong:text-zinc-950 prose-a:text-zinc-900 dark:prose-headings:text-zinc-50 dark:prose-strong:text-zinc-50 dark:prose-a:text-zinc-100 lg:prose-lg"
    >
        <data.content />
    </div>
</section>

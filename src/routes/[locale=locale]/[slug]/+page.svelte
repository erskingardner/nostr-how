<script lang="ts">
import { supportedLocales } from "$lib/config/l10n";
import { locale } from "svelte-i18n";
import PageHeader from "$lib/components/PageHeader.svelte";
import { page } from "$app/stores";

export let data;
let pageUrl: string = $page.url.pathname;

const otherLocales: string[] = supportedLocales.filter((item) => {
    return item !== $locale;
});
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

<PageHeader text={data.title} />
<p class="text-lg md:text-xl break-words max-w-xl prose-md dark:prose-invert font-light">
    {data.description}
</p>

<div class="markdownContent prose-md dark:prose-invert">
    <svelte:component this={data.content} />
</div>

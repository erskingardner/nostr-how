<script lang="ts">
import { page } from "$app/state";
import { fallbackLocale, supportedLocales } from "$lib/config/l10n";
import {
    defaultSocialImagePath,
    defaultTwitterCard,
    siteName,
    toAbsoluteUrl,
} from "$lib/config/site";

let {
    title,
    description,
    slug,
    imagePath = defaultSocialImagePath,
} = $props<{
    title: string;
    description: string;
    slug: string;
    imagePath?: string;
}>();

let currentLocale = $derived(page.params.locale || fallbackLocale);
let canonicalUrl = $derived(toAbsoluteUrl(page.url.pathname));
let imageUrl = $derived(toAbsoluteUrl(imagePath));
let localizedAlternates = $derived(
    supportedLocales.map((locale) => ({
        locale,
        href: toAbsoluteUrl(`/${locale}/${slug}`),
    }))
);
let xDefaultUrl = $derived(toAbsoluteUrl(`/${fallbackLocale}/${slug}`));
let structuredData = $derived(
    JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonicalUrl,
        inLanguage: currentLocale,
        isPartOf: {
            "@type": "WebSite",
            name: siteName,
            url: toAbsoluteUrl("/"),
        },
        about: {
            "@type": "Thing",
            name: "Nostr",
            description: "A simple, open protocol for decentralized publishing and communication.",
        },
    }).replace(/</g, "\\u003C")
);
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <meta name="robots" content="index, follow, max-image-preview:large" />

    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content={currentLocale} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={`${siteName} social preview`} />

    <meta name="twitter:card" content={defaultTwitterCard} />
    <meta name="twitter:domain" content="nostr.how" />
    <meta name="twitter:url" content={canonicalUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={`${siteName} social preview`} />

    <link rel="alternate" hreflang="x-default" href={xDefaultUrl} />
    {#each localizedAlternates as alternate}
        <link rel="alternate" hreflang={alternate.locale} href={alternate.href} />
    {/each}

    <svelte:element this={"script"} type="application/ld+json">{structuredData}</svelte:element>
</svelte:head>

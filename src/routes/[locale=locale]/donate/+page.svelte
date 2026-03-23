<script>
import PageHeader from "$lib/components/PageHeader.svelte";

const donationWays = [
    {
        title: "Zap on Nostr",
        body: "If you already use Nostr, the easiest way to support Nostr.how is to zap JeffG directly from your favorite client.",
        cta: "Open JeffG on Primal",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
    {
        title: "Send sats directly",
        body: "If you prefer a straight Lightning payment, you can send sats directly to the Nostr.how Lightning address below.",
        cta: "Open your Lightning wallet",
        href: "lightning:erskingardner@getalby.com",
        address: "erskingardner@getalby.com",
    },
    {
        title: "Support bigger improvements",
        body: "If you want to help fund a larger content, translation, or design push, reach out to JeffG on Nostr and we can coordinate.",
        cta: "Get in touch on Nostr",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
];
</script>

<svelte:head>
    <title>Donate | Nostr.how</title>
    <meta
        name="description"
        content="Support Nostr.how with a zap, a direct Lightning donation, or by reaching out about larger sponsorship."
    />
</svelte:head>

<section class="space-y-8 md:space-y-10">
    <PageHeader text="Donate" />
    <p
        class="max-w-2xl break-words text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-[1.35rem] md:leading-9"
    >
        If Nostr.how has been useful, these are the simplest ways to help keep the site improving.
    </p>

    <div class="grid gap-4 md:gap-5">
        {#each donationWays as way}
            <article
                class="rounded-[2rem] border border-zinc-200/70 bg-white/70 p-6 shadow-[0_24px_80px_-48px_rgba(24,24,27,0.6)] backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/55"
            >
                <div class="space-y-4">
                    <div class="space-y-2">
                        <h2 class="text-2xl leading-tight text-zinc-950 dark:text-zinc-50 md:text-[2rem]">
                            {way.title}
                        </h2>
                        <p class="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                            {way.body}
                        </p>
                    </div>

                    {#if way.address}
                        <div
                            class="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-zinc-950/4 px-3 py-2 text-sm text-zinc-700 dark:bg-white/6 dark:text-zinc-200"
                        >
                            <span class="text-zinc-500 dark:text-zinc-400">Lightning address</span>
                            <code class="break-all font-medium text-zinc-950 dark:text-zinc-50">{way.address}</code>
                        </div>
                    {/if}

                    <div>
                        <a
                            href={way.href}
                            class="inline-flex items-center rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 no-underline transition-colors duration-150 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
                            target={way.newTab ? "_blank" : undefined}
                            rel={way.newTab ? "noreferrer" : undefined}
                        >
                            {way.cta}
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>

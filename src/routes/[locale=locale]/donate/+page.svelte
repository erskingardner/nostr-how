<script>
import PageHeader from "$lib/components/PageHeader.svelte";
import { _ } from "svelte-i18n";

const donationWays = [
    {
        titleKey: "donatePage.zapTitle",
        bodyKey: "donatePage.zapBody",
        ctaKey: "donatePage.zapCta",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
    {
        titleKey: "donatePage.lightningTitle",
        bodyKey: "donatePage.lightningBody",
        ctaKey: "donatePage.lightningCta",
        href: "lightning:erskingardner@getalby.com",
        address: "erskingardner@getalby.com",
    },
    {
        titleKey: "donatePage.supportTitle",
        bodyKey: "donatePage.supportBody",
        ctaKey: "donatePage.supportCta",
        href: "https://primal.net/jeffg",
        newTab: true,
    },
];
</script>

<svelte:head>
    <title>{$_("donatePage.metaTitle")}</title>
    <meta name="description" content={$_("donatePage.metaDescription")} />
</svelte:head>

<section class="space-y-8 md:space-y-10">
    <PageHeader text={$_("donatePage.title")} />
    <p
        class="max-w-2xl break-words text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-[1.35rem] md:leading-9"
    >
        {$_("donatePage.intro")}
    </p>

    <div class="grid gap-4 md:gap-5">
        {#each donationWays as way}
            <article
                class="rounded-[2rem] border border-zinc-200/70 bg-white/70 p-6 shadow-[0_24px_80px_-48px_rgba(24,24,27,0.6)] backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/55"
            >
                <div class="space-y-4">
                    <div class="space-y-2">
                        <h2 class="text-2xl leading-tight text-zinc-950 dark:text-zinc-50 md:text-[2rem]">
                            {$_(way.titleKey)}
                        </h2>
                        <p class="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                            {$_(way.bodyKey)}
                        </p>
                    </div>

                    {#if way.address}
                        <div
                            class="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-zinc-950/4 px-3 py-2 text-sm text-zinc-700 dark:bg-white/6 dark:text-zinc-200"
                        >
                            <span class="text-zinc-500 dark:text-zinc-400">{$_("donatePage.addressLabel")}</span>
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
                            {$_(way.ctaKey)}
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>

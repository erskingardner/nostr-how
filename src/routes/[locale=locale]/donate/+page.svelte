<script>
import PageHeader from "$lib/components/PageHeader.svelte";
import Seo from "$lib/components/Seo.svelte";
import { donationWays } from "$lib/data/donate";
import { _ } from "svelte-i18n";
</script>

<Seo
    title={$_("donatePage.metaTitle")}
    description={$_("donatePage.metaDescription")}
    slug="donate"
/>

<section class="space-y-10 md:space-y-14">
    <PageHeader text={$_("donatePage.title")} />
    <p
        class="max-w-[40rem] break-words text-[1.12rem] leading-[1.85] text-zinc-700 dark:text-zinc-300 md:text-[1.45rem] md:leading-[1.7]"
    >
        {$_("donatePage.intro")}
    </p>

    <div class="grid gap-4 md:gap-5">
        {#each donationWays as way}
            <article
                class="rounded-[1.85rem] border border-zinc-200/70 bg-white/72 p-6 shadow-[0_20px_64px_-42px_rgba(24,24,27,0.45)] backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/58"
            >
                <div class="space-y-4">
                    <div class="space-y-2">
                        <h2
                            class="text-[1.9rem] leading-tight tracking-[-0.03em] text-zinc-950 dark:text-zinc-50 md:text-[2.15rem]"
                        >
                            {$_(way.titleKey)}
                        </h2>
                        <p class="max-w-2xl text-[1.03rem] leading-8 text-zinc-600 dark:text-zinc-300">
                            {$_(way.bodyKey)}
                        </p>
                    </div>

                    {#if way.address}
                        <div
                            class="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-accent-50/85 px-3.5 py-2 font-ui text-sm text-zinc-700 dark:bg-accent-500/10 dark:text-zinc-200"
                        >
                            <span class="text-zinc-500 dark:text-zinc-400">{$_("donatePage.addressLabel")}</span>
                            <code class="break-all font-medium text-zinc-950 dark:text-zinc-50">{way.address}</code>
                        </div>
                    {/if}

                    <div>
                        <a
                            href={way.href}
                            class="inline-flex items-center rounded-full bg-accent-600 px-4 py-2 font-ui text-[0.92rem] font-medium tracking-[0.01em] text-white no-underline transition-colors duration-150 hover:bg-accent-700 dark:bg-accent-400 dark:text-zinc-950 dark:hover:bg-accent-300"
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

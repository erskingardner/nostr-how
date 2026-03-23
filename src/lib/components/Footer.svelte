<script>
import DonateButton from "$lib/components/DonateButton.svelte";
import { isLoading } from "svelte-i18n";
import GithubIcon from "$lib/elements/icons/Github.svelte";
</script>

{#if !$isLoading}
    <footer
        class="sticky bottom-0 z-40 mt-auto border-t border-zinc-200/70 bg-zinc-50/90 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/86"
    >
        <div
            class="mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:px-6 lg:px-8"
        >
            <div
                class="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-ui text-[0.74rem] leading-5 text-zinc-500 dark:text-zinc-400"
            >
                <span class="hidden sm:inline"
                    >Proudly made with 💜 & ⚡ by
                    <a href="https://primal.net/jeffg" class="underline" target="_blank">JeffG</a></span
                >
            </div>

            <div class="flex items-center gap-3">
                <DonateButton variant="outline" />
                <a
                    href="https://github.com/erskingardner/nostr-how"
                    target="_blank"
                    aria-label="View the source code on GitHub"
                    class="inline-flex h-5 w-5 items-center justify-center"
                >
                    <GithubIcon
                        klass="h-4 w-4 text-[#24292f] transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                    />
                </a>
            </div>
        </div>
    </footer>
{/if}

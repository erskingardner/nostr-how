<script>
import DonateButton from "$lib/components/DonateButton.svelte";
import { _, isLoading } from "svelte-i18n";
import GithubIcon from "$lib/elements/icons/Github.svelte";
</script>

{#if !$isLoading}
    <footer
        class="sticky bottom-0 z-40 mt-auto border-t border-zinc-200/45 bg-zinc-50/76 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/72"
    >
        <div
            class="mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-1.5 sm:px-6 lg:px-8"
        >
            <div
                class="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-ui text-[0.7rem] leading-5 text-zinc-500 dark:text-zinc-400"
            >
                <span class="hidden sm:inline"
                    >{$_("colophon")}
                    <a
                        href="https://primal.net/jeffg"
                        class="underline decoration-accent-400/60 underline-offset-4 hover:text-accent-700 dark:hover:text-accent-300"
                        target="_blank"
                    >
                        JeffG
                    </a></span
                >
            </div>

            <div class="flex items-center gap-2.5">
                <a
                    href="https://github.com/erskingardner/nostr-how"
                    target="_blank"
                    aria-label="View the source code on GitHub"
                    class="inline-flex h-5 w-5 items-center justify-center text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    <GithubIcon klass="h-3.5 w-3.5" />
                </a>
                <DonateButton variant="outline" class="text-[0.82rem]" />
            </div>
        </div>
    </footer>
{/if}

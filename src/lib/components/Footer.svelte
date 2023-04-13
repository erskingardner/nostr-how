<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import { _, isLoading } from 'svelte-i18n';
    import GithubIcon from '$lib/elements/icons/Github.svelte';
</script>

{#if !$isLoading}
    <div
        class="footer px-8 py-4 md:py-3 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-zinc-400/20"
    >
        <div class="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="https://github.com/erskingardner/nostr-how" target="_blank" class="w-6 h-6">
                <GithubIcon
                    klass="text-[#24292f] dark:text-white w-6 h-6 hover:text-zinc-600 dark:hover:text-zinc-400"
                />
            </a>
            <span class="text-center md:text-left"
                >{$_('foss')}
                <a
                    href="https://en.wikipedia.org/wiki/MIT_License"
                    class="underline"
                    target="_blank">{$_('mitLicense')}</a
                ></span
            >
        </div>
        <DonateButton classes="text-sm" />
    </div>
    <!-- content here -->
{/if}

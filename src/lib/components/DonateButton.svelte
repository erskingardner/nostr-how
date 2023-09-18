<script lang="ts">
    import { _, isLoading } from "svelte-i18n";

    export let variant: string = "primary";

    const variantStyles: { [key: string]: string } = {
        primary:
            "h-fit transition-all rounded-full bg-purple-600/80 py-1 px-3 text-white hover:bg-purple-700 dark:bg-purple-400/10 dark:text-purple-400 ring-1 ring-inset ring-purple-400/20 dark:hover:bg-purple-400/20 dark:hover:text-purple-300 hover:ring-purple-300",
        secondary:
            "h-fit transition-all rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
        filled: "h-fit transition-all rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-400",
        outline:
            "h-fit transition-all rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
        text: "h-fit transition-all text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500",
    };

    let classNames = `${$$props.class} ${variantStyles[variant]}`;
</script>

{#if !$isLoading}
    <a href="lightning:erskingardner@getalby.com" class={classNames}> ⚡ {$_("donateButton")} </a>
{/if}

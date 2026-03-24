<script>
import PageHeader from "$lib/components/PageHeader.svelte";
import Seo from "$lib/components/Seo.svelte";

let { data } = $props();
</script>

<Seo title={data.title} description={data.description} slug={data.slug} />

<section class="space-y-10 md:space-y-14">
    <PageHeader text={data.title} />
    <p
        class="max-w-[40rem] break-words text-[1.12rem] leading-[1.85] text-zinc-700 dark:text-zinc-300 md:text-[1.45rem] md:leading-[1.7]"
    >
        {data.description}
    </p>

    <div
        class="markdownContent prose prose-zinc max-w-none text-[1.04rem] dark:prose-invert prose-p:text-zinc-700 prose-li:text-zinc-700 prose-headings:font-bold prose-headings:text-zinc-950 prose-strong:text-zinc-950 prose-pre:rounded-[1.4rem] prose-blockquote:not-italic dark:prose-p:text-zinc-300 dark:prose-li:text-zinc-300 dark:prose-headings:text-zinc-50 dark:prose-strong:text-zinc-50 lg:prose-lg"
    >
        <data.content />
    </div>
</section>

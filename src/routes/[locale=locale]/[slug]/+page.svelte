<script>
import PageHeader from "$lib/components/PageHeader.svelte";
import Seo from "$lib/components/Seo.svelte";

let { data } = $props();
</script>

<Seo title={data.title} description={data.description} slug={data.slug} />

<section class="space-y-8 md:space-y-10">
    <PageHeader text={data.title} />
    <p
        class="max-w-2xl break-words text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-[1.35rem] md:leading-9"
    >
        {data.description}
    </p>

    <div
        class="markdownContent prose prose-zinc max-w-none text-[1.02rem] leading-8 dark:prose-invert prose-headings:font-semibold prose-headings:text-zinc-950 prose-strong:text-zinc-950 prose-a:text-zinc-900 dark:prose-headings:text-zinc-50 dark:prose-strong:text-zinc-50 dark:prose-a:text-zinc-100 lg:prose-lg"
    >
        <data.content />
    </div>
</section>

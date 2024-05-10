<script>
	import { T } from "@tolgee/svelte";
	export let data;
</script>

<article class="bg-white p-6 leading-6 text-justify">
<h1 class="text-4xl font-bold text-center mb-8"><T keyName={`post_title_`+data.post.id} /></h1>
{@html data.post.content}
</article>
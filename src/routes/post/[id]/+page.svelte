<script>
	export let data;
</script>

<article class="bg-white p-6 leading-6 text-justify">
<h1 class="text-4xl font-bold text-center mb-8">{data.post.title}</h1>
{@html data.post.content}
</article>
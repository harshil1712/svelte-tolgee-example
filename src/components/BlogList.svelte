<script>
	export let posts;
</script>

<div>
	{#each posts.summaries as post}
		<a href={`/post/${post.id}`} class="block bg-white p-6 rounded-lg shadow-lg mb-6">
			<h2 class="text-xl font-bold mb-2">{post.title}</h2>
			<p>{post.summary}</p>
		</a>
	{/each}
</div>
<script>
	import { T } from "@tolgee/svelte";
	export let posts;
  </script>

  <div>
	{#each posts.summaries as post}
	  <a href={`/post/${post.id}`} class="block bg-white p-6 rounded-lg shadow-lg mb-6">
		<h2 class="text-xl font-bold mb-2">
			<T keyName={`post_title_`+post.id} />
		</h2>
		<p>
			<T keyName={`post_summary_`+post.id} />
		</p>
	  </a>
	{/each}
  </div>
import { posts } from './post/data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			id: post.id,
			title: post.title,
			summary: post.summary
		}))
	};
}

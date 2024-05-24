<script>
	import Navbar from '../components/Navbar.svelte';
	import { TolgeeProvider, Tolgee, DevTools, FormatSimple } from '@tolgee/svelte';

	const tolgee = Tolgee()
		.use(DevTools())
		.use(FormatSimple())
		.init({
			defaultLanguage: 'en',
			apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
			apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
			availableLanguages: ['en', 'de']
		});
</script>

<style global>
	@import '../app.css';
</style>

<TolgeeProvider tolgee={tolgee}>
	<div slot="fallback">Loading...</div>
	<div class="min-h-screen bg-gray-100">
		<Navbar />
		<div class="container mx-auto px-4 py-8">
			<slot/>
		</div>
	</div>
</TolgeeProvider>
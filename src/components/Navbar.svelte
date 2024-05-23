<script>
	import { T, getTolgee, getTolgeeContext } from '@tolgee/svelte';

	const { tolgee } = getTolgeeContext();
	const availableLanguages = tolgee.getInitialOptions().availableLanguages;

	const t = getTolgee(['language'])

	function handleLanguageChange(e) {
		$t.changeLanguage(e.currentTarget.value)
	}

</script>

<nav class="bg-white shadow">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center py-6">
			<div class="text-xl font-semibold text-gray-900">
				My Blog
			</div>
			<div class="space-x-4">
				<a href="/" class="text-gray-600 hover:text-gray-900"><T keyName="navigation_home" defaultValue="Home" /></a>
				<a href="#" class="text-gray-600 hover:text-gray-900"><T keyName="navigation_about" defaultValue="About" /></a>
				<a href="#" class="text-gray-600 hover:text-gray-900"><T keyName="navigation_contact" defaultValue="Contact" /></a>
			</div>
			<div id="switch">
				<select value={$t.getLanguage()} on:change={handleLanguageChange}>
					{#each availableLanguages as lan}
						<option>{lan}</option>
					{/each}
				</select>
			</div>

		</div>
	</div>
</nav>

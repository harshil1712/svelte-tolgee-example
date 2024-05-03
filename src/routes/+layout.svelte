<script>
	import Navbar from '../components/Navbar.svelte';
	import BlogList from '../components/BlogList.svelte';
</script>

<style global>
	@import '../app.css';
</style>

<div class="min-h-screen bg-gray-100">
	<Navbar />
	<div class="container mx-auto px-4 py-8">
	  <slot/>
	</div>
  </div>
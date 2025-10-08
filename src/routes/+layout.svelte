<script>
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';

	// Import header and footer
	

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<!-- Header -->
	<Header />

	<!-- Main Page Content -->
	<main class="flex-1">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<Footer />
</div>

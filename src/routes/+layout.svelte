<script>
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	// No need for $props() destructuring here; SvelteKit uses <slot /> for content
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Responsive layout wrapper -->
<div class="max-w-full mx-auto px-4 overflow-x-hidden">
	<slot />
</div>

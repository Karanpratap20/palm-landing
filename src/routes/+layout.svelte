<script>
	import favicon from '$lib/assets/favicon.svg';
	// No need for $props() destructuring here; SvelteKit uses <slot /> for content
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Responsive layout wrapper -->
<div class="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
	<slot />
</div>

<script>
  import favicon from '$lib/assets/favicon.svg';
  import "../app.css";  // Make sure this is your Tailwind entry file
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- Container that prevents horizontal stretch -->
<div class="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
  <slot />
</div>

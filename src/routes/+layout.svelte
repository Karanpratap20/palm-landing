<script>
  import favicon from '$lib/assets/favicon.svg';
  import "../app.css";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- Only prevent horizontal scroll globally -->
<div class="overflow-x-hidden">
  <slot />
</div>

<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    let isMobileMenuOpen = false;

    // This new function handles both routing and scrolling
    function navigateToSection(id) {
        isMobileMenuOpen = false; // Close mobile menu first

        // The function that performs the smooth scroll
        const scroll = () => {
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    const yOffset = -60; // Your header height offset
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100); // A small delay ensures the page is ready before scrolling
        };

        // Check if we are on a different page (e.g., '/contact')
        if (get(page).url.pathname !== '/') {
            // If so, go to the homepage, and *then* scroll
            goto('/').then(scroll);
        } else {
            // If we're already on the homepage, just scroll
            scroll();
        }
    }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
</svelte:head>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 flex items-center justify-between py-2">

    <a href="/" class="flex items-center gap-2">
      <img src="/logo/logo.png" alt="Site Logo" class="w-8 h-8 object-contain" />
    </a>

    <nav class="hidden md:flex items-center gap-8">
      <button on:click={() => navigateToSection("gallery")} class="text-gray-700 hover:text-blue-700 transition-colors">Gallery</button>
      <button on:click={() => navigateToSection("rooms")} class="text-gray-700 hover:text-blue-700 transition-colors">Rooms</button>
      <button on:click={() => navigateToSection("palm")} class="text-gray-700 hover:text-blue-700 transition-colors">About Us</button>
      <button on:click={() => navigateToSection("contact")} class="text-gray-700 hover:text-blue-700 transition-colors">Contact</button>

      <div class="flex items-center gap-2 text-blue-700 font-medium">
        <i class="fa-solid fa-phone text-lg"></i>
        <a href="tel:+911234567890" class="hover:underline">+91 12345 67890</a>
      </div>
    </nav>

    <button on:click={() => isMobileMenuOpen = !isMobileMenuOpen} class="md:hidden grid place-items-center text-gray-800" aria-label="Open Menu">
      <i class="fas fa-bars text-xl"></i>
    </button>
  </div>

  {#if isMobileMenuOpen}
    <nav class="md:hidden flex flex-col gap-2 p-4 bg-white border-t shadow-md">
      <button on:click={() => navigateToSection("gallery")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Gallery</button>
      <button on:click={() => navigateToSection("rooms")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Rooms</button>
      <button on:click={() => navigateToSection("palm")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">About Us</button>
      <button on:click={() => navigateToSection("contact")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Contact</button>
      <a href="tel:+911234567890" class="flex items-center gap-2 py-2 px-3 text-blue-700 hover:bg-blue-50 rounded-md">
        <i class="fa-solid fa-phone"></i> +91 12345 67890
      </a>
    </nav>
  {/if}
</header>
<script>
  let isMobileMenuOpen = false;

  // Scroll to a section smoothly
  function scrollToSection(id) {
    isMobileMenuOpen = false; // close mobile menu first
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        // Adjust offset for sticky header height
        const yOffset = -80; // change to your header height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  }

  // Scroll to top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    isMobileMenuOpen = false;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
</svelte:head>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 flex items-center justify-between py-3">

    <!-- Logo -->
    <a href="#" on:click|preventDefault={scrollToTop} class="flex items-center gap-2">
      <img src="/logo/logo.png" alt="Site Logo" class="w-10 h-10 object-contain" />
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-8">
      <button on:click={() => scrollToSection("gallery")} class="text-gray-700 hover:text-blue-700 transition-colors">Gallery</button>
      <button on:click={() => scrollToSection("rooms")} class="text-gray-700 hover:text-blue-700 transition-colors">Rooms</button>
      <button on:click={() => scrollToSection("palm")} class="text-gray-700 hover:text-blue-700 transition-colors">About Us</button>
      <button on:click={() => scrollToSection("contact")} class="text-gray-700 hover:text-blue-700 transition-colors">Contact</button>

      <!-- Phone -->
      <div class="flex items-center gap-2 text-blue-700 font-medium">
        <i class="fa-solid fa-phone text-lg"></i>
        <a href="tel:+911234567890" class="hover:underline">+91 12345 67890</a>
      </div>
    </nav>

    <!-- Mobile Menu Button -->
    <button on:click={() => isMobileMenuOpen = !isMobileMenuOpen} class="md:hidden grid place-items-center text-gray-800" aria-label="Open Menu">
      <i class="fas fa-bars text-xl"></i>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <nav class="md:hidden flex flex-col gap-2 p-4 bg-white border-t shadow-md">
      <button on:click={() => scrollToSection("gallery")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Gallery</button>
      <button on:click={() => scrollToSection("rooms")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Rooms</button>
      <button on:click={() => scrollToSection("palm")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">About Us</button>
      <button on:click={() => scrollToSection("contact")} class="py-2 text-left px-3 hover:bg-blue-50 rounded-md">Contact</button>
      <a href="tel:+911234567890" class="flex items-center gap-2 py-2 px-3 text-blue-700 hover:bg-blue-50 rounded-md">
        <i class="fa-solid fa-phone"></i> +91 12345 67890
      </a>
    </nav>
  {/if}
</header>

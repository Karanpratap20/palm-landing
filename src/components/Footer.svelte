<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';

  // Useful links scroll to sections on the homepage
  const usefulLinks = [
    { name: "Gallery", id: "gallery" },
    { name: "Rooms", id: "rooms" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  const socials = [
    
    { icon: "instagram", link: "https://www.instagram.com/thepalm.vikalp/" },
    { icon: "facebook", link: "https://www.facebook.com/" }
  ];

  // Scroll to a section on the current page
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for sticky header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Handle useful links scroll
  async function handleScrollOrNavigate(sectionId) {
    if (get(page).url.pathname !== "/") {
      await goto("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  }
</script>

<section class="bg-black">
  <div class="bg-white rounded-br-[300px] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-gray-900">

      <!-- Useful Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4 tracking-wider">USEFUL LINKS</h3>
        <ul class="space-y-2">
          {#each usefulLinks as link}
            <li>
              <button on:click={() => handleScrollOrNavigate(link.id)} class="hover:text-blue-700 text-left">{link.name}</button>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Policies (only Guest Policy, behaves like useful links) -->
      <div>
        <h3 class="text-xl font-semibold mb-4 tracking-wider">POLICIES</h3>
        <button on:click={() => handleScrollOrNavigate("policies")} class="hover:text-blue-700 text-left">Guest Policy</button>
      </div>

      <!-- Social -->
      <div>
        <h3 class="text-xl font-semibold mb-4 tracking-wider">OUR SOCIAL</h3>
        <div class="grid grid-cols-3 gap-6">
          {#each socials as social}
            <a href={social.link} target="_blank" rel="noopener"
              class="border border-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-50">
              {#if social.icon === "instagram"}
                <i class="fa-brands fa-instagram text-blue-700 text-xl"></i>
              {:else if social.icon === "facebook"}
                <i class="fa-brands fa-facebook-f text-blue-700 text-xl"></i>      
              {/if}
            </a>
          {/each}
        </div>
      </div>

    </div>
  </div>

  <div class="text-white text-center py-4 text-sm">
    ThePalmVikalp © Copyright 2025. All Rights Reserved
  </div>
</section>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
</style>

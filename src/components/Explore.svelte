<script>
    // Data for the "Explore" cards. 
    // Replace image paths with your actual image files.
    const exploreItems = [
        {
            label: 'Best Time to Visit Mukteshwar',
            imageSrc: '/explore/mukteshwar-view.jpeg',
            imageAlt: 'Scenic mountain range with clear blue skies in Mukteshwar',
            description: 'Mukteshwar is most pleasant during summer. Clear skies, blooming flowers, and cool breezes make it perfect for relaxing.',
            link: '/best-time-to-visit'
        },
        {
            label: 'Famous Food in Mukteshwar',
            imageSrc: '/explore/kumaoni-food.jpg',
            imageAlt: 'A bowl of traditional Kumaoni-style potato dish',
            description: 'A spicy Kumaoni-style potato dish, lightly fried with mustard seeds and spices. It’s a popular street food and a must-try for foodies.',
            link: '/famous-food'
        },
        {
            label: 'Best Places to Visit in Mukteshwar',
            imageSrc: '/explore/waterfall.jpeg',
            imageAlt: 'A beautiful waterfall cascading down rocks in a lush green forest',
            description: 'A 350-year-old Shiva temple perched atop a hill, offering spiritual bliss and panoramic Himalayan views. It’s one of the most serene spots.',
            link: '/best-places'
        }
    ];
</script>

<style>
    /* Custom styles to achieve the ticket-like vertical text and background pattern */
    .vertical-text {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
    }

    /* Note: For the background, you'll need a seamless stamp pattern image. */
    /* I'm using a placeholder color here. Replace with your image URL. */
    .stamp-background {
        background-color: #1a202c; /* Fallback color */
        /* background-image: url('/path/to/your/stamp-pattern.png'); */
        background-repeat: repeat;
        background-size: 400px;
    }
</style>

<section class="stamp-background relative overflow-hidden py-16 md:py-24 text-white">
    <!-- Large, semi-transparent text in the background -->
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-7xl md:text-9xl font-extrabold text-white/5 uppercase select-none">
            Hidden Escape
        </h2>
    </div>

    <div class="container mx-auto px-4 relative z-10">
        <!-- Section Title -->
        <div class="flex items-center mb-12">
            <span class="bg-blue-600 w-4 h-10 block"></span>
            <h1 class="text-3xl md:text-5xl font-bold ml-4">There's More To Explore</h1>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {#each exploreItems as item}
                <div class="relative group">
                    <!-- The ticket-stub style vertical label -->
                    <div class="absolute -left-4 top-1/2 -translate-y-1/2 h-48 bg-blue-600 text-white font-semibold flex items-center justify-center p-2 rounded-r-lg shadow-lg">
                        <span class="vertical-text text-sm tracking-wider uppercase">{item.label}</span>
                    </div>

                    <!-- Main Card Content -->
                    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl ml-8 transition-transform duration-300 group-hover:scale-105">
                        <div class="p-4">
                            <img src={item.imageSrc} alt={item.imageAlt} class="w-full h-48 object-cover rounded-md mb-4" />
                            <p class="text-gray-300 text-sm leading-relaxed mb-4 h-24">
                                {item.description}
                            </p>
                            <a href={item.link} class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/70 border border-white/20 text-white rounded-full text-xs font-semibold transition-colors">
                                <!-- Eye Icon SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                                View
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center items-center gap-2 mt-12">
            <button class="w-3 h-3 bg-blue-600 rounded-full"></button>
            <button class="w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"></button>
            <button class="w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"></button>
        </div>
    </div>
</section>

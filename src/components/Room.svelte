<script>
    // Data for the room types to be displayed on the page.
    const rooms = [
        {
            title: 'Deluxe Room',
            description: 'Our Deluxe Rooms offer a cozy and comfortable retreat ideal for solo travelers or couples. Guests can enjoy delicious global cuisine at our multi-cuisine restaurant, stay connected with high-speed WiFi, and unwind in our clean, well-maintained swimming pool. For indoor entertainment, the game room offers a selection of board games and table tennis. Convenient on-site parking ensures easy vehicle access.',
            imageSrc: '/hotel/Delux3.jpg',
            imageAlt: 'A beautifully decorated Deluxe Room with a large bed.'
        },
        {
            title: 'Super Deluxe Room',
            description: 'The Super Deluxe Rooms are designed for those seeking extra space and added amenities, making them ideal for families or business travelers. In addition to all the comforts of the Deluxe Rooms, guests benefit from access to a fully equipped conference hall for meetings and events. Thrill-seekers can take advantage of nearby adventure activities such as paragliding, boating, and other water sports.',
            imageSrc: '/hotel/Delux2.jpg',
            imageAlt: 'A spacious and modern Super Deluxe Room with wooden accents.'
        }
    ];
</script>

<style>
    /* Add any component-specific styles here if needed */
</style>

<section class="bg-white-100 py-12 md:py-16">
    <div class="container mx-auto px-4">
        <!-- Main Section Title -->
        <div class="mb-10 md:mb-12">
            <h1 class="text-2xl md:text-3xl font-bold text-gray-800 text-left">
                Rooms, Types & Facilities
            </h1>
            <div class="flex items-center gap-1 mt-2" style="width: 250px;">
                <div class="h-1 bg-blue-600 flex-grow rounded-l-full"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
            </div>
        </div>
        
        <!-- Room Sections Container -->
        <div class="space-y-12 md:space-y-16">
            {#each rooms as room, i}
                <!-- Each room item uses flexbox for layout -->
                <!-- On mobile, it stacks vertically. On desktop, it's a row. -->
                <!-- `md:flex-row-reverse` is used on even items to alternate the layout. -->
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 {i % 2 !== 0 ? 'md:flex-row-reverse' : ''}">
                    
                    <!-- Image Container (takes 50% width on desktop) -->
                    <div class="w-full md:w-1/2">
                        <img src={room.imageSrc} alt={room.imageAlt} class="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>

                    <!-- Text Content Container (takes 50% width on desktop) -->
                    <div class="w-full md:w-1/2 text-left">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{room.title}</h2>
                        <p class="text-gray-600 leading-relaxed">{room.description}</p>
                    </div>

                </div>
            {/each}
        </div>
    </div>
</section>


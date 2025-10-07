<script>
    // Define the content for the about page
    const aboutContent = {
        title: 'THE PALM RESORT BHIMTAL',
        subtitle: 'Where peace and luxury blend perfectly',
        description: `Convenient on-site parking ensures easy vehicle access. Nature lovers will appreciate peaceful nature walks with scenic views and fresh air. Located in the heart of Bhimtal, the hotel provides easy access to popular attractions like Bhimtal Lake, Victoria Dam, and the Folk Culture Museum. A complimentary welcome drink and in-room tea and coffee setup add an extra touch of hospitality. The hotel's location also makes it easy to explore unique spots like Aquarium Island, Hidimba Parvat, and Nal Damyanti Tal. Guests also have access to an exclusive lounge area for quiet reading or casual meetings. The Suite Room is an excellent choice for honeymooners, long-stay guests, or anyone looking to enjoy Bhimtal in luxury and style.`,
        images: [
            {
                src: '/hotel/delux.jpeg',
                alt: 'A scenic view from a hotel balcony with lush green trees.'
            },
            {
                src: '/hotel/delux2.jpeg',
                alt: 'A comfortable hotel room with a well-made bed and modern decor.'
            }
        ]
    };
</script>

<style>
    /* Scoped styles for any custom adjustments if needed */
</style>

<section class="bg-gray-200 py-12 md:py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

            <!-- Image Column with Overlapping Effect -->
            <div class="w-full md:w-5/12 lg:w-4/12">
                <!-- Relative container to position the images -->
                <div class="relative h-64 sm:h-80 md:h-96">
                    <!-- Back Image -->
                    <img 
                        src={aboutContent.images[0].src} 
                        alt={aboutContent.images[0].alt}
                        class="absolute top-0 left-0 w-4/5 h-4/5 object-cover rounded-xl shadow-lg transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                    />
                    <!-- Front Image -->
                    <img 
                        src={aboutContent.images[1].src} 
                        alt={aboutContent.images[1].alt}
                        class="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-xl shadow-2xl border-4 border-white transform rotate-3 transition-transform duration-300 hover:rotate-0"
                    />
                </div>
            </div>

            <!-- Text Content Column -->
            <div class="w-full md:w-6/12 text-left">
                <h1 class="text-lg md:text-xl font-bold text-gray-800 tracking-widest uppercase">
                    {aboutContent.title}
                </h1>
                <div class="flex items-center gap-1 mt-2 mb-4" style="width: 250px;">
                    <div class="h-1 bg-blue-600 flex-grow rounded-l-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                </div>

                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mt-4 mb-3">
                    {aboutContent.subtitle}
                </h2>
                <p class="text-gray-600 leading-relaxed">
                    {aboutContent.description}
                </p>
            </div>

        </div>
    </div>
</section>


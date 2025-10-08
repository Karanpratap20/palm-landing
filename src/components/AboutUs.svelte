<script>
    // Content for the About Us page
    const aboutData = {
        hotelName: 'The Palm Resort',
        tagline: 'Your Oasis of Tranquility in Bhimtal',
        // ⚠️ Replace with a high-quality, wide image for the banner
        bannerImage: '/hotel/Palm2.jpg', 
        bannerAlt: 'A beautiful and luxurious hotel lobby with modern decor',
        
        mainTitle: 'Discover a Blend of Comfort, Luxury, and Nature',
        description: `Nestled in the serene landscapes of Bhimtal, The Palm Resort offers an escape from the hustle and bustle of city life. We pride ourselves on providing an experience where peace and luxury blend perfectly. Our resort is designed to be a haven for travelers seeking both relaxation and adventure. From our elegantly appointed rooms to our lush green surroundings, every detail is crafted to ensure your stay is unforgettable.

Convenient on-site parking ensures easy vehicle access, while nature lovers will appreciate the peaceful walks with scenic views and fresh mountain air. Located in the heart of Bhimtal, our resort provides easy access to popular attractions like Bhimtal Lake, Victoria Dam, and the Folk Culture Museum. 

We believe in warm hospitality, which is why every guest is welcomed with a complimentary drink and an in-room tea and coffee setup. Whether you're a honeymooner, a long-stay guest, or simply looking to enjoy Bhimtal in style, The Palm Resort is your perfect choice.`
    };
</script>

<style>
    /* Keyframes for the Ken Burns (zoom/pan) effect on the image */
    @keyframes kenburns {
        0% {
            transform: scale(1) translate(0, 0);
        }
        100% {
            transform: scale(1.1) translate(-1%, 1%);
        }
    }

    /* Keyframes for the text fade-in and slide-up animation */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Class to apply the Ken Burns animation */
    .kenburns-image {
        animation: kenburns 15s ease-out infinite alternate;
    }

    /* Classes to apply the text animations */
    .animate-title {
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
        opacity: 0; /* Start hidden */
    }
    .animate-tagline {
        animation: fadeInUp 0.8s ease-out 0.5s forwards;
        opacity: 0; /* Start hidden */
    }
</style>

<div class="bg-gray-50">

    <section class="relative h-80 md:h-96 w-full overflow-hidden">
        <div class="absolute inset-0">
            <img 
                src={aboutData.bannerImage} 
                alt={aboutData.bannerAlt} 
                class="w-full h-full object-cover kenburns-image"
            />
        </div>

        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

        <div class="relative h-full flex flex-col justify-end items-start text-white p-8 md:p-12 z-10">
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight animate-title [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                {aboutData.hotelName}
            </h1>
            <p class="mt-2 text-lg md:text-xl text-gray-200 animate-tagline [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {aboutData.tagline}
            </p>
        </div>
    </section>

    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="bg-white p-8 md:p-12 rounded-xl shadow-lg text-left">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {aboutData.mainTitle}
                </h2>
                
                <div class="flex items-center gap-1 mb-8" style="width: 150px;">
                    <div class="h-1 bg-blue-600 flex-grow rounded-l-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                </div>

                <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    <p>{aboutData.description}</p>
                </div>
            </div>
        </div>
    </section>

</div>
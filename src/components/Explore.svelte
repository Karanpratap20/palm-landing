<script>
    import { onMount } from 'svelte';

    // Data for the "Explore" cards. 
    const exploreItems = [
        {
            label: 'Best Time to Visit Mukteshwar',
            imageSrc: 'https://media.moustachescapes.com/LocalAttraction/1745912501_681082b5036bd.jpg',
            imageAlt: 'Scenic mountain range with clear blue skies in Mukteshwar',
            description: 'Mukteshwar is most pleasant during summer. Clear skies, blooming flowers, and cool breezes make it perfect for sightseeing, trekking, and enjoying fresh fruits from local orchards.',
            link: '/best-time-to-visit'
        },
        {
            label: 'Famous Food in Mukteshwar',
            imageSrc: 'https://media.moustachescapes.com/LocalAttraction/1745912641_681083416b376.jpg',
            imageAlt: 'A bowl of traditional Kumaoni-style potato dish',
            description: 'A spicy Kumaoni-style potato dish, lightly fried with mustard seeds and spices. It’s a popular street food and a must-try for anyone visiting Mukteshwar.',
            link: '/famous-food'
        },
        {
            label: 'Best Places to Visit in Mukteshwar',
            imageSrc: 'https://media.moustachescapes.com/LocalAttraction/1745912823_681083f76b2a7.jpg',
            imageAlt: 'A beautiful waterfall cascading down rocks in a lush green forest',
            description: 'A 350-year-old Shiva temple perched atop a hill, offering spiritual bliss and panoramic Himalayan views. It’s one of the most sacred and visited places in Mukteshwar.',
            link: '/best-places'
        },
        {
            label: 'Religious Places to Visit',
            imageSrc: 'https://media.moustachescapes.com/LocalAttraction/1745912951_68108477af85f.jpg',
            imageAlt: 'An ancient temple in Mukteshwar',
            description: 'The Mukteshwar Dham Temple, dedicated to Lord Shiva, is one of the most revered sites in the area. It offers panoramic views of the Himalayas and is known for its spiritual significance.',
            link: '/religious-places'
        }
    ];

    let sliderContainer;
    let cardWidth = 0;
    let activeIndex = 0;

    onMount(() => {
        if (sliderContainer && sliderContainer.children.length > 0) {
            // Calculate the width of a single card for scrolling
            const firstCard = sliderContainer.children[0];
            cardWidth = firstCard.offsetWidth;
        }
    });

    function scrollToCard(index) {
        activeIndex = index;
        if (sliderContainer) {
            sliderContainer.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
    }
</script>

<style>
    .hidden-escape-background {
        background-image: url('/explore/hidden.png');
        background-size: cover;
        background-position: center;
    }
    /* Hide scrollbar */
    .rm-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .rm-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>

<div class="w-full flex flex-col relative bg-white h-[550px] sm:h-[580px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px]">
    <div class="absolute bottom-0 left-0 right-0 h-1/2 z-0 hidden-escape-background"></div>
    
    <div class="relative z-10 pt-8">
        <div class="relative w-full flex items-center justify-center h-20 lg:h-32">
            <p class="text-gray-200 text-[40px] sm:text-[50px] md:text-[58px] lg:text-[75px] xl:text-[100px] font-medium uppercase">
                HIDDEN ESCAPE
            </p>
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-fit flex items-center">
                <div class="bg-blue-600 w-[15%] xl:w-[10%] h-6 xl:h-8"></div>
                <p class="font-normal capitalize text-black text-2xl md:text-[28px] lg:text-[32px] xl:text-[42px] ml-4">
                    There's More to Explore
                </p>
            </div>
        </div>
    </div>

    <div class="rm-scrollbar z-10 w-full overflow-x-auto mt-8 md:mt-10">
        <div class="w-full max-w-7xl mx-auto px-4">
            <div bind:this={sliderContainer} class="flex duration-1000 ease-out w-fit snap-x snap-mandatory rm-scrollbar overflow-x-auto py-4">
                
                {#each exploreItems as item, i}
                <div class="snap-center flex-shrink-0 w-[350px] xl:w-[450px] 2xl:w-[490px] px-8 md:px-16 relative h-[390px] 2xl:h-[420px]">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] 2xl:w-[300px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg">
                        <img src={item.imageSrc} alt={item.imageAlt} class="w-full h-full object-cover" />
                        <div class="absolute inset-2 border border-white/50 rounded-lg"></div>
                    </div>

                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[160px] w-[330px] 2xl:w-[400px]">
                        <img src="/explore/ticket.png" alt="Ticket background" class="h-full w-full" />
                        
                        <div class="absolute left-[-29px] top-1/2 -translate-y-1/2 h-[50%] w-[40%] -rotate-90 flex items-center justify-center">
                            <p class="text-gray-800 text-center font-medium text-sm 2xl:text-base">
                                {item.label}
                            </p>
                        </div>
                        
                        <div class="absolute right-2 top-1 h-[95%] w-[70%] flex flex-col justify-between p-2">
                            <div class="text-sm 2xl:text-base text-black font-light h-full max-h-[110px] overflow-hidden text-ellipsis">
                                <p>{item.description}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
    
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {#each exploreItems as _, i}
            <button
                on:click={() => scrollToCard(i)}
                class="h-3 w-3 rounded-full cursor-pointer transition-colors"
                class:bg-blue-600={activeIndex === i}
                class:bg-white={activeIndex !== i}
                aria-label="Go to slide {i + 1}"
            ></button>
        {/each}
    </div>
</div>
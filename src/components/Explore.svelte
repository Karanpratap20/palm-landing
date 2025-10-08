<script>
    import { onMount } from 'svelte';

    // This tag lets us react to browser window size changes
    let windowWidth = 0;

    // Data for the "Explore" cards.
    const exploreItems = [
        {
            label: 'Bhimtal Lake',
            imageSrc: '/explore/bhimtal.jpg',
            imageAlt: 'A panoramic view of Bhimtal Lake with the island in the center.',
            description: 'Larger than the famous Naini Lake, Bhimtal is a serene destination known for its beautiful island aquarium. Enjoy boating, kayaking, or a peaceful walk along its shores.',
            link: '/explore/bhimtal-lake'
        },
        {
            label: 'Naini Lake, Nainital',
            imageSrc: '/explore/nainital.jpg',
            imageAlt: 'Colorful boats floating on the crescent-shaped Naini Lake, surrounded by hills.',
            description: 'The heart of Nainital, this beautiful crescent-shaped lake is a hub of activity. Go for a boat ride or simply stroll along The Mall Road enjoying the vibrant atmosphere.',
            link: '/explore/naini-lake'
        },
        {
            label: 'Sattal Lake',
            imageSrc: '/explore/sattal.jpg',
            imageAlt: 'The cluster of seven interconnected freshwater lakes at Sattal.',
            description: 'An interconnected group of seven freshwater lakes, Sattal is a tranquil paradise for nature lovers and birdwatchers, set amidst a dense forest of oak and pine trees.',
            link: '/explore/sattal-lake'
        },
        {
            label: 'Kainchi Dham',
            imageSrc: '/explore/kainchidham.jpg',
            imageAlt: 'The serene and spiritual Kainchi Dham ashram complex.',
            description: 'A spiritual ashram with a temple dedicated to the sage Neem Karoli Baba. This peaceful place on the banks of the Kosi river attracts devotees from all over the world.',
            link: '/explore/kainchi-dham'
        },
        {
            label: 'Naina Devi Temple',
            imageSrc: '/explore/nainadevi.jpg',
            imageAlt: 'The sacred Naina Devi Temple on the northern shore of Naini Lake.',
            description: 'Located on the northern shore of Naini Lake, this temple is a revered Shakti Peeth. It is believed that the eyes of the goddess Sati fell at this very spot.',
            link: '/explore/naina-devi-temple'
        },
        {
            label: 'Camel\'s Back Road',
            imageSrc: '/explore/camelsback.jpg',
            imageAlt: 'The natural rock formation that looks like a camel\'s hump.',
            description: 'A peaceful 3-km stretch perfect for a morning or evening walk. It offers stunning views of the Himalayas and is named after a natural rock formation that looks like a camel\'s back.',
            link: '/explore/camels-back-road'
        }
    ];

    // --- RESPONSIVE SLIDER LOGIC ---
    let chunkSize = 1; // Default to 1 card per slide for mobile
    $: {
        // Use 768px as the breakpoint (Tailwind's 'md')
        if (windowWidth >= 768) {
            chunkSize = 3;
        } else {
            chunkSize = 1;
        }
    }

    let groupedItems = [];
    $: {
        groupedItems = [];
        if (exploreItems.length > 0) {
            for (let i = 0; i < exploreItems.length; i += chunkSize) {
                groupedItems.push(exploreItems.slice(i, i + chunkSize));
            }
        }
		// Reset active index when grouping changes to avoid errors
		if (activeIndex >= groupedItems.length) {
			activeIndex = 0;
		}
    }

    let slider;
    let pageWidth = 0;
    let activeIndex = 0;

    // Make pageWidth reactive to window size changes
    $: if (slider && windowWidth) {
        pageWidth = slider.offsetWidth;
    }

    function scrollToPage(index) {
        activeIndex = index;
        if (slider) {
            slider.scrollTo({
                left: index * pageWidth,
                behavior: 'smooth'
            });
        }
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<style>
    .hidden-escape-background {
        background-image: url('/explore/hidden.png');
        background-size: cover;
        background-position: center;
    }
    .rm-scrollbar::-webkit-scrollbar { display: none; }
    .rm-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

{#if exploreItems.length > 0}
<div class="w-full flex flex-col relative bg-white h-[550px] sm:h-[580px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px]">
    <div class="absolute bottom-0 left-0 right-0 h-1/2 z-0 hidden-escape-background"></div>
    
    <div class="relative z-10 pt-8">
        <div class="relative w-full flex items-center justify-center h-20 lg:h-32">
            <p class="text-gray-200 text-[40px] sm:text-[50px] md:text-[58px] lg:text-[75px] xl:text-[100px] font-medium uppercase">HIDDEN ESCAPE</p>
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-fit flex items-center">
                <div class="bg-blue-600 w-[15%] xl:w-[10%] h-6 xl:h-8"></div>
                <p class="font-normal capitalize text-black text-2xl md:text-[28px] lg:text-[32px] xl:text-[42px] ml-4">There's More to Explore</p>
            </div>
        </div>
    </div>

    <div bind:this={slider} class="rm-scrollbar z-10 w-full overflow-x-auto mt-8 md:mt-10 pb-16 snap-x snap-mandatory">
        <div class="flex w-fit">
            {#each groupedItems as page}
                <div class="w-screen flex-shrink-0 flex justify-center items-start gap-4 px-4">
                    {#each page as item}
                        <div class="w-11/12 md:w-1/3 max-w-[400px] flex-shrink-0 relative h-[390px] 2xl:h-[420px]">
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] 2xl:w-[300px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg">
                                <img src={item.imageSrc} alt={item.imageAlt} class="w-full h-full object-cover" />
                                <div class="absolute inset-2 border border-white/50 rounded-lg"></div>
                            </div>
                            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[160px] w-[330px] 2xl:w-[400px]">
                                <img src="/explore/ticket.png" alt="Ticket background" class="h-full w-full" />
                                <div class="absolute left-[-29px] top-1/2 -translate-y-1/2 h-[50%] w-[40%] -rotate-90 flex items-center justify-center">
                                    <p class="text-gray-800 text-center font-medium text-sm 2xl:text-base">{item.label}</p>
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
            {/each}
        </div>
    </div>
    
    {#if groupedItems.length > 1}
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {#each groupedItems as _, i}
            <button
                on:click={() => scrollToPage(i)}
                class="h-3 w-3 rounded-full cursor-pointer transition-colors"
                class:bg-blue-600={activeIndex === i}
                class:bg-white={activeIndex !== i}
                aria-label="Go to slide {i + 1}"
            ></button>
        {/each}
    </div>
    {/if}
</div>
{/if} 
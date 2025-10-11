<script>
	import { onMount } from 'svelte';

	let windowWidth = 0;

	const exploreItems = [
		{
			label: 'Bhimtal Lake',
			imageSrc: '/explore/bhimtal.jpg',
			imageAlt: 'A panoramic view of Bhimtal Lake with the island in the center.',
			description: 'A calm and scenic lake larger than Naini Lake, famous for its island aquarium. Perfect spot for boating, kayaking, or relaxing by the water.',
			link: '/explore/bhimtal-lake'
		},
		{
			label: 'Naini Lake, Nainital',
			imageSrc: '/explore/nainital.jpg',
			imageAlt: 'Colorful boats floating on Naini Lake, surrounded by hills.',
			description: 'The heart of Nainital, surrounded by hills and a lively town. Enjoy a peaceful boat ride or an evening stroll on the Mall Road.',
			link: '/explore/naini-lake'
		},
		{
			label: 'Sattal Lake',
			imageSrc: '/explore/sattal.jpg',
			imageAlt: 'Seven interconnected freshwater lakes at Sattal.',
			description: 'A cluster of seven serene lakes amidst pine forests. Ideal for birdwatching, photography, and enjoying the calmness of nature.',
			link: '/explore/sattal-lake'
		},
		{
			label: 'Kainchi Dham',
			imageSrc: '/explore/kainchidham.jpg',
			imageAlt: 'Kainchi Dham ashram complex.',
			description: 'A peaceful ashram dedicated to Neem Karoli Baba, situated along the Kosi River. A must-visit place for spiritual seekers.',
			link: '/explore/kainchi-dham'
		},
		{
			label: 'Naina Devi Temple',
			imageSrc: '/explore/nainadevi.jpg',
			imageAlt: 'Naina Devi Temple on Naini Lake.',
			description: 'A sacred temple located beside Naini Lake, dedicated to Goddess Naina Devi. It is one of the most revered Shakti Peeths in India.',
			link: '/explore/naina-devi-temple'
		},
		{
			label: "Camel's Back Road",
			imageSrc: '/explore/camelsback.jpg',
			imageAlt: "Natural rock formation resembling a camel's hump.",
			description: 'A scenic 3-km walkway offering stunning Himalayan views. The natural rock formation gives this peaceful trail its name.',
			link: '/explore/camels-back-road'
		}
	];

	let chunkSize = 1;
	$: chunkSize = windowWidth >= 768 ? 3 : 1;

	let groupedItems = [];
	$: {
		groupedItems = [];
		for (let i = 0; i < exploreItems.length; i += chunkSize) {
			groupedItems.push(exploreItems.slice(i, i + chunkSize));
		}
		if (activeIndex >= groupedItems.length) activeIndex = 0;
	}

	let slider;
	let pageWidth = 0;
	let activeIndex = 0;

	$: if (slider && windowWidth) pageWidth = slider.offsetWidth;

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
<div class="w-full flex flex-col relative bg-white h-[580px] sm:h-[600px] lg:h-[640px] xl:h-[700px] 2xl:h-[720px]">
	<!-- Background -->
	<div class="absolute bottom-0 left-0 right-0 h-1/2 z-0 hidden-escape-background"></div>

	<!-- Title Section -->
	<div class="relative z-10 pt-8">
		<div class="relative w-full flex items-center justify-center h-20 lg:h-32">
			<p class="text-gray-200 text-[40px] sm:text-[50px] md:text-[58px] lg:text-[75px] xl:text-[100px] font-medium uppercase">
				HIDDEN ESCAPE
			</p>
			<div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-fit flex items-center">
				<div class="bg-blue-600 w-[15%] xl:w-[10%] h-6 xl:h-8"></div>
				<!-- Increased text size here -->
				<p class="font-semibold capitalize text-black text-3xl md:text-[36px] lg:text-[44px] xl:text-[54px] ml-4 tracking-wide">
					There's More to Explore
				</p>
			</div>
		</div>
	</div>


	<!-- Slider -->
	<div bind:this={slider} class="rm-scrollbar z-10 w-full overflow-x-auto mt-8 md:mt-10 pb-20 snap-x snap-mandatory"> <!-- Increased bottom padding -->
		<div class="flex w-fit">
			{#each groupedItems as page}
				<div class="w-screen flex-shrink-0 flex justify-center items-start gap-10 md:gap-14 lg:gap-16 px-4">
					{#each page as item}
						<div class="w-11/12 md:w-1/3 max-w-[420px] flex-shrink-0 relative h-[410px] 2xl:h-[440px]">
							<!-- Image -->
							<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[270px] h-[270px] 2xl:w-[320px] 2xl:h-[320px] rounded-lg overflow-hidden shadow-lg">
								<img src={item.imageSrc} alt={item.imageAlt} class="w-full h-full object-cover select-none pointer-events-none" draggable="false" />
								<div class="absolute inset-2 border border-white/50 rounded-lg pointer-events-none"></div>
							</div>

							<!-- Ticket -->
							<div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[190px] w-[350px] 2xl:w-[420px]">
								<img src="/explore/ticket.png" alt="Ticket background" class="h-full w-full select-none pointer-events-none" draggable="false" />
								
								<!-- Label -->
								<div class="absolute left-[-29px] top-1/2 -translate-y-1/2 h-[50%] w-[40%] -rotate-90 flex items-center justify-center">
									<p class="text-blue-900 text-center font-bold text-lg 2xl:text-xl">{item.label}</p>
								</div>

								<!-- Description -->
								<div class="absolute right-2 top-1 h-[95%] w-[70%] flex flex-col justify-between p-2">
									<div class="text-[16px] 2xl:text-[18px] text-black font-medium leading-snug">
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

	<!-- Navigation Dots -->
	{#if groupedItems.length > 1}
	<div class="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
		{#each groupedItems as _, i}
			<button
				on:click={() => scrollToPage(i)}
				class="h-3 w-3 rounded-full cursor-pointer transition-all duration-300"
				class:bg-blue-600={activeIndex === i}
				class:bg-white={activeIndex !== i}
				aria-label="Go to slide {i + 1}"
			></button>
		{/each}
	</div>
	{/if}
</div>
{/if}

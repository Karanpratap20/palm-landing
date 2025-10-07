<script>
    import { onMount, onDestroy } from 'svelte';

    // The list of images is now hardcoded directly within the component.
    const images = [
        { src: '/hotel/balconyView.jpeg', alt: 'Hotel room with a view' },
        { src: '/hotel/balconyView2.jpeg', alt: 'Hotel exterior with pool' },
        { src: '/hotel/bathroom.jpeg', alt: 'Cozy hotel bedroom' },
        { src: '/hotel/bathroom1.jpeg', alt: 'Modern hotel lobby' },
        { src: '/hotel/delux.jpeg', alt: 'Breakfast served by the pool' },
        { src: '/hotel/delux2.jpeg', alt: 'Hotel reception area' },
        { src: '/hotel/corridor.jpg', alt: 'Hotel restaurant with elegant decor' },
        { src: '/hotel/confere.jpg', alt: 'King size bed in a hotel room' },
        { src: '/hotel/garden.JPG', alt: 'Hotel spa and wellness area' },
        { src: '/hotel/pool.JPG', alt: 'Poolside cabanas at night' }
    ];

    // Reactive variables to manage the modal's state.
    let isModalOpen = false;
    let currentIndex = 0;

    // --- FUNCTIONS ---
    function openModal(index) {
        currentIndex = index;
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }

    function showNext() {
        if (images.length === 0) return;
        currentIndex = (currentIndex + 1) % images.length;
    }

    function showPrev() {
        if (images.length === 0) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    function handleKeydown(event) {
        if (!isModalOpen) return;

        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowRight') {
            showNext();
        } else if (event.key === 'ArrowLeft') {
            showPrev();
        }
    }
    
    onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

{#if images.length > 0}
<div class="m-4 sm:m-6 py-2 px-0 bg-white-50 dark:bg-white-900 rounded-xl shadow-lg flex flex-col md:h-[calc(100vh-6rem)] md:overflow-hidden">
    <section id="gallery" class="flex flex-col flex-grow pb-2 bg-transparent">
        <div class="container mx-auto px-6 text-center"> 
            
            <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
                
                <div class="gallery-grid-item h-full md:col-span-6" on:click={() => openModal(0)}>
                    <img src={images[0].src} alt={images[0].alt} class="w-full h-full object-cover rounded-lg">
                </div>

                <div class="grid grid-cols-2 gap-2 h-full md:col-span-4">
                    {#each images.slice(1, 4) as image, i}
                        <div class="gallery-grid-item" on:click={() => openModal(i + 1)}>
                            <img src={image.src} alt={image.alt} class="w-full h-full object-cover rounded-lg">
                        </div>
                    {/each}
                    
                    {#if images.length >= 5}
                    <div class="relative">
                        <div class="gallery-grid-item w-full h-full" on:click={() => openModal(4)}>
                           <img src={images[4].src} alt={images[4].alt} class="w-full h-full object-cover rounded-lg">
                        </div>
                        <button on:click={() => openModal(0)} aria-label="View full gallery" class="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition duration-300 shadow-lg flex items-center justify-center">
                            <i class="fas fa-images text-xl"></i>
                        </button>
                    </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <section id="new-content" class="pt-8 pb-8">
        <div class="container mx-auto px-6">
            <h1 class="text-2xl md:text-4xl font-bold text-black-800 dark:text-black-400 max-w-full">
                <span class="font-bold">The Palm Resort |</span>
                <span class="font-normal">Bhimtal</span>
            </h1>
        </div>
    </section>


</div>

{#if isModalOpen}
<div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" on:click={closeModal} role="dialog" aria-modal="true">
    <div on:click|stopPropagation class="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
        <button on:click={closeModal} class="absolute -top-2 -right-2 sm:top-0 sm:right-0 m-4 text-white text-3xl z-50 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700">&times;</button>
        <div class="relative flex-grow flex items-center justify-center bg-black rounded-lg">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} class="max-h-[70vh] max-w-full object-contain rounded-lg">
            <button on:click|stopPropagation={showPrev} class="absolute left-2 sm:left-4 top-1-2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"><i class="fas fa-chevron-left"></i></button>
            <button on:click|stopPropagation={showNext} class="absolute right-2 sm:right-4 top-1-2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="mt-4 h-24">
            <div class="flex justify-center items-center gap-2 overflow-x-auto p-2">
                {#each images as image, index}
                    <button on:click={() => currentIndex = index}>
                        <img 
                            src={image.src} 
                            alt={image.alt}
                            class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition"
                            class:border-indigo-500={currentIndex === index}
                            class:border-transparent={currentIndex !== index}
                            class:opacity-100={currentIndex === index}
                            class:opacity-60={currentIndex !== index}
                        >
                    </button>
                {/each}
            </div>
        </div>
    </div>
</div>
{/if}

{/if}

<style>
    .gallery-grid-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }
    .gallery-grid-item:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
</style>
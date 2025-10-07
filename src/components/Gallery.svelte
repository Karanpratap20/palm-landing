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

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
</svelte:head>

{#if images.length > 0}
<div class="m-4 sm:m-6 bg-white rounded-xl shadow-lg flex flex-col md:h-[calc(100vh-6rem)] md:overflow-hidden">
    
    <section id="gallery" class="flex-grow px-4 pb-4 md:px-6 md:pb-6 pt-1 md:pt-1">
        <div class="container mx-auto h-full"> 
            
            <div class="grid grid-cols-1 md:grid-cols-10 gap-2 h-full">
                
                <div class="gallery-grid-item md:col-span-6 h-64 md:h-full" on:click={() => openModal(0)}>
                    <img src={images[0].src} alt={images[0].alt} class="w-full h-full object-cover rounded-lg">
                </div>

                <div class="grid grid-cols-2 gap-2 md:col-span-4 h-full">
                    
                    {#each images.slice(1, 4) as image, i}
                        <div class="gallery-grid-item h-32 md:h-auto" on:click={() => openModal(i + 1)}>
                            <img src={image.src} alt={image.alt} class="w-full h-full object-cover rounded-lg">
                        </div>
                    {/each}
                    
                    {#if images.length >= 5}
                        <div class="relative gallery-grid-item h-32 md:h-auto">
                            <div class="w-full h-full" on:click={() => openModal(4)}>
                               <img src={images[4].src} alt={images[4].alt} class="w-full h-full object-cover rounded-lg">
                            </div>
                            <button on:click={() => openModal(0)} aria-label="View full gallery" class="absolute bottom-3 right-3 bg-white/90 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300">
                                <i class="fas fa-images text-xl"></i>
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <section id="new-content" class="pb-8">
        <div class="container mx-auto px-6">
            <h1 class="text-2xl md:text-4xl font-bold text-gray-800 max-w-full">
                <span class="font-bold">The Palm Resort |</span>
                <span class="font-normal">Bhimtal</span>
            </h1>
        </div>
    </section>
</div>

{#if isModalOpen}
<div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" on:click={closeModal} role="dialog" aria-modal="true">
    <div on:click|stopPropagation class="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
        <button on:click={closeModal} aria-label="Close" class="absolute -top-2 -right-2 sm:top-0 sm:right-0 m-4 text-white text-3xl z-50 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700">&times;</button>
        
        <div class="relative flex-grow flex items-center justify-center bg-black rounded-lg">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} class="max-h-[70vh] max-w-full object-contain rounded-lg">
            
            <button on:click|stopPropagation={showPrev} aria-label="Previous image" class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"><i class="fas fa-chevron-left"></i></button>
            <button on:click|stopPropagation={showNext} aria-label="Next image" class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"><i class="fas fa-chevron-right"></i></button>
        </div>
        
        <div class="mt-4 h-24">
            <div class="flex justify-center items-center gap-2 overflow-x-auto p-2">
                {#each images as image, index}
                    <button on:click={() => currentIndex = index} aria-label="View image {index + 1}">
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
    
    /* Simple scrollbar styling for thumbnail strip in modal */
    .overflow-x-auto::-webkit-scrollbar {
        height: 8px;
    }
    .overflow-x-auto::-webkit-scrollbar-thumb {
        background: #4a5568;
        border-radius: 4px;
    }
    .overflow-x-auto::-webkit-scrollbar-track {
        background: #2d3748;
    }
</style>
<script>
    import { onMount } from "svelte";

    let ama = [
        { img: "/amenities/img1.png" }, { img: "/amenities/img2.png" },
        { img: "/amenities/img4.png" }, { img: "/amenities/img5.png" },
        { img: "/amenities/img6.png" }, { img: "/amenities/img7.png" },
        { img: "/amenities/img8.png" }, { img: "/amenities/img9.png" },
        { img: "/amenities/img10.png" }, { img: "/amenities/img11.png" },
        { img: "/amenities/img12.png" }, { img: "/amenities/img13.png" },
        { img: "/amenities/img14.png" }, { img: "/amenities/img15.png" },
        { img: "/amenities/img16.png" }, { img: "/amenities/img17.png" },
        { img: "/amenities/img18.png" }, { img: "/amenities/img19.png" },
        { img: "/amenities/img20.png" }, { img: "/amenities/img21.png" },
        { img: "/amenities/img22.png" }, { img: "/amenities/img23.png" }
    ];

    let infinite = [...ama, ...ama];
    let scrollContent;
    let loadedImages = 0;

    function setupScrollAnimation() {
        if (!scrollContent) return;

        const scrollWidth = scrollContent.scrollWidth / 2;
        scrollContent.style.setProperty('--scroll-width', `-${scrollWidth}px`);

        const speed = 60; // pixels per second
        const duration = scrollWidth / speed;
        scrollContent.style.animationDuration = `${duration}s`;
    }

    function handleImageLoad() {
        loadedImages++;
        if (loadedImages === infinite.length) {
            setupScrollAnimation();
        }
    }

    onMount(() => {
        // Even if images are cached, ensure setup runs
        const imgs = scrollContent?.querySelectorAll("img") || [];
        let allLoaded = true;

        imgs.forEach(img => {
            if (!img.complete) {
                allLoaded = false;
                img.addEventListener("load", handleImageLoad);
            }
        });

        // If already cached and loaded, start immediately
        if (allLoaded) {
            setupScrollAnimation();
        }
    });
</script>

<style>
    .scroll-container {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        width: 100%;
    }

    .scroll-content {
        display: flex;
        align-items: center;
        /* The animation will only start after JS sets the duration */
        animation: scroll linear infinite;
    }

    .scroll-content img {
        height: 125px;
        width: auto;
        object-fit: contain;
        transition: transform 0.3s ease;
        margin: 0 28px;
        flex-shrink: 0;
    }

    .scroll-content img:hover {
        transform: scale(1.08);
    }

    .scroll-container:hover .scroll-content {
        animation-play-state: paused;
    }

    @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(var(--scroll-width)); }
    }

    @media (max-width: 767px) {
        .scroll-content img {
            height: 80px;
            margin: 0 16px;
        }
    }
</style>

<section class="bg-white py-12">
    <div class="container mx-auto px-4">
        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-left">
                Property Amenities
            </h2>
            <div class="flex items-center gap-1 mt-2" style="width: 250px;">
                <div class="h-1 bg-blue-600 flex-grow rounded-l-full"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
            </div>
        </div>
        
        <div class="scroll-container w-full">
            <div class="scroll-content" bind:this={scrollContent}>
                {#each infinite as a, i}
                    <img src={a.img} alt={`Amenity ${i + 1}`} on:load={handleImageLoad} />
                {/each}
            </div>
        </div>
    </div>
</section>
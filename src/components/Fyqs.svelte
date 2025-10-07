<script>
    // A variable to track which FAQ item is currently open.
    let openIndex = 0; // Start with the first item open by default.

    // An array of FAQ items. Replace with your actual questions and answers.
    const faqs = [
        {
            question: 'What makes The Palm Resort Bhimtal one of the best hotels in Bhimtal?',
            answer: 'Our hotel combines luxury with nature, offering stunning Himalayan views, top-notch amenities, personalized service, and easy access to local attractions, providing a unique and memorable experience for all our guests.'
        },
        {
            question: 'Is The Palm Resort Bhimtal suitable for families and large groups?',
            answer: 'Absolutely. We offer spacious accommodations and amenities suitable for families and larger groups. Our Super Deluxe rooms are ideal, and we have common areas perfect for group activities.'
        },
        {
            question: 'What room types are available at The Palm Resort Bhimtal?',
            answer: 'We offer a range of comfortable options, including our popular Deluxe and Super Deluxe rooms, each designed to provide a relaxing and luxurious stay with beautiful scenic views.'
        },
        {
            question: 'Are there budget-friendly options available at The Palm Resort Bhimtal?',
            answer: 'Yes, we strive to provide excellent value. Our Deluxe rooms are a fantastic budget-friendly option that does not compromise on comfort or quality. Please check our website for seasonal offers.'
        },
        {
            question: 'What are the top attractions near The Palm Resort Bhimtal?',
            answer: 'Key nearby attractions include the Mukteshwar Temple, Chauli Ki Jali for adventure activities, and beautiful nature trails. Our front desk can help you plan your local sightseeing itinerary.'
        }
    ];

    // Function to toggle the accordion items
    function toggleFAQ(index) {
        if (openIndex === index) {
            openIndex = -1; // Close the item if it's already open
        } else {
            openIndex = index; // Open the new item
        }
    }
</script>

<style>
    /* Add a smooth transition for the accordion content */
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
    }
    .faq-answer.open {
        max-height: 200px; /* Adjust as needed for your content length */
    }
</style>

<section class="bg-gray-100 py-12 md:py-20">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <!-- Left Column: Image -->
            <div class="w-full">
                <img 
                    src="/hotel/garden.JPG" 
                    alt="A couple enjoying a meal on a balcony with a scenic mountain view at dusk"
                    class="rounded-2xl shadow-xl w-full h-full object-cover"
                />
            </div>

            <!-- Right Column: FAQs -->
            <div>
                <!-- Section Title -->
                <div class="mb-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
                </div>

                <!-- Decorative Underline -->
                <div class="flex items-center gap-1 mb-8" style="width: 320px;">
                    <div class="h-1 bg-blue-600 w-full rounded-l-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                </div>

                <!-- Accordion Container -->
                <div class="space-y-4">
                    {#each faqs as faq, index}
                        <div class="border-b border-blue-200 pb-4">
                            <button 
                                on:click={() => toggleFAQ(index)} 
                                class="w-full flex justify-between items-center text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 class="text-md font-semibold text-gray-700">{faq.question}</h3>
                                <!-- Chevron Icon -->
                                <span class="transform transition-transform duration-300 {openIndex === index ? 'rotate-180' : ''}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                id={`faq-answer-${index}`}
                                class="faq-answer {openIndex === index ? 'open' : ''}"
                            >
                                <p class="pt-3 text-gray-600 text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

        </div>
    </div>
</section>

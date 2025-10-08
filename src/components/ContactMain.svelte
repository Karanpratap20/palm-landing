<script>
    // Contact information
    const contactDetails = {
        phone: '+91 8449122921',
        email: 'palmhotelbhimtal@gmail.com',
        address: 'Mehragoan Bhagtpur, Bhimtal, Nainital, Uttarakhad 263136'
    };

    // Google Maps embed URL
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.075527687434!2d79.54058687556952!3d29.36807767527113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0982500000001%3A0x3db2f70952143ad4!2sThe%20Palm%20Resort!5e0!3m2!1sen!2sin!4v1759820730150!5m2!1sen!2sin";
</script>

<style>
    /* Custom focus styles for better accessibility and design */
    .form-input:focus {
        outline: none;
        border-color: #3b82f6; /* blue-500 */
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
</style>

<section id="contact" class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4">

        <!-- Page Header -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">Get In Touch</h1>
            <p class="text-lg text-gray-600 mt-2">We'd love to hear from you. Here's how you can reach us.</p>
            <div class="flex items-center justify-center gap-1 mt-4" style="width: 150px; margin-left: auto; margin-right: auto;">
                <div class="h-1 bg-blue-600 flex-grow rounded-l-full"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
            </div>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Left Column: Contact Details & Form -->
            <div class="lg:col-span-7 bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <!-- Contact Form -->
                <form class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" id="name" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md transition duration-200" placeholder="John Doe">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input type="email" id="email" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md transition duration-200" placeholder="john.doe@example.com">
                        </div>
                    </div>
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md transition duration-200" placeholder="Booking Inquiry">
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows="5" class="form-input w-full px-4 py-2 border border-gray-300 rounded-md transition duration-200" placeholder="Your message here..."></textarea>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <!-- Right Column: Contact Info -->
            <div class="lg:col-span-5">
                <div class="bg-white p-8 rounded-xl shadow-lg h-full">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                    <div class="space-y-6">
                        <!-- Phone -->
                        <div class="flex items-start gap-4">
                            <div class="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Phone</h3>
                                <a href="tel:{contactDetails.phone}" class="text-gray-600 hover:text-blue-600 transition">{contactDetails.phone}</a>
                            </div>
                        </div>
                        <!-- Email -->
                        <div class="flex items-start gap-4">
                             <div class="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Email</h3>
                                <a href="mailto:{contactDetails.email}" class="text-gray-600 hover:text-blue-600 transition">{contactDetails.email}</a>
                            </div>
                        </div>
                        <!-- Address -->
                        <div class="flex items-start gap-4">
                             <div class="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Address</h3>
                                <p class="text-gray-600">{contactDetails.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Map Section -->
        <div class="mt-16">
            <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">How to Get Here</h2>
            <div class="rounded-xl overflow-hidden shadow-lg border">
                <iframe 
                    title="Google Map Location"
                    src={mapSrc}
                    class="w-full h-80 md:h-96"
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</section>
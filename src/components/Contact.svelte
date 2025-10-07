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
    /* Additional custom styles can go here if needed */
</style>

<section class="bg-gray-100 py-12 md:py-20">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <!-- Left Column: Contact Us -->
            <div>
                <!-- Section Title -->
                <div class="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Contact Us</h2>
                </div>

                <!-- Decorative Underline -->
                <div class="flex items-center gap-1 mb-6" style="width: 280px;">
                    <div class="h-1 bg-blue-600 w-full rounded-l-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                </div>

                <!-- Contact Details Box -->
                <div class="bg-grey-200 border-2 border-blue-500 rounded-xl p-6 space-y-5">
                    <!-- Phone -->
                    <div class="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p class="text-gray-700"><span class="font-semibold">Phone :</span> {contactDetails.phone}</p>
                    </div>
                    <!-- Email -->
                    <div class="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="text-gray-700"><span class="font-semibold">Email :</span> {contactDetails.email}</p>
                    </div>
                    <!-- Address -->
                    <div class="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p class="text-gray-700"><span class="font-semibold">Address :</span> {contactDetails.address}</p>
                    </div>
                </div>
            </div>

            <!-- Right Column: How to Get Here -->
            <div>
                <!-- Section Title -->
                <div class="flex items-center gap-3 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l6.553 3.276A1 1 0 0021 19.382V8.618a1 1 0 00-.553-.894L15 5m0 12V5m0 0l6-3" />
                    </svg>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800">How to Get Here</h2>
                </div>
                
                 <!-- Decorative Underline -->
                <div class="flex items-center gap-1 mb-6" style="width: 280px;">
                    <div class="h-1 bg-blue-600 w-full rounded-l-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                    <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
                </div>

                <!-- Google Maps Embed -->
                <div class="rounded-xl overflow-hidden shadow-lg border">
                    <iframe 
                        title="Google Map Location"
                        src={mapSrc}
                        class="w-full h-64 md:h-80"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </div>
</section>


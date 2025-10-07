<script>
    // Data for the policies sections
    const guestPolicies = [
        'No drugs and alcohol allowed on any hostel premises.',
        'Smoking and Vaping is not permitted inside the hostel premises besides the designated smoking areas.',
        'Outside pets are not allowed in any Moustache Hostels.',
        'Non Residents/Visitors are strictly not allowed on the hostel premises.',
        'Moustache reserves the Right to admission.'
    ];

    const checkinPolicies = [
        'Check-in: 1:00 pm | check-out: 11:00 am',
        '24-hour check-in permitted but the earliest check-in times are different for different locations so please do confirm from our website.',
        'If you are arriving very early, it is recommended you book the previous night. You are welcome to wait in our common room if you would like, but for 3-4 am arrivals, we recommend booking an extra night.'
    ];
</script>

<style>
    /* Custom styles for list bullets */
    .policy-list li {
        padding-left: 1.5em; /* Space for the bullet */
        text-indent: -1.5em; /* Indent the text to align with the bullet */
    }
    .policy-list li::before {
        content: '•';
        color: #3B82F6; /* Blue-500 */
        font-weight: bold;
        display: inline-block;
        width: 1.5em; /* Width of the bullet */
        margin-left: 0;
    }
</style>

<section class="bg-gray-50 py-10 md:py-16">
    <div class="container mx-auto px-4 max-w-5xl">
        
        <!-- Section Title -->
        <div class="mb-3">
            <h1 class="text-xl md:text-2xl font-bold text-gray-800">Guest Policies & Guidelines</h1>
        </div>

        <!-- Decorative Underline -->
        <div class="flex items-center gap-1 mb-8" style="width: 320px;">
            <div class="h-1 bg-blue-600 w-full rounded-l-full"></div>
            <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
            <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
            <div class="h-1 w-1 bg-blue-600 rounded-full"></div>
        </div>

        <!-- Policies Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            <!-- Left Column: Guest Policies -->
            <div>
                <h2 class="text-lg font-bold text-gray-800 mb-4">GUEST POLICIES</h2>
                <ul class="policy-list space-y-2 text-gray-600 text-sm">
                    {#each guestPolicies as policy}
                        <li>{policy}</li>
                    {/each}
                </ul>
            </div>

            <!-- Right Column: Check-in / Payment -->
            <div>
                <h2 class="text-lg font-bold text-gray-800 mb-4">CHECKIN - PAYMENT</h2>
                 <ul class="policy-list space-y-2 text-gray-600 text-sm">
                    {#each checkinPolicies as policy}
                        <li>{policy}</li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Horizontal Line Separator -->
        <div class="flex items-center mt-12" aria-hidden="true">
            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
            <div class="h-[2px] bg-gray-800 flex-grow"></div>
            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
        </div>
    </div>
</section>


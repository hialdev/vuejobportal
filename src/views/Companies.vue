<template>
    <div class="bg-gray-100 min-h-screen">
        <Navbar />
        <div class="container mx-auto">
            <div class="flex items-center justify-center gap-3 my-9">
                <input type="text" id="" placeholder="Search Company" class="p-3 px-5 rounded-3xl min-w-[30em] flex-1">
                <div class="flex items-center gap-2">
                    <Icon icon="teenyicons:pin-outline" />
                    <input type="text" class="p-3 px-5 rounded-3xl min-w-[20em]" placeholder="City or country">
                </div>
            </div>
            <div class="grid grid-cols-4">
                <div class="bg-white rounded-2xl p-3 border-2 border-white hover:shadow-lg cursor-pointer">
                    <img src="../../public/placeholder_company.png" alt="Placeholder Company PP" class="w-full max-w-[5em] block rounded-lg mx-auto my-2">
                    <div class="text-center">
                        <h4 class="font-semibold">Company Name</h4>
                        <div class="flex items-center justify-center gap-2">
                            <Icon icon="teenyicons:pin-outline" class="text-red-700" />
                            <span class="text-sm text-gray-500">Jakarta, Indonesia</span>
                        </div>
                        <div class="flex items-center justify-center gap-2">
                            <Icon icon="ph:star-fill" class="text-orange-600" />
                            <Icon icon="ph:star-fill" class="text-orange-600" />
                            <Icon icon="ph:star-fill" class="text-orange-600" />
                            <Icon icon="ph:star-fill" class="text-orange-600" />
                            <Icon icon="ph:star-half-fill" class="text-orange-600" />
                            <span class="">4.9</span>
                        </div>
                        <div class="text-sm text-gray-600">(17 Reviews)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Navbar,
        Icon
    }
}
</script>
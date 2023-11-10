<template>
    <div class="h-screen w-screen flex items-center justify-center" style="background: url('../../public/illustration_home.svg') no-repeat;background-size: cover;">
        <div class="p-[1.5em] rounded-2xl text-center bg-white">
            <img src="../../public/ish_logo.jpeg" alt="Logo ISH" class="block mx-auto max-w-[4em] mb-[2em]">
            <h3 class="mb-4 font-bold text-3xl">Tell me who are you?</h3>
            <input v-model="name" type="text" class="p-3 border-2 rounded-xl min-w-[30em] w-100" placeholder="Your Name">
            <div class="flex items-center justify-center gap-4 my-4">
                <div @click="selectGender('male')" class="hover:border-red-600 flex items-center gap-3 p-3 border-2 border-white hover:border-gray-200 rounded-2xl cursor-pointer" :class="{'border-red-600': selectedGender === 'male'}" >
                    <img src="../../public/male_avatar.svg" alt="Male Avatar" class="max-w-[3em]">
                    I am Male
                </div>
                <div @click="selectGender('female')" class="hover:border-red-600 flex items-center gap-3 p-3 border-2 border-white hover:border-gray-200 rounded-2xl cursor-pointer" :class="{'border-red-600': selectedGender === 'female'}">
                    <img src="../../public/female_avatar.svg" alt="female Avatar" class="max-w-[3em]">
                    I am Female
                </div>
            </div>
            <div v-if="selectedGender !== ''">Gender : {{selectedGender}}</div>
            <button @click="setProfile" type="submit" class="bg-red-700 text-white p-3 px-4 rounded-xl w-full my-5">Set Profile</button>
        </div>
    </div>
</template>
  
<script>
import { useCookies } from "vue3-cookies";

export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    
    data() {
        return {
            name: '',
            selectedGender: '',
        };
    },
    methods: {
        selectGender(gender) {
            this.selectedGender = gender;
        },
        setProfile() {
            const name = this.name;
            console.log(name);
            const gender = this.selectedGender;
            console.log(gender);
            this.cookies.set('name', name);
            this.cookies.set('gender', gender);

            this.$router.push('/find-job');
        },
    },
};
</script>
  
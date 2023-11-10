<template>
    <div class="bg-white">
        <div class="container mx-auto flex items-center justify-between p-3 px-6">
            <img src="../../public/ish_logo.jpeg" alt="Logo ISH" class="max-w-[3em] block">
            <div class="flex gap-3 p-3 items-center flex-1 ms-4">
                <RouterLink to="/find-job" class="px-3" :class="{ 'font-bold': isRouteActive('/find-job'), 'text-red-600': isRouteActive('/find-job') }">Find Job</RouterLink>
                <RouterLink to="/company" class="px-3" :class="{ 'font-bold': isRouteActive('/company'), 'text-red-600': isRouteActive('/company') }">Companies</RouterLink>
            </div>
            <div class="flex items-center gap-3">
                <h2 class="text-xl font-bold">Hi, {{ name }}</h2>
                <RouterLink to="/profile" class="px-3">
                    <img :src="avatar" alt="Avatar" class="max-w-[3em] rounded-[99px] border-4">
                </RouterLink>
            </div>
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
    mounted() {
        let name = this.cookies.get("name");
        let gender = this.cookies.get("gender");
        this.gender = gender;
        this.name = name;
    },
    data() {
        return {
            name: "",
            gender: "",
            avatar: ""
        };
    },
    methods: {
      isRouteActive(route) {
        return this.$route.path === route;
      },

      getAvatarSrc() {
        const gender = this.gender;
  
        if (gender === 'male') {
            this.avatar = '../../public/male_avatar.svg';
        } else if (gender === 'female') {
            this.avatar = '../../public/female_avatar.svg';
        } else {
            this.avatar = '../../public/female_avatar.svg';
        }
      },
    },
  };
  </script>
  
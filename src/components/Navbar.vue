<template>
    <div class="bg-white">
        <div class="container mx-auto flex items-center justify-between p-3 px-6">
            <img src="../../public/ish_logo.jpeg" alt="Logo ISH" class="max-w-[3em] block">
            <div class="flex gap-3 p-3 items-center flex-1 ms-4">
                <RouterLink to="/find-job" class="px-3 font-bold text-red-600">Find Job</RouterLink>
                <RouterLink to="/company" class="px-3">Companies</RouterLink>
            </div>
            <div class="flex items-center gap-3">
                <h2 class="text-xl font-bold">Hi, Name surname</h2>
                <RouterLink to="/profile" class="px-3"><img src="../../public/male_avatar.svg" alt="Avatar Male" class="max-w-[3em] rounded-[99px] border-4"></RouterLink>
            </div>
        </div>
    </div>
</template>
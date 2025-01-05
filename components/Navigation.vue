<script lang="ts" setup>

</script>

<template>

    <nav
        class="fixed top-0 right-0 bg-white left-0 border-b-4 border-border w-full flex justify-between px-10 py-5 md:px-40">
        <NuxtLink to="/" class="text-lg font-mono md:text-2xl">Words To You</NuxtLink>
        <div class=" flex gap-5 items-center md:text-lg md:gap-10">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/create">Create</NuxtLink>
            <NuxtLink to="/browse">Browse</NuxtLink>
        </div>
    </nav>

</template>

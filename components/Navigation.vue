<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <nav
        class="fixed top-0 right-0 bg-white left-0 border-b-4 border-border w-full flex justify-between px-10 py-5 md:px-40">
        <NuxtLink to="/" class="text-lg font-mono md:text-2xl">Words To You</NuxtLink>
        <div class="flex gap-5 items-center md:text-lg md:gap-10">
            <NuxtLink to="/">
                <Button :variant="route.path === '/' ? 'default' : 'neutral'">Home</Button>
            </NuxtLink>
            <NuxtLink to="/create">
                <Button :variant="route.path === '/create' ? 'default' : 'neutral'">Create</Button>

            </NuxtLink>
            <NuxtLink to="/browse">
                <Button :variant="route.path === '/browse' ? 'default' : 'neutral'">Browse</Button>

            </NuxtLink>
        </div>
    </nav>
</template>

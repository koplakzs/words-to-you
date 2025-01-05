<script lang="ts" setup>
import Navigation from '~/components/Navigation.vue';


</script>

<template>
    <div class="min-h-screen bg-bg">
        <Navigation />
        <div class="py-24 px-10">
            <slot />
        </div>
        <Footer />
    </div>
</template>

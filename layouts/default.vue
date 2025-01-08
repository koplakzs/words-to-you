<script lang="ts" setup>
import Navigation from '~/components/Navigation.vue';


</script>

<template>
    <div class=" bg-bg">
        <Navigation />
        <div class="py-24 px-10 min-h-withFooter">
            <slot />
        </div>
        <Footer />
    </div>
</template>

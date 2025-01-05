<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';


const colorMode = useColorMode()
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-4 pt-20">
        <p class="font-mono font-medium text-4xl text-center">An array of unspoken thoughts, <br /> delivered through a
            simple
            gesture</p>
        <p class="text-xl text-black/50">Deliver your meaningful message, crafted with care.</p>
        <div class="flex items-center gap-8 pt-5">
            <Button class="font-semibold text-base" size="lg">Share Your Words</Button>
            <Button variant="neutral" class="font-semibold text-base" size="lg">Discover Your Words</Button>
        </div>

        <div class="pt-20 w-full flex flex-col gap-10">
            <Vue3Marquee :duration="40" :gradient="true" :gradient-color="[227, 223, 242]" gradient-length="5%">
                <Card class="mx-5 max-w-96" v-for="index in 7" :key="index">

                    <CardHeader>
                        <CardDescription>To : Syaa</CardDescription>
                    </CardHeader>
                    <CardContent class="font-mono text-2xl font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis accusamus dolore
                        aliquid illo ullam, officia fugiat et nihil beatae?
                    </CardContent>
                </Card>
            </Vue3Marquee>
            <Vue3Marquee :duration="40" :direction="'reverse'" :gradient="true" :gradient-color="[227, 223, 242]"
                gradient-length="5%">
                <Card class="mx-5 max-w-96" v-for="index in 7" :key="index">

                    <CardHeader>
                        <CardDescription>To : Syaa</CardDescription>
                    </CardHeader>
                    <CardContent class="font-mono text-2xl font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis accusamus dolore
                        aliquid illo ullam, officia fugiat et nihil beatae?
                    </CardContent>
                </Card>
            </Vue3Marquee>
        </div>
    </section>
</template>

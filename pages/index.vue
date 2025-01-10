<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

type ApiResponse<T> = {
    status: string;
    statusCode: number;
    message: string;
    data: T[];
};

type DataItem = {
    id: string;
    recipientName: string;
    wordSent: string;
    createdAt: string;
    updatedAt: string;
};
const config = useRuntimeConfig();
const { data } = await useFetch<ApiResponse<DataItem>>(`${config.public.apiBaseUrl}/contents`)
const words = reactive<{
    wordFirst: DataItem[],
    wordSecond: DataItem[]
}>({
    wordFirst: [],
    wordSecond: []
})

const middleIndex = Math.ceil(data.value?.data!.length! / 2); // Cari indeks tengah (pembulatan ke atas)
words.wordFirst = data.value?.data!.slice(0, middleIndex)!; // Elemen pertama hingga tengah
words.wordSecond = data.value?.data!.slice(middleIndex)!; // Elemen setelah tengah hingga akhir

</script>

<template>
    <section class="flex flex-col justify-center items-center gap-4 pt-20">
        <p class="font-mono font-medium text-3xl text-center md:text-4xl">An array of unspoken thoughts, <br />
            delivered through a
            simple
            gesture</p>
        <p class=" text-base text-black/50 md:text-xl">Deliver your meaningful message, crafted with care.</p>
        <div class="flex items-center gap-8 pt-5">
            <NuxtLink to="/create">

                <Button class="font-semibold text-base">Share Your Words</Button>
            </NuxtLink>
            <NuxtLink to="/browse">

                <Button variant="neutral" class="font-semibold text-base">Discover Your Words</Button>
            </NuxtLink>
        </div>

        <div v-if="data !== null" class="pt-20 w-full flex flex-col gap-10">
            <Vue3Marquee :duration="40" :gradient="true" :gradient-color="[227, 223, 242]" gradient-length="5%">
                <Card class=" mx-5 max-w-72 md:max-w-96" v-for="item in words.wordFirst" :key="item.id">
                    <CardHeader>
                        <CardDescription>To : {{ item.recipientName }} </CardDescription>
                    </CardHeader>
                    <CardContent class="font-mono text-lg font-medium lg:text-xl">
                        {{ item.wordSent }}
                    </CardContent>
                </Card>
            </Vue3Marquee>
            <Vue3Marquee :duration="40" :direction="'reverse'" :gradient="true" :gradient-color="[227, 223, 242]"
                gradient-length="5%">
                <Card class=" mx-5 max-w-72 md:max-w-96" v-for="item in words.wordSecond" :key="item.id">
                    <CardHeader>
                        <CardDescription>To : {{ item.recipientName }} </CardDescription>
                    </CardHeader>
                    <CardContent class="font-mono text-lg font-medium lg:text-xl">
                        {{ item.wordSent }}
                    </CardContent>
                </Card>
            </Vue3Marquee>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
import { Input } from '~/components/ui/input';


</script>

<template>
    <section class="w-full flex justify-center pt-24 pb-10">
        <div class="flex w-full justify-center items-center gap-1.5  md:w-9/12  lg:w-6/12">
            <Input placeholder="Search Your Words" />
            <Button type="submit">
                <Search /> Search
            </Button>
        </div>
    </section>
    <section class="w-full md:px-28">
        <!-- <p class="text-center">No Result</p> -->
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card class=" md:max-w-96" v-for="index in 7" :key="index">
                <CardHeader>
                    <CardDescription>To : Syaa</CardDescription>
                </CardHeader>
                <CardContent class="font-mono text-lg font-medium lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis accusamus dolore
                    aliquid illo ullam, officia fugiat et nihil beatae?
                </CardContent>
            </Card>
        </div>
    </section>
</template>

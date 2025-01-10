<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';

import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { Textarea } from '~/components/ui/textarea';

type ApiResponse<T = undefined> = {
    status: string;
    statusCode: number;
    message: string;
    data?: T;
};

type DataItem = {
    id: string;
    recipientName: string;
    wordSent: string;
    createdAt: string;
    updatedAt: string;
};

type CreateContentResponse = ApiResponse<DataItem>;
type State<T> = {
    isLoading: boolean,
    showModal: boolean,
    data: T
}
const config = useRuntimeConfig();
const router = useRouter();  // Inisialisasi router
const state = reactive<State<ApiResponse>>({
    isLoading: false,
    showModal: false,
    data: {
        message: "",
        status: "",
        statusCode: 0,
    }
})
const closeModal = () => state.showModal = false
const handleHome = () => {
    router.push("/")
}
const formSchema = toTypedSchema(
    z.object({
        recipientName: z.string()
            .min(2)
            .max(50),
        wordSent: z.string()
            .min(2)
    })
);

const form = useForm({
    validationSchema: formSchema,
})

const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const onSubmit = form.handleSubmit(async (values) => {
    state.isLoading = true
    try {
        const data: CreateContentResponse = await $fetch
            (`${config.public.apiBaseUrl}/contents`, {
                method
                    : 'POST',
                body
                    : values
            })
        state.data.message = capitalizeFirstLetter(data.message)
        state.data.status = capitalizeFirstLetter(data.status)
        state.data.statusCode = data.statusCode
        state.showModal = true

    } catch (error) {
        state.data.message = capitalizeFirstLetter("Error")
        state.data.status = capitalizeFirstLetter("We apologize, the server is currently unavailable. Please try again later.");
        state.data.statusCode = 500
        state.showModal = true
    } finally {
        state.isLoading = false
        form.resetForm({
            values: {
                recipientName: "",
                wordSent: ""
            }
        })
    }

})
</script>

<template>
    <section class="w-full flex justify-center pt-24 pb-10">
        <div class="flex w-full justify-center items-center gap-1.5  md:w-9/12  lg:w-6/12">
            <Alert variant="destructive">
                <AlertTitle>Alert</AlertTitle>
                <AlertDescription>
                    Words that have been sent, cannot be deleted
                </AlertDescription>
            </Alert>
        </div>
    </section>
    <section class="w-full flex justify-center">
        <div class=" w-full md:w-9/12 lg:w-6/12">

            <form @submit="onSubmit" class="flex flex-col gap-5">
                <FormField v-slot="{ componentField }" name="recipientName">
                    <FormItem>
                        <FormLabel>Recipient Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Recipient Name" v-bind="componentField" />

                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="wordSent">
                    <FormItem>
                        <FormLabel>Word</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Your Magic Words" class="resize-none" v-bind="componentField" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <Button :type="state.isLoading ? 'button' : 'submit'">
                    {{ state.isLoading ? "Loading" : "Submit" }}
                </Button>

            </form>
        </div>

        <MyModal :is-open="state.showModal" :title="state.data.status" :description="state.data.message"
            @close="closeModal" @home="handleHome" />
    </section>
</template>

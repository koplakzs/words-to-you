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
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { Textarea } from '~/components/ui/textarea';


const formSchema = toTypedSchema(z.object({
    toName: z.string().min(2).max(50),
    word: z.string().min(2).max(100)
}))

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
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
                <FormField v-slot="{ componentField }" name="toName">
                    <FormItem>
                        <FormLabel>To Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="To Name" v-bind="componentField" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="word">
                    <FormItem>
                        <FormLabel>Word</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us a little bit about yourself" class="resize-none"
                                v-bind="componentField" />
                        </FormControl>
                    </FormItem>
                </FormField>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    </section>
</template>

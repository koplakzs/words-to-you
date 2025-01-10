<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
// Menerima props 'isOpen' untuk mengontrol status modal
const props = defineProps<{
    isOpen: boolean;
    title: string,
    description: string
}>();

// Mendeklarasikan event 'close' yang dipancarkan saat modal ditutup
const emit = defineEmits<{
    (event: 'close'): void;
    (event: 'home'): void;
}>();

// Fungsi untuk menutup modal
const closeModal = () => {
    emit('close');
};
const handleHome = () => {
    emit("home")
}
</script>

<template>
    <Dialog :open="isOpen" @update:open="closeModal">
        <DialogContent>
            <DialogHeader>
                <DialogTitle> {{ title }} </DialogTitle>

            </DialogHeader>
            <section>
                {{ description }}
            </section>
            <DialogFooter>
                <Button @click="handleHome"> Back To Home</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
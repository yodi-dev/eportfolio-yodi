<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'Pratinjau Dokumen Asli'
    },
    fileUrl: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['close'])

const isImage = computed(() => {
    if (!props.fileUrl) return false
    return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(props.fileUrl)
})

const handleKeyDown = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
        emit('close')
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-sm"
                @click.self="emit('close')">
                <div class="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden animate-scaleIn">
                    
                    <!-- Header Modal -->
                    <div class="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 flex-shrink-0">
                        <div class="flex items-center gap-3 overflow-hidden">
                            <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                <svg v-if="isImage" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
                            <div class="truncate">
                                <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block">
                                    {{ isImage ? 'Pratinjau Gambar / Infografis' : 'Pratinjau Dokumen Otentik' }}
                                </span>
                                <h3 class="text-sm sm:text-base font-semibold text-white truncate font-serif">{{ title }}</h3>
                            </div>
                        </div>

                        <!-- Action Toolbar -->
                        <div class="flex items-center gap-2">
                            <a :href="fileUrl" target="_blank" download
                                class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span class="hidden sm:inline">Unduh</span>
                            </a>

                            <a :href="fileUrl" target="_blank"
                                class="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
                                title="Buka di tab baru">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>

                            <button @click="emit('close')" type="button"
                                class="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
                                title="Tutup pratinjau">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Viewer / Fallback -->
                    <div class="flex-1 bg-stone-100 relative flex items-center justify-center overflow-auto p-4">
                        <img v-if="isImage" :src="fileUrl"
                            class="max-w-full max-h-[78vh] object-contain rounded-xl shadow-md border border-stone-200 bg-white"
                            :alt="title" />
                        <iframe v-else-if="fileUrl" :src="fileUrl"
                            class="w-full h-full border-0"
                            title="Pratinjau Dokumen">
                        </iframe>
                        <div v-else class="flex flex-col items-center justify-center h-full text-stone-500 gap-2 p-6 text-center">
                            <p class="text-sm">Dokumen tidak dapat dimuat atau berkas belum dipilih.</p>
                        </div>
                    </div>

                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.96);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.animate-scaleIn {
    animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>

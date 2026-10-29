<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
    if (typeof window !== 'undefined') {
        isVisible.value = window.scrollY > 320
    }
}

const scrollToTop = () => {
    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-90"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-90">
        <button
            v-if="isVisible"
            @click="scrollToTop"
            type="button"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
            class="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8 p-3 sm:p-3.5 rounded-full bg-emerald-700/90 text-white shadow-xl hover:shadow-emerald-600/30 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 backdrop-blur-md group transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-emerald-500/30">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    </transition>
</template>

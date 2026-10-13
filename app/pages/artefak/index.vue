<script setup>
import { ref, computed } from 'vue'

useSeoMeta({
    title: 'Daftar Artefak Pembelajaran',
    description: 'Koleksi komprehensif artefak pembelajaran PPL I, PPL II, dan Seminar PPG: modul ajar, LKPD, inovasi, dan catatan refleksi.'
})

const { data: list } = await useAsyncData('artefak', () =>
    queryCollection('artefak').all()
)

const activeFilter = ref('all')

const filterOptions = [
    { label: 'Semua Artefak', value: 'all' },
    { label: 'PPL I (Terbimbing)', value: 'ppl-1' },
    { label: 'PPL II (Mandiri)', value: 'ppl-2' },
    { label: 'Seminar PPG', value: 'seminar' }
]

const filteredList = computed(() => {
    if (!list.value) return []
    if (activeFilter.value === 'all') return list.value
    return list.value.filter(item => item.course === activeFilter.value)
})
</script>

<template>
    <div class="space-y-8 animate-fadeIn">
        <header class="text-center md:text-left space-y-3">
            <span
                class="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Dokumentasi Pembelajaran
            </span>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Daftar Artefak Pembelajaran
            </h1>
            <p class="text-stone-600 max-w-2xl text-base leading-relaxed">
                Koleksi perangkat ajar, materi asesmen, dan catatan reflektif dari pelaksanaan mata kuliah PPL I, PPL II, dan Seminar PPG.
            </p>
        </header>

        <!-- Filter Pill Tabs -->
        <div class="flex flex-wrap gap-2 pt-2">
            <button v-for="opt in filterOptions" :key="opt.value"
                @click="activeFilter = opt.value"
                type="button"
                :class="[
                    'px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200',
                    activeFilter === opt.value
                        ? 'bg-emerald-600 text-white shadow-sm scale-105'
                        : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                ]">
                {{ opt.label }}
            </button>
        </div>

        <!-- Kalau kosong -->
        <div v-if="!filteredList.length" class="text-center py-16 bg-white rounded-3xl border border-stone-100 p-8 space-y-2">
            <p class="text-stone-700 font-bold text-base">Dokumentasi Pembelajaran Sedang Disusun</p>
            <p class="text-stone-500 text-xs leading-relaxed max-w-md mx-auto">
                Luaran modul ajar dan laporan refleksi untuk kategori ini akan saya publikasikan secara bertahap seiring berjalannya pelaksanaan perkuliahan.
            </p>
        </div>

        <!-- List artikel -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink v-for="article in filteredList" :key="article.path" :to="article.path"
                class="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_8px_30px_rgb(52,211,153,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">

                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2">
                        <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full uppercase tracking-wider">
                            {{ article.category }}
                        </span>
                        <span v-if="article.badge" class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                            {{ article.badge }}
                        </span>
                    </div>

                    <h2 class="text-xl font-bold text-stone-800 group-hover:text-emerald-700 transition-colors"
                        style="font-family: 'Lora', serif;">
                        {{ article.title }}
                    </h2>

                    <p class="text-stone-600 text-sm leading-relaxed line-clamp-2">
                        {{ article.description }}
                    </p>
                </div>

                <div
                    class="pt-6 mt-4 border-t border-stone-50 text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2 group-hover:gap-3 transition-all w-max">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </NuxtLink>
        </div>
    </div>
</template>
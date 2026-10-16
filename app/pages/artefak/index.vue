<script setup>
import { ref, computed } from 'vue'

useSeoMeta({
    title: 'Katalog Artefak Pembelajaran PPG',
    description: 'Koleksi komprehensif 10 artefak pembelajaran PPL I (3 Siklus), PPL II (6 Dimensi Analisis), dan Desain Inovasi Seminar PPG Yodi Irawan.'
})

const { data: list } = await useAsyncData('artefak-catalog', () =>
    queryCollection('artefak').all()
)

const activeFilter = ref('all')
const searchQuery = ref('')

const filterOptions = computed(() => [
    { label: 'Semua Artefak', value: 'all', count: list.value?.length || 0 },
    { label: 'PPL I (Terbimbing)', value: 'ppl-1', count: list.value?.filter(i => i.course === 'ppl-1').length || 0 },
    { label: 'PPL II (Praktik Mandiri)', value: 'ppl-2', count: list.value?.filter(i => i.course === 'ppl-2').length || 0 },
    { label: 'Seminar PPG', value: 'seminar', count: list.value?.filter(i => i.course === 'seminar').length || 0 }
])

const filteredList = computed(() => {
    if (!list.value) return []
    let result = list.value

    if (activeFilter.value !== 'all') {
        result = result.filter(item => item.course === activeFilter.value)
    }

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim()
        result = result.filter(item =>
            item.title?.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q) ||
            item.category?.toLowerCase().includes(q) ||
            item.badge?.toLowerCase().includes(q)
        )
    }

    return result
})

const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
        const d = new Date(dateStr)
        return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(d)
    } catch {
        return dateStr
    }
}

const clearSearch = () => {
    searchQuery.value = ''
}
</script>

<template>
    <div class="space-y-8 animate-fadeIn">
        <header class="text-center md:text-left space-y-3">
            <div class="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <span
                    class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full">
                    Katalog Akademik PPG
                </span>
                <span class="text-xs text-stone-500 font-medium">
                    Total {{ list?.length || 0 }} Dokumen Terdokumentasi
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-900 font-serif">
                Daftar Artefak Pembelajaran
            </h1>
            <p class="text-stone-600 max-w-3xl text-base md:text-lg leading-relaxed">
                Repositori terstruktur seluruh dokumen luaran praktik: modul ajar multi-siklus, 6 dimensi analisis praktik mandiri di SMKN 3 Yogyakarta, dan proposal desain inovasi Seminar PPG.
            </p>
        </header>

        <!-- Bar Pencarian & Filter Cepat -->
        <div class="space-y-4 bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-stone-200/80 shadow-xs">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Cari artefak berdasarkan topik, materi, atau kata kunci (misal: Wayground, Modul, Asesmen)..."
                    class="w-full pl-11 pr-10 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
                <button
                    v-if="searchQuery"
                    @click="clearSearch"
                    type="button"
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Filter Pill Tabs dengan Counter -->
            <div class="flex flex-wrap items-center gap-2 pt-1">
                <button v-for="opt in filterOptions" :key="opt.value"
                    @click="activeFilter = opt.value"
                    type="button"
                    :class="[
                        'px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 inline-flex items-center gap-1.5',
                        activeFilter === opt.value
                            ? 'bg-emerald-700 text-white shadow-sm'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    ]">
                    <span>{{ opt.label }}</span>
                    <span :class="[
                        'px-1.5 py-0.2 rounded-full text-[10px] font-extrabold',
                        activeFilter === opt.value ? 'bg-emerald-900 text-emerald-100' : 'bg-stone-200 text-stone-700'
                    ]">
                        {{ opt.count }}
                    </span>
                </button>
            </div>
        </div>

        <!-- Jika Hasil Filter / Pencarian Kosong -->
        <div v-if="!filteredList.length" class="text-center py-16 bg-white rounded-3xl border border-stone-100 p-8 space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </div>
            <p class="text-stone-800 font-bold text-base">Tidak Ada Artefak yang Sesuai</p>
            <p class="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                Tidak ditemukan dokumen dengan kata kunci "{{ searchQuery }}" pada filter ini. Coba kata kunci lain atau setel ulang filter.
            </p>
            <button @click="clearSearch(); activeFilter = 'all'"
                type="button"
                class="px-4 py-2 bg-stone-800 text-white rounded-full text-xs font-semibold hover:bg-emerald-700 transition-colors">
                Tampilkan Semua Artefak
            </button>
        </div>

        <!-- Grid Kartu Artefak -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink v-for="article in filteredList" :key="article.path" :to="article.path"
                class="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-stone-200/80 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">

                <div class="space-y-4">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                {{ article.category }}
                            </span>
                            <span v-if="article.badge" class="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full">
                                {{ article.badge }}
                            </span>
                        </div>
                        <span class="text-xs text-stone-500 font-medium">
                            {{ formatDate(article.date) }}
                        </span>
                    </div>

                    <h2 class="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-serif leading-snug">
                        {{ article.title }}
                    </h2>

                    <p class="text-stone-600 text-sm leading-relaxed line-clamp-3">
                        {{ article.description }}
                    </p>
                </div>

                <div class="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        {{ article.course === 'ppl-1' ? 'PPL I' : article.course === 'ppl-2' ? 'PPL II' : 'Seminar PPG' }}
                    </span>

                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Buka Dokumen
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </div>

            </NuxtLink>
        </div>
    </div>
</template>
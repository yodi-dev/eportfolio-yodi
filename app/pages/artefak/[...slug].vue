<script setup>
const route = useRoute()
const router = useRouter()

const { data: doc } = await useAsyncData(route.path, () =>
    queryCollection('artefak').path(route.path).first()
)

useSeoMeta({
    title: () => doc.value?.title ? doc.value.title : 'Artefak Pembelajaran',
    description: () => doc.value?.description || 'Dokumentasi artefak pembelajaran PPL Yodi Irawan.'
})

const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
        const d = new Date(dateStr)
        return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
    } catch {
        return dateStr
    }
}

const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
    } else {
        router.push('/artefak')
    }
}
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-6 animate-fadeIn">

        <div v-if="!doc" class="text-center py-20 space-y-4 bg-white rounded-3xl border border-stone-100 p-8">
            <h1 class="text-3xl font-bold text-stone-800" style="font-family: 'Lora', serif;">Halaman Tidak Ditemukan</h1>
            <p class="text-base text-stone-600">Dokumen artefak pembelajaran yang dicari belum tersedia atau tautan tidak sesuai.</p>

            <button @click="goBack"
                class="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Kembali ke Daftar Artefak
            </button>
        </div>

        <article v-else class="bg-white/70 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-stone-200/70 shadow-sm">
            <header class="mb-10 space-y-4">
                <div class="flex flex-wrap items-center gap-3">
                    <span
                        class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        {{ doc.category }}
                    </span>
                    <span v-if="doc.badge" class="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                        {{ doc.badge }}
                    </span>
                    <span class="text-stone-400 text-sm ml-auto font-medium">
                        {{ formatDate(doc.date) }}
                    </span>
                </div>

                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 leading-tight" style="font-family: 'Lora', serif;">
                    {{ doc.title }}
                </h1>

                <p class="text-lg md:text-xl text-stone-500 leading-relaxed italic border-l-4 border-emerald-400 pl-4 py-1">
                    "{{ doc.description }}"
                </p>
            </header>

            <hr class="border-stone-100 mb-10" />

            <div class="prose prose-stone prose-lg max-w-none 
                prose-headings:font-serif prose-headings:text-stone-800
                prose-p:leading-relaxed prose-p:text-stone-600
                prose-li:text-stone-600
                prose-strong:text-emerald-700
                prose-a:text-emerald-600 prose-a:font-semibold prose-a:underline hover:prose-a:text-emerald-800">
                <ContentRenderer :value="doc" />
            </div>

            <div class="mt-14 pt-8 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <button @click="goBack"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors text-sm shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Kembali
                </button>

                <NuxtLink to="/artefak" class="text-stone-500 hover:text-emerald-600 text-sm font-medium transition-colors">
                    Lihat Semua Artefak &rarr;
                </NuxtLink>
            </div>
        </article>

    </div>
</template>

<style scoped>
.prose :deep(h2) {
    @apply text-2xl font-bold mt-10 mb-4 border-l-4 border-emerald-500 pl-4;
}
</style>
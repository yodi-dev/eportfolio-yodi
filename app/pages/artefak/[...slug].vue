<script setup>
const route = useRoute()
const router = useRouter()

const { data: doc } = await useAsyncData(route.path, () =>
    queryCollection('artefak').path(route.path).first()
)

// Ambil semua artefak untuk navigasi Previous / Next sekuensial
const { data: allDocs } = await useAsyncData('artefak-sequential-nav', () =>
    queryCollection('artefak').all()
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

// Filter artefak dalam mata kuliah yang sama untuk navigasi runtut
const courseDocs = computed(() => {
    if (!allDocs.value || !doc.value) return []
    return allDocs.value.filter(d => d.course === doc.value.course)
})

const currentIndex = computed(() => {
    if (!courseDocs.value.length || !doc.value) return -1
    return courseDocs.value.findIndex(d => d.path === doc.value.path)
})

const prevDoc = computed(() => {
    if (currentIndex.value > 0) return courseDocs.value[currentIndex.value - 1]
    return null
})

const nextDoc = computed(() => {
    if (currentIndex.value >= 0 && currentIndex.value < courseDocs.value.length - 1) {
        return courseDocs.value[currentIndex.value + 1]
    }
    return null
})

const courseLabel = computed(() => {
    if (!doc.value) return 'Mata Kuliah'
    if (doc.value.course === 'ppl-1') return 'PPL I (Terbimbing)'
    if (doc.value.course === 'ppl-2') return 'PPL II (Praktik Mandiri)'
    return 'Seminar PPG'
})

const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
    } else {
        router.push('/artefak')
    }
}

// State untuk pratinjau PDF in-browser modal
const isPdfModalOpen = ref(false)
const activePdfTitle = ref('')
const activePdfUrl = ref('')

const openPdfPreview = (file) => {
    activePdfTitle.value = file.title || 'Dokumen Asli'
    activePdfUrl.value = file.url
    isPdfModalOpen.value = true
}

const closePdfPreview = () => {
    isPdfModalOpen.value = false
}
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-6 animate-fadeIn">

        <!-- Breadcrumb Navigasi -->
        <nav v-if="doc" aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-stone-500 font-medium overflow-x-auto pb-1">
            <NuxtLink to="/" class="hover:text-emerald-700 transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Beranda</span>
            </NuxtLink>
            <span class="text-stone-300">/</span>
            <NuxtLink to="/artefak" class="hover:text-emerald-700 transition-colors">Artefak</NuxtLink>
            <span class="text-stone-300">/</span>
            <NuxtLink :to="`/mata-kuliah/${doc.course}`" class="hover:text-emerald-700 transition-colors font-bold text-emerald-800">
                {{ courseLabel }}
            </NuxtLink>
            <span class="text-stone-300">/</span>
            <span class="text-stone-800 font-semibold truncate max-w-[200px] sm:max-w-xs">{{ doc.title }}</span>
        </nav>

        <div v-if="!doc" class="text-center py-20 space-y-4 bg-white rounded-3xl border border-stone-100 p-8">
            <h1 class="text-3xl font-bold text-stone-800 font-serif">Halaman Tidak Ditemukan</h1>
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

        <article v-else class="bg-white/80 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-stone-200/70 shadow-sm">
            <header class="mb-8 space-y-4">
                <div class="flex flex-wrap items-center gap-3">
                    <span
                        class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        {{ doc.category }}
                    </span>
                    <span v-if="doc.badge" class="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                        {{ doc.badge }}
                    </span>
                    <span class="text-stone-500 text-sm ml-auto font-medium">
                        {{ formatDate(doc.date) }}
                    </span>
                </div>

                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight font-serif">
                    {{ doc.title }}
                </h1>

                <p class="text-lg md:text-xl text-stone-600 leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1">
                    "{{ doc.description }}"
                </p>
            </header>

            <!-- Table of Contents / Navigasi Bab Cepat -->
            <div v-if="doc.body?.toc?.links?.length" class="p-5 md:p-6 bg-stone-50/90 rounded-2xl border border-stone-200/80 space-y-3 mb-10">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-emerald-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                        Daftar Isi & Struktur Pembahasan
                    </span>
                    <span class="text-xs text-stone-500 font-medium">{{ doc.body.toc.links.length }} Bab Telaah</span>
                </div>
                <nav class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-sm">
                    <a v-for="link in doc.body.toc.links" :key="link.id" :href="`#${link.id}`"
                        class="text-stone-700 hover:text-emerald-700 hover:bg-white px-2.5 py-1.5 rounded-xl transition-colors flex items-center gap-2 group border border-transparent hover:border-stone-200">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform flex-shrink-0"></span>
                        <span class="truncate font-medium text-xs md:text-sm">{{ link.text }}</span>
                    </a>
                </nav>
            </div>

            <hr class="border-stone-200 mb-10" />

            <!-- Konten Artikel Render Markdown -->
            <div class="prose-academic max-w-none">
                <ContentRenderer :value="doc" />
            </div>

            <!-- Wadah Dokumen Asli & Berkas Bukti Fisik (Evidence Vault) -->
            <ArtefakAttachments
                v-if="doc.attachments && doc.attachments.length > 0"
                :attachments="doc.attachments"
                @preview="openPdfPreview"
            />

            <!-- Navigasi Sekuensial Next / Previous Artifact -->
            <div v-if="prevDoc || nextDoc" class="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <NuxtLink v-if="prevDoc" :to="prevDoc.path"
                    class="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all group flex flex-col justify-between">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-stone-500 group-hover:text-emerald-700 transition-colors flex items-center gap-1">
                        &larr; Dokumen Sebelumnya
                    </span>
                    <span class="text-sm font-bold text-stone-900 font-serif line-clamp-1 mt-1.5">
                        {{ prevDoc.title }}
                    </span>
                </NuxtLink>
                <div v-else class="hidden sm:block"></div>

                <NuxtLink v-if="nextDoc" :to="nextDoc.path"
                    class="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all group flex flex-col justify-between text-right sm:col-start-2">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-stone-500 group-hover:text-emerald-700 transition-colors flex items-center justify-end gap-1">
                        Dokumen Selanjutnya &rarr;
                    </span>
                    <span class="text-sm font-bold text-stone-900 font-serif line-clamp-1 mt-1.5">
                        {{ nextDoc.title }}
                    </span>
                </NuxtLink>
            </div>

            <!-- Footer Action Bar -->
            <div class="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <button @click="goBack"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors text-sm shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Kembali
                </button>

                <div class="flex items-center gap-3">
                    <NuxtLink :to="`/mata-kuliah/${doc.course}`" class="text-stone-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                        Buka Menu {{ courseLabel }} &rarr;
                    </NuxtLink>
                    <span class="text-stone-300">•</span>
                    <NuxtLink to="/artefak" class="text-stone-600 hover:text-emerald-700 text-sm font-semibold transition-colors">
                        Semua Artefak &rarr;
                    </NuxtLink>
                </div>
            </div>
        </article>

        <!-- Modal Pratinjau Dokumen PDF -->
        <PdfViewerModal
            :is-open="isPdfModalOpen"
            :title="activePdfTitle"
            :file-url="activePdfUrl"
            @close="closePdfPreview"
        />

    </div>
</template>
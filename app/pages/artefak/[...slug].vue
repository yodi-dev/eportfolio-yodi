<script setup>
const route = useRoute()
const router = useRouter() // <--- 1. TAMBAHKAN INI SOB!

const { data: doc } = await useAsyncData(route.path, () =>
    queryCollection('artefak').path(route.path).first()
)
</script>

<template>
    <main class="max-w-4xl mx-auto py-10 px-4">

        <div v-if="!doc" class="text-center py-20 space-y-4">
            <h1 class="text-4xl font-bold text-stone-800">Halaman Tidak Ditemukan</h1>
            <p class="text-lg text-stone-600">Artefak yang kamu cari belum dibuat atau URL-nya salah.</p>

            <button @click="router.back()"
                class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                Kembali
            </button>
        </div>

        <article v-else>
            <header class="mb-12 space-y-4">
                <div class="flex items-center gap-3">
                    <span
                        class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest">
                        {{ doc.category }}
                    </span>
                    <span class="text-stone-400 text-sm">{{ doc.date }}</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    {{ doc.title }}
                </h1>
                <p class="text-xl text-stone-500 leading-relaxed italic">
                    "{{ doc.description }}"
                </p>
            </header>

            <hr class="border-stone-200 mb-12" />

            <div class="prose prose-stone prose-lg max-w-none 
                prose-headings:font-serif prose-headings:text-stone-800
                prose-p:leading-relaxed prose-p:text-stone-600
                prose-li:text-stone-600
                prose-strong:text-emerald-700
                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">
                <ContentRenderer :value="doc" />
            </div>

            <div class="mt-16 pt-8 border-t border-stone-100">
                <button @click="router.back()"
                    class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                    Kembali
                </button>
            </div>
        </article>

    </main>
</template>

<style scoped>
.prose :deep(h2) {
    @apply text-2xl font-bold mt-10 mb-4 border-l-4 border-emerald-500 pl-4;
}
</style>
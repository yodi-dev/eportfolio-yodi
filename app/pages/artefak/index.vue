<script setup>
const { data: list } = await useAsyncData('artefak', () =>
    queryCollection('artefak').all()
)
</script>

<template>
    <main class="max-w-5xl mx-auto py-12 px-4">
        <h1 class="text-4xl font-bold text-stone-800 mb-8" style="font-family: 'Lora', serif;">
            Daftar Artefak Pembelajaran
        </h1>

        <!-- Kalau kosong -->
        <div v-if="!list?.length" class="text-stone-400 text-center py-20">
            Belum ada artefak yang ditambahkan.
        </div>

        <!-- List artikel -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 1. Ganti :key menjadi article.path -->
            <!-- 2. Ganti :to langsung menjadi article.path -->
            <NuxtLink v-for="article in list" :key="article.path" :to="article.path"
                class="block bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_8px_30px_rgb(52,211,153,0.15)] hover:-translate-y-1 transition-all duration-300 group">

                <h2 class="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors"
                    style="font-family: 'Lora', serif;">
                    {{ article.title }}
                </h2>

                <p class="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-6">
                    {{ article.description }}
                </p>

                <div
                    class="mt-auto text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2 group-hover:gap-3 transition-all w-max">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

            </NuxtLink>
        </div>
    </main>
</template>
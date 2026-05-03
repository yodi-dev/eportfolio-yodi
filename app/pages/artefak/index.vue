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
            <div v-for="article in list" :key="article._path"
                class="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <NuxtLink :to="article._path">
                    <h2 class="text-xl font-bold text-emerald-700 mb-2">{{ article.title }}</h2>
                    <p class="text-stone-600 text-sm line-clamp-2">{{ article.description }}</p>
                    <div class="mt-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
                        Klik untuk membaca &rarr;
                    </div>
                </NuxtLink>
            </div>
        </div>

    </main>
</template>
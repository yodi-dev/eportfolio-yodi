<script setup>
const { data: artefaks } = await useAsyncData(() =>
    queryCollection('artefak').all()
)
</script>

<template>
    <div class="space-y-8">
        <h1 class="text-3xl font-bold">Artefak</h1>
        <div class="space-y-4">
            <NuxtLink v-for="item in artefaks" :key="item.path" :to="item.path"
                class="block border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition">
                <p class="font-medium">{{ item.title }}</p>
                <p class="text-sm text-gray-400 mt-1">{{ item.description }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
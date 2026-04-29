<template>
    <div class="space-y-6">
        <p class="text-sm text-gray-400 uppercase tracking-widest">E-Portfolio PPL</p>
        <h1 class="text-4xl font-bold leading-tight">Halo, saya<br /><span class="text-gray-500">[Nama Kamu]</span></h1>
        <p class="text-gray-500 text-lg leading-relaxed">
            Calon guru profesional yang sedang menempuh PPL Terbimbing.
            Portfolio ini mendokumentasikan perjalanan belajar saya di lapangan.
        </p>
        <div class="flex gap-4 pt-2">
            <NuxtLink to="/profil"
                class="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                Lihat Profil
            </NuxtLink>
            <NuxtLink to="/artefak"
                class="border border-gray-300 px-5 py-2 rounded-full text-sm hover:border-black transition">
                Lihat Artefak
            </NuxtLink>
        </div>
    </div>
</template>
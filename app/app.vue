<template>
  <div class="min-h-screen bg-white text-gray-800">
    <nav class="border-b border-gray-100 px-8 py-4 flex gap-6 text-sm font-medium">
      <NuxtLink to="/" class="hover:text-black transition">Home</NuxtLink>
      <NuxtLink to="/profil" class="hover:text-black transition">Profil</NuxtLink>
      <NuxtLink to="/artefak" class="hover:text-black transition">Artefak</NuxtLink>
      <NuxtLink to="/penilaian" class="hover:text-black transition">Penilaian</NuxtLink>
      <NuxtLink to="/model-guru" class="hover:text-black transition">Model Guru</NuxtLink>
    </nav>
    <main class="max-w-3xl mx-auto px-6 py-12">
      <NuxtPage />
    </main>
    <footer class="text-center text-xs text-gray-400 py-8">
      © 2025 E-Portfolio PPL
    </footer>
  </div>
</template>
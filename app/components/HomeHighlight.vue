<template>
    <section class="space-y-10 pb-8">

        <div class="text-center space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Jejak Langkah Pembelajaran
            </h2>
            <p class="text-stone-600 max-w-2xl mx-auto text-lg">
                Cuplikan artefak pembelajaran yang telah disusun, diimplementasikan, dan direfleksikan selama masa
                Praktik Pengalaman Lapangan (PPL).
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div
                class="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(52,211,153,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                <div class="mb-5">
                    <span
                        class="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">Siklus
                        1</span>
                </div>
                <h3 class="text-xl font-bold text-stone-800 mb-3" style="font-family: 'Lora', serif;">Perencanaan &
                    Asesmen</h3>
                <p class="text-stone-600 text-sm md:text-base flex-grow mb-6 leading-relaxed">
                    Penyusunan modul ajar pertama dan pelaksanaan asesmen diagnostik untuk memahami karakteristik setiap
                    peserta didik di kelas.
                </p>
                <NuxtLink to="/artefak/siklus-1"
                    class="text-emerald-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-max">
                    Lihat Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

            <div
                class="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(20,184,166,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                <div class="mb-5">
                    <span
                        class="px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full">Siklus
                        2</span>
                </div>
                <h3 class="text-xl font-bold text-stone-800 mb-3" style="font-family: 'Lora', serif;">Implementasi &
                    Adaptasi</h3>
                <p class="text-stone-600 text-sm md:text-base flex-grow mb-6 leading-relaxed">
                    Penerapan model pembelajaran inovatif berdasarkan hasil refleksi siklus pertama untuk meningkatkan
                    keterlibatan siswa secara aktif.
                </p>
                <NuxtLink to="/artefak/siklus-2"
                    class="text-teal-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-max">
                    Lihat Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

            <div
                class="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(120,113,108,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                <div class="mb-5">
                    <span
                        class="px-4 py-1.5 bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider rounded-full">Siklus
                        3</span>
                </div>
                <h3 class="text-xl font-bold text-stone-800 mb-3" style="font-family: 'Lora', serif;">Refleksi
                    Komprehensif</h3>
                <p class="text-stone-600 text-sm md:text-base flex-grow mb-6 leading-relaxed">
                    Evaluasi akhir proses pembelajaran, analisis hasil asesmen sumatif, serta penyusunan rencana tindak
                    lanjut untuk perbaikan ke depan.
                </p>
                <NuxtLink to="/artefak/siklus-3"
                    class="text-stone-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-max">
                    Lihat Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

        </div>

        <div class="flex justify-center mt-12">
            <NuxtLink to="/artefak"
                class="group relative px-8 py-4 bg-stone-800 text-white rounded-full font-medium overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div
                    class="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <span class="relative flex items-center gap-3">
                    Jelajahi Semua Artefak
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1.5 transition-transform">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </span>
            </NuxtLink>
        </div>

    </section>
</template>
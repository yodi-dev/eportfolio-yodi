<script setup>
useSeoMeta({
    title: 'Portofolio PPL I (Praktik Terbimbing)',
    description: 'Dokumentasi lengkap Praktik Pengalaman Lapangan I (PPL I): 3 siklus pembelajaran, legalitas Lampiran 7 & 8, dan refleksi pedagogis.'
})

const { data: siklusList } = await useAsyncData('artefak-ppl1', () =>
    queryCollection('artefak').where('course', '=', 'ppl-1').all()
)
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header -->
        <header class="text-center md:text-left space-y-4">
            <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <NuxtLink to="/mata-kuliah" class="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    &larr; Semua Mata Kuliah
                </NuxtLink>
                <span class="text-stone-300">•</span>
                <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Status: Selesai (Tuntas)
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                PPL I: Praktik Pembelajaran Terbimbing
            </h1>
            <p class="text-stone-600 max-w-3xl text-base leading-relaxed">
                Fase awal pengenalan lapangan persekolahan, asistensi mengajar, serta implementasi 3 siklus pembelajaran terbimbing yang telah saya laksanakan di bawah bimbingan Guru Pamong <strong>Febriyana, S.T.</strong>
            </p>
        </header>

        <!-- KPI Ringkas PPL I -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-stone-400">Tahap</span>
                <div class="text-2xl font-bold text-stone-800 mt-1">Terbimbing</div>
                <p class="text-xs text-stone-500 mt-1">PPL Fase I</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-emerald-600">Nilai Perangkat (L7)</span>
                <div class="text-2xl font-bold text-emerald-700 mt-1">3.4 <span class="text-xs text-stone-400 font-normal">/ 4.0</span></div>
                <p class="text-xs text-stone-500 mt-1">Total Skor: 68</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-teal-600">Nilai Praktik (L8)</span>
                <div class="text-2xl font-bold text-teal-700 mt-1">3.9 <span class="text-xs text-stone-400 font-normal">/ 4.0</span></div>
                <p class="text-xs text-stone-500 mt-1">Total Skor: 78</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-stone-400">Guru Pamong</span>
                <div class="text-lg font-bold text-stone-800 mt-1 truncate">Febriyana, S.T.</div>
                <p class="text-xs text-stone-500 mt-1">30 April 2026</p>
            </div>
        </div>

        <!-- 3 Siklus Artefak -->
        <section class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                        Dokumentasi 3 Siklus Pembelajaran
                    </h2>
                    <p class="text-stone-500 text-sm">Artefak modul ajar, implementasi kelas, dan catatan reflektif tiap siklus.</p>
                </div>
                <NuxtLink to="/artefak" class="text-xs font-bold uppercase tracking-wider text-emerald-600 hover:underline hidden sm:block">
                    Katalog Lengkap &rarr;
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NuxtLink v-for="siklus in siklusList" :key="siklus.path" :to="siklus.path"
                    class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-3">
                        <span v-if="siklus.badge" class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block">
                            {{ siklus.badge }}
                        </span>
                        <h3 class="text-lg font-bold text-stone-800 group-hover:text-emerald-700 transition-colors" style="font-family: 'Lora', serif;">
                            {{ siklus.title }}
                        </h3>
                        <p class="text-stone-600 text-xs leading-relaxed line-clamp-3">
                            {{ siklus.description }}
                        </p>
                    </div>

                    <div class="pt-4 mt-4 border-t border-stone-50 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 group-hover:gap-3 transition-all">
                        Buka Artefak
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- Pintasan Cepat ke Penilaian & Refleksi -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-4">
                <div class="p-3 bg-emerald-50 text-emerald-700 rounded-2xl w-max">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-stone-800" style="font-family: 'Lora', serif;">Lembar Penilaian Resmi (L7 & L8)</h3>
                <p class="text-stone-600 text-sm leading-relaxed">
                    Lihat tabel indikator, skor perolehan, catatan kualitatif Guru Pamong, serta tautan unduh berkas fisik resmi Kemendikdasmen.
                </p>
                <NuxtLink to="/penilaian" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-800">
                    Buka Lembar Penilaian &rarr;
                </NuxtLink>
            </div>

            <div class="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-4">
                <div class="p-3 bg-amber-50 text-amber-700 rounded-2xl w-max">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-stone-800" style="font-family: 'Lora', serif;">Refleksi Akhir & Filosofi</h3>
                <p class="text-stone-600 text-sm leading-relaxed">
                    Eksplorasi mendalam mengenai evaluasi mandiri PPL Terbimbing berbasis ZPD Lev Vygotsky dan Sistem Among Ki Hadjar Dewantara.
                </p>
                <NuxtLink to="/refleksi" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-800">
                    Buka Refleksi Akhir &rarr;
                </NuxtLink>
            </div>
        </section>

    </div>
</template>


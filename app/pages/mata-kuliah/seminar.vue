<script setup>
useSeoMeta({
    title: 'Portofolio Seminar PPG',
    description: 'Wadah karya dan diseminasi mata kuliah Seminar PPG: Desain Inovasi Pembelajaran, Jurnal Refleksi Kritis, dan Karya Ilmiah/PTK.'
})

const { data: seminarList } = await useAsyncData('artefak-seminar', () =>
    queryCollection('artefak').where('course', '=', 'seminar').all()
)

const roadmapSeminar = [
    {
        title: 'Desain Inovasi Pembelajaran Berbasis EdTech',
        desc: 'Rancangan intervensi model dan media pembelajaran berbasis teknologi yang menyelesaikan permasalahan riil di kelas.',
        status: 'Perancangan'
    },
    {
        title: 'Jurnal Reflektif Kritis Berkelanjutan',
        desc: 'Catatan refleksi mendalam menggunakan kerangka berpikir terstruktur (ALACT / Gibbs / STAR) terhadap seluruh dinamika belajar.',
        status: 'Akan Datang'
    },
    {
        title: 'Artikel Ilmiah / Best Practice Pembelajaran',
        desc: 'Naskah publikasi ilmiah atau laporan praktik baik (Best Practice) hasil implementasi inovasi di sekolah mitra.',
        status: 'Akan Datang'
    },
    {
        title: 'Gelar Karya & Uji Kinerja Portofolio',
        desc: 'Pameran artefak pembelajaran digital dan presentasi pertanggungjawaban akademik di hadapan penguji.',
        status: 'Akan Datang'
    }
]
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
                <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Status: Seminar PPG (Dalam Perancangan)
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Seminar Pendidikan Profesi Guru
            </h1>
            <p class="text-stone-600 max-w-3xl text-base leading-relaxed">
                Ruang diseminasi akademik, formulasi desain inovasi pembelajaran yang teruji, penulisan jurnal refleksi kritis, dan gelar karya luaran profesi guru.
            </p>
        </header>

        <!-- Banner Panduan Pengisian -->
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Diseminasi & Gelar Karya
                </div>
                <h3 class="text-xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Siap Menampung Inovasi & Refleksi Kritis
                </h3>
                <p class="text-stone-600 text-sm leading-relaxed">
                    Setiap proposal inovasi pembelajaran atau jurnal refleksi seminar yang telah kamu buat dapat langsung dipublikasikan ke sini dengan menambahkan tag <code class="bg-white px-2 py-0.5 rounded text-amber-800 font-mono text-xs">course: "seminar"</code> pada berkas konten.
                </p>
            </div>
            <div class="flex-shrink-0">
                <span class="px-4 py-2 bg-white text-amber-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-amber-200 shadow-sm inline-block">
                    Modul Modular
                </span>
            </div>
        </div>

        <!-- Daftar Dokumen Seminar yang Sudah Terunggah -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Produk Inovasi & Jurnal Seminar
            </h2>

            <div v-if="!seminarList?.length" class="bg-white rounded-3xl border border-stone-200/70 p-10 text-center space-y-3">
                <div class="w-12 h-12 bg-stone-100 text-stone-400 rounded-2xl mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h3 class="text-lg font-bold text-stone-700">Belum Ada Dokumen Seminar yang Dipublikasikan</h3>
                <p class="text-stone-500 text-sm max-w-md mx-auto">
                    Wadah terstruktur telah disiapkan. Dokumen proposal inovasi dan jurnal reflektif akan muncul di sini secara dinamis saat perkuliahan Seminar PPG berjalan.
                </p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NuxtLink v-for="item in seminarList" :key="item.path" :to="item.path"
                    class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-600 text-sm mt-2 line-clamp-2">
                        {{ item.description }}
                    </p>
                </NuxtLink>
            </div>
        </section>

        <!-- Matriks Luaran Seminar PPG -->
        <section class="space-y-6">
            <div>
                <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Peta Target Luaran Seminar PPG
                </h2>
                <p class="text-stone-500 text-sm">Komponen produk akademik yang akan dipresentasikan pada uji portofolio.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(item, idx) in roadmapSeminar" :key="idx"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 font-bold flex items-center justify-center text-xs">
                            0{{ idx + 1 }}
                        </span>
                        <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                            {{ item.status }}
                        </span>
                    </div>
                    <h3 class="text-base font-bold text-stone-800">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-600 text-xs leading-relaxed">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </section>

    </div>
</template>


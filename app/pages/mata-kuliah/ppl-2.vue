<script setup>
useSeoMeta({
    title: 'Portofolio PPL II (Praktik Mandiri)',
    description: 'Dokumentasi Praktik Pengalaman Lapangan II (PPL II) Yodi Irawan: Pembelajaran mandiri, studi kasus bimbingan siswa, dan asesmen komprehensif.'
})

const { data: ppl2List } = await useAsyncData('artefak-ppl2', () =>
    queryCollection('artefak').where('course', '=', 'ppl-2').all()
)

const roadmapPPL2 = [
    {
        title: 'Praktik Mengajar Mandiri Penuh',
        desc: 'Pelaksanaan pembelajaran mandiri secara utuh di kelas dengan penguasaan manajemen kelas komprehensif dan strategi diferensiasi.',
        status: 'Tahap Berjalan'
    },
    {
        title: 'Studi Kasus Penanganan Peserta Didik',
        desc: 'Analisis diagnostik mendalam terhadap dinamika belajar siswa serta perancangan intervensi pedagogis yang solutif.',
        status: 'Proses Penyusunan'
    },
    {
        title: 'Observasi Lingkungan & Budaya Sekolah',
        desc: 'Kajian terhadap iklim persekolahan mitra, partisipasi dalam komunitas belajar guru, dan pembiasaan budaya positif.',
        status: 'Proses Observasi'
    },
    {
        title: 'Asesmen & Refleksi Mandiri Komprehensif',
        desc: 'Evaluasi ketercapaian tujuan pembelajaran, pengolahan data asesmen otentik, dan refleksi perbaikan kualitas mengajar.',
        status: 'Tahap Evaluasi'
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
                <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Status: Praktik Mandiri (Fase Berjalan)
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                PPL II: Praktik Pembelajaran Mandiri
            </h1>
            <p class="text-stone-600 max-w-3xl text-base leading-relaxed">
                Dokumentasi portofolio pembelajaran mandiri saya selama menempuh Praktik Pengalaman Lapangan II. Memuat perangkat ajar mandiri, studi kasus pendampingan siswa, dan evaluasi hasil belajar.
            </p>
        </header>

        <!-- Orientasi & Komitmen Praktik Mandiri -->
        <div class="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-0.5 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Fokus Praktik Mandiri
                </div>
                <h3 class="text-xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Penguatan Otonomi Mengajar & Kepemimpinan Kelas
                </h3>
                <p class="text-stone-600 text-sm leading-relaxed">
                    Pada tahapan PPL II ini, saya memperdalam kemandirian mengajar penuh di kelas, mempraktikkan pembelajaran berdiferensiasi yang kontekstual, serta melakukan studi kasus diagnostik untuk membantu mengatasi kesulitan belajar peserta didik.
                </p>
            </div>
            <div class="flex-shrink-0">
                <span class="px-4 py-2 bg-white text-teal-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-teal-200 shadow-sm inline-block">
                    Praktik Terstruktur
                </span>
            </div>
        </div>

        <!-- Daftar Artefak PPL II -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Dokumentasi & Perangkat Pembelajaran Mandiri
            </h2>

            <div v-if="!ppl2List?.length" class="bg-white rounded-3xl border border-stone-200/70 p-10 text-center space-y-3">
                <div class="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <h3 class="text-lg font-bold text-stone-700">Dokumentasi Praktik Sedang Berlangsung</h3>
                <p class="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                    Saat ini saya sedang melaksanakan rangkaian pembelajaran mandiri di sekolah mitra. Seluruh modul ajar, lembar kerja siswa, dan laporan studi kasus akan saya publikasikan di sini secara berkala.
                </p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NuxtLink v-for="item in ppl2List" :key="item.path" :to="item.path"
                    class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-stone-800 group-hover:text-teal-700 transition-colors" style="font-family: 'Lora', serif;">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-600 text-sm mt-2 line-clamp-2">
                        {{ item.description }}
                    </p>
                </NuxtLink>
            </div>
        </section>

        <!-- Matriks Target Pembelajaran PPL II -->
        <section class="space-y-6">
            <div>
                <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Peta Capaian Pembelajaran PPL II
                </h2>
                <p class="text-stone-500 text-sm">Target kompetensi dan luaran tugas yang saya kembangkan pada fase praktik mandiri.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(item, idx) in roadmapPPL2" :key="idx"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs">
                            0{{ idx + 1 }}
                        </span>
                        <span class="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
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

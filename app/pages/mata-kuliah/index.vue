<script setup>
useSeoMeta({
    title: 'Portofolio Mata Kuliah PPG',
    description: 'Pusat dokumentasi mata kuliah PPG Prajabatan: PPL I (Terbimbing), PPL II (Mandiri), dan Seminar PPG.'
})

const courses = [
    {
        id: 'ppl-1',
        title: 'PPL I (Praktik Terbimbing)',
        subtitle: 'Praktik Pengalaman Lapangan I',
        status: 'Tuntas',
        statusClass: 'bg-emerald-100 text-emerald-800',
        score: '3.4 (L7) & 3.9 (L8)',
        to: '/mata-kuliah/ppl-1',
        desc: 'Tahap asistensi mengajar dan pelaksanaan 3 siklus pembelajaran terbimbing bersama Guru Pamong Febriyana, S.T.',
        highlights: [
            'Siklus 1: Mengidentifikasi Tantangan Dasar',
            'Siklus 2: Penguatan Manajemen Kelas & Scaffolding',
            'Siklus 3: Diferensiasi & Riset Mandiri Terpandu',
            'Legalitas: Lembar Penilaian Lampiran 7 & 8 Resmi'
        ]
    },
    {
        id: 'ppl-2',
        title: 'PPL II (Praktik Mandiri)',
        subtitle: 'Praktik Pengalaman Lapangan II',
        status: 'Sedang Berjalan',
        statusClass: 'bg-teal-100 text-teal-800',
        score: 'Proses PPL',
        to: '/mata-kuliah/ppl-2',
        desc: 'Fase pendewasaan saya dalam mengajar secara mandiri penuh, menangani studi kasus kesulitan belajar siswa, dan menyusun evaluasi komprehensif.',
        highlights: [
            'Praktik Mengajar Mandiri Penuh',
            'Studi Kasus Penanganan Kesulitan Belajar Siswa',
            'Analisis Lingkungan & Budaya Sekolah',
            'Evaluasi & Asesmen Performa Mandiri'
        ]
    },
    {
        id: 'seminar',
        title: 'Seminar PPG',
        subtitle: 'Seminar Pendidikan Profesi Guru',
        status: 'Dalam Perancangan',
        statusClass: 'bg-amber-100 text-amber-800',
        score: 'Desain Inovasi',
        to: '/mata-kuliah/seminar',
        desc: 'Ruang diseminasi gagasan pedagogis, formulasi desain inovasi pembelajaran berbasis riset, serta penyusunan jurnal refleksi bermakna.',
        highlights: [
            'Desain Inovasi Pembelajaran Berbasis Teknologi',
            'Jurnal Refleksi Kritis Berkelanjutan',
            'Karya Ilmiah / Best Practice Pembelajaran',
            'Simulasi & Uji Kinerja Portofolio'
        ]
    }
]
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header -->
        <header class="text-center space-y-4">
            <span class="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Struktur Kurikulum & Mata Kuliah
            </span>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Portofolio Mata Kuliah PPG
            </h1>
            <p class="text-stone-600 max-w-2xl mx-auto text-base leading-relaxed">
                Dokumentasi terstruktur capaian akademik dan praktik lapangan saya selama menempuh program Pendidikan Profesi Guru (PPG) Prajabatan.
            </p>
        </header>

        <!-- Course Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="course in courses" :key="course.id"
                class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(52,211,153,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                
                <div class="space-y-5">
                    <div class="flex items-center justify-between gap-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-stone-400">
                            {{ course.subtitle }}
                        </span>
                        <span :class="course.statusClass" class="px-3 py-1 text-xs font-bold rounded-full">
                            {{ course.status }}
                        </span>
                    </div>

                    <div>
                        <h2 class="text-2xl font-bold text-stone-800 group-hover:text-emerald-700 transition-colors" style="font-family: 'Lora', serif;">
                            {{ course.title }}
                        </h2>
                        <div class="text-xs font-bold text-emerald-600 mt-1 uppercase tracking-wider">
                            Capaian: {{ course.score }}
                        </div>
                    </div>

                    <p class="text-stone-600 text-sm leading-relaxed">
                        {{ course.desc }}
                    </p>

                    <div class="pt-4 border-t border-stone-100 space-y-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-stone-400">Fokus Luaran:</span>
                        <ul class="text-xs text-stone-600 space-y-1.5">
                            <li v-for="(hl, idx) in course.highlights" :key="idx" class="flex items-start gap-2">
                                <span class="text-emerald-500 font-bold">•</span>
                                <span>{{ hl }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="pt-6 mt-6 border-t border-stone-100">
                    <NuxtLink :to="course.to"
                        class="w-full py-3 px-4 bg-stone-800 text-white group-hover:bg-emerald-600 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                        Buka Portofolio Mata Kuliah
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </NuxtLink>
                </div>

            </div>
        </div>

    </div>
</template>


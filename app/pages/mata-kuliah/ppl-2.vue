<script setup>
import { ref, computed } from 'vue'

useSeoMeta({
    title: 'Portofolio PPL II (Praktik Mandiri & 6 Dimensi Analisis)',
    description: 'Dokumentasi lengkap Praktik Pengalaman Lapangan II (PPL II) Yodi Irawan: 6 dimensi analisis kritis rancangan pembelajaran, materi, media, video praktik, kegiatan nonmengajar, dan instrumen penilaian.'
})

// Query artefak dinamis PPL II dari Content v3
const { data: ppl2List } = await useAsyncData('artefak-ppl2', () =>
    queryCollection('artefak').where('course', '=', 'ppl-2').all()
)

// Kategori Filter
const activeFilter = ref('all')
const previewModal = ref(null)

const categories = [
    { id: 'all', label: 'Semua Dimensi (6)' },
    { id: 'perangkat', label: 'Perencanaan & Materi' },
    { id: 'media-video', label: 'Media & Video Praktik' },
    { id: 'evaluasi', label: 'Persekolahan & Asesmen' }
]

// 6 Dimensi Analisis Wajib Luaran PPL II
const sixDimensions = [
    {
        id: 'perencanaan',
        number: '01',
        category: 'perangkat',
        categoryLabel: 'Perencanaan',
        title: 'Analisis Produk Perencanaan Pembelajaran',
        subtitle: 'Transformasi Pedagogis & Guided Discovery Kelas X TM',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/ppl-2/analisis-perencanaan',
        iconBg: 'bg-emerald-50 text-emerald-600',
        iconSvg: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
        summary: 'Merombak metode pasif PPL I menjadi Guided Discovery di kelas X TM 1 & X TM 2: transparansi agenda Google Docs, active note-taking manual berbahasa sendiri, konfirmasi klasikal PPT, dan evaluasi Wayground.',
        criteria: [
            'Kesesuaian TP/ATP elemen Algoritma Pemrograman & Analisis Data',
            'Transparansi alur dan rundown instruksional via Google Docs',
            'Desain active note-taking manual di buku tulis anti-distraksi',
            'Progresi dari eksplorasi mandiri individu ke kolaborasi tim'
        ],
        formatLabel: 'Modul Ajar (PDF/DOCX)'
    },
    {
        id: 'materi',
        number: '02',
        category: 'perangkat',
        categoryLabel: 'Materi Ajar',
        title: 'Analisis Materi Pembelajaran yang Diterapkan',
        subtitle: 'Kontekstualisasi Logika Komputasi & SOP Teknik Mesin',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-teal-100 text-teal-800 border-teal-200',
        path: '/artefak/ppl-2/analisis-materi',
        iconBg: 'bg-teal-50 text-teal-600',
        iconSvg: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
        summary: 'Kajian struktur materi esensial Algoritma Pemrograman dan Analisis Data yang dikorelasikan dengan instruksi kerja SOP permesinan dan presisi logika siswa Teknik Mesin SMKN 3 Yogyakarta.',
        criteria: [
            'Hierarki materi flowchart, percabangan if-else, dan looping',
            'Kontekstualisasi algoritma dengan alur kerja mesin industri',
            'Integrasi TPACK: Blockly Games, OnlineGDB, dan eksplorasi AI',
            'Mitigasi miskonsepsi syntax memorization vs logic formulation'
        ],
        formatLabel: 'Bahan Ajar & Modul'
    },
    {
        id: 'media',
        number: '03',
        category: 'media-video',
        categoryLabel: 'Media Instruksional',
        title: 'Analisis Media Pembelajaran yang Dipergunakan',
        subtitle: 'Ekosistem Hibrida: Web Cloud, Buku Manual, & Wayground',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/ppl-2/analisis-media',
        iconBg: 'bg-emerald-50 text-emerald-600',
        iconSvg: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
        summary: 'Evaluasi pemilihan ekosistem media multi-modal: Google Docs untuk agenda, buku tulis manual untuk catatan anti-copas, slide PPT konfirmasi, kuis kompetitif Wayground, dan cloud IDE OnlineGDB.',
        criteria: [
            'Efektivitas gamifikasi Wayground mendongkrak antusiasme kelas',
            'Kombinasi web browser dan catatan buku fisik anti-distraksi',
            'Efisiensi setup cloud zero-installation di lab komputer',
            'Pemanfaatan modul cheatsheet PDF dan asistensi terarah AI'
        ],
        formatLabel: 'Katalog Alat & Media'
    },
    {
        id: 'video',
        number: '04',
        category: 'media-video',
        categoryLabel: 'Rekaman Video',
        title: 'Analisis Video Pelaksanaan Praktik Mengajar',
        subtitle: 'Refleksi Menit ke Menit, Active Roaming, & Scaffolding',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-amber-100 text-amber-800 border-amber-200',
        path: '/artefak/ppl-2/analisis-video',
        iconBg: 'bg-amber-50 text-amber-700',
        iconSvg: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z',
        summary: 'Dokumentasi performa mengajar mandiri di kelas X TM 1 & X TM 2: ketegasan apersepsi Google Docs, manajemen keliling kelas (active roaming) memeriksa catatan, dan penutupan dengan exit ticket.',
        criteria: [
            'Kejelasan apersepsi dan kontrak belajar di awal sesi',
            'Manajemen keliling kelas (active roaming) dan scaffolding 1-on-1',
            'Kecakapan validasi konsep dan fasilitasi diskusi terbuka',
            'Refleksi metakognitif siswa dan penjaringan feedback via exit ticket'
        ],
        formatLabel: 'Video Full & 15 Menit'
    },
    {
        id: 'nonmengajar',
        number: '05',
        category: 'evaluasi',
        categoryLabel: 'Nonmengajar',
        title: 'Analisis Kegiatan Nonmengajar',
        subtitle: 'Piket 5S & KBM, Kepanitiaan, serta Inovasi SIBENKA & SIPENSI',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-teal-100 text-teal-800 border-teal-200',
        path: '/artefak/ppl-2/analisis-kegiatan-nonmengajar',
        iconBg: 'bg-teal-50 text-teal-600',
        iconSvg: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342',
        summary: 'Dedikasi holistik di SMKN 3 Yogyakarta: Piket 5S pagi, Piket KBM harian, kepanitiaan 17-an, HUT Skagata, serta rancang bangun inovasi sistem informasi digital SIBENKA dan SIPENSI.',
        criteria: [
            'Kedisiplinan pelaksanaan piket 5S gerbang dan piket KBM',
            'Partisipasi kepanitiaan HUT RI ke-79 dan Dies Natalis sekolah',
            'Pengembangan aplikasi web sistem informasi SIBENKA',
            'Pengembangan aplikasi web presensi dan kesiswaan SIPENSI'
        ],
        formatLabel: 'Jurnal & Dokumentasi'
    },
    {
        id: 'penilaian',
        number: '06',
        category: 'evaluasi',
        categoryLabel: 'Asesmen',
        title: 'Instrumen Penilaian yang Dirancang & Analisisnya',
        subtitle: 'Multi-Metode: Catatan Manual, Wayground, OnlineGDB, & Exit Ticket',
        status: 'Tuntas Dianalisis',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/ppl-2/analisis-instrumen-penilaian',
        iconBg: 'bg-emerald-50 text-emerald-600',
        iconSvg: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
        summary: 'Sistem asesmen multi-metode: catatan tertulis orisinal, flowchart, kuis gamifikasi Wayground, evaluasi koding OnlineGDB, presentasi kelompok analisis data, serta exit ticket.',
        criteria: [
            'Rubrik orisinalitas catatan buku dan diagram alir (flowchart)',
            'Analisis butir soal cepat melalui kuis gamifikasi Wayground',
            'Rubrik kinerja koding OnlineGDB dan modifikasi kreatif AI',
            'Analisis daya serap ketuntasan belajar dan program remedial'
        ],
        formatLabel: 'Rubrik & Rekap Nilai'
    }
]

// Filter dimensi berdasarkan kategori aktif
const filteredDimensions = computed(() => {
    if (activeFilter.value === 'all') return sixDimensions
    return sixDimensions.filter(d => d.category === activeFilter.value)
})

const openPreview = (dim) => {
    previewModal.value = dim
}

const closePreview = () => {
    previewModal.value = null
}
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header Halaman PPL II -->
        <header class="text-center md:text-left space-y-4">
            <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <NuxtLink to="/mata-kuliah" class="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
                    &larr; Semua Mata Kuliah
                </NuxtLink>
                <span class="text-stone-300">•</span>
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-700 font-medium">
                    <img src="/logo-uny.svg" alt="UNY" class="w-3.5 h-3.5 object-contain" />
                    <img src="/logo-kemendikbud.svg" alt="PPG" class="w-3.5 h-3.5 object-contain" />
                    <span>LPTK UNY • PPG Calon Guru</span>
                </div>
                <span class="text-stone-300">•</span>
                <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Praktik Mandiri (Fase Berjalan)
                </span>
            </div>

            <h1 class="text-3xl md:text-5xl font-bold text-stone-900 font-serif">
                PPL II: Praktik Pembelajaran Mandiri
            </h1>
            <p class="text-stone-600 max-w-3xl text-base md:text-lg leading-relaxed">
                Pusat dokumentasi portofolio pembelajaran mandiri saya selama menempuh Praktik Pengalaman Lapangan II. Memuat <strong>6 dimensi analisis kritis</strong> luaran praktik mengajar, keterlibatan kegiatan persekolahan, serta sistem evaluasi hasil belajar.
            </p>
        </header>

        <!-- KPI & Overview PPL II -->
        <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-stone-500">Target Luaran</span>
                <div class="text-2xl font-bold text-teal-700 mt-1 font-serif">6 Dimensi</div>
                <p class="text-xs text-stone-500 mt-1">Analisis Kritis Wajib</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-emerald-700">Sasaran Mengajar</span>
                <div class="text-2xl font-bold text-stone-900 mt-1 font-serif">X TM 1 & 2</div>
                <p class="text-xs text-stone-500 mt-1">Teknik Mesin SMKN 3</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-stone-500">Guru Pamong</span>
                <div class="text-lg font-bold text-stone-900 mt-1 truncate">Febriyana, S.T.</div>
                <p class="text-xs text-stone-500 mt-1">LPTK UNY Yogyakarta</p>
            </div>
            <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <span class="text-xs font-bold uppercase text-teal-700">Status Portofolio</span>
                <div class="text-base font-bold text-teal-700 mt-1">Tuntas Dianalisis</div>
                <p class="text-xs text-stone-500 mt-1">6 Dimensi Lengkap</p>
            </div>
        </section>

        <!-- Banner Orientasi Praktik Mandiri -->
        <div class="bg-gradient-to-r from-teal-50 via-emerald-50 to-stone-50 border border-teal-200/70 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-0.5 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Evolusi Praktik Mandiri
                </div>
                <h3 class="text-xl font-bold text-stone-900 font-serif">
                    Guided Discovery & Active Note-Taking di Kelas X Teknik Mesin
                </h3>
                <p class="text-stone-700 text-sm md:text-base leading-relaxed text-left">
                    Mengevaluasi pasivitas membaca pada PPL I, di PPL II saya mentransformasikan strategi instruksional menjadi <strong>Guided Discovery</strong>: siswa menelusuri materi online lalu merangkum manual dengan bahasa sendiri di buku fisik, dikonfirmasi melalui slide PPT dan kuis interaktif <strong>Wayground</strong>, serta praktik koding mandiri pada <strong>OnlineGDB</strong>.
                </p>
            </div>
            <div class="flex-shrink-0">
                <span class="px-4 py-2 bg-white text-teal-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-teal-200 shadow-xs inline-block">
                    SMKN 3 Yogyakarta
                </span>
            </div>
        </div>

        <!-- Section: 6 Dimensi Analisis Praktik Mandiri -->
        <section class="space-y-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                        Struktur Luaran Wajib
                    </span>
                    <h2 class="text-2xl md:text-3xl font-bold text-stone-900 mt-2 font-serif">
                        6 Dimensi Analisis Praktik Mandiri
                    </h2>
                    <p class="text-stone-500 text-sm mt-1">
                        Pilih dimensi untuk menelaah instrumen analisis, deskripsi reflektif, serta berkas artefak yang telah saya rancang.
                    </p>
                </div>

                <!-- Filter Kategori Tabs -->
                <div class="flex flex-wrap gap-2">
                    <button v-for="cat in categories" :key="cat.id"
                        @click="activeFilter = cat.id"
                        :class="[
                            'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200',
                            activeFilter === cat.id
                                ? 'bg-teal-700 text-white shadow-sm'
                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        ]">
                        {{ cat.label }}
                    </button>
                </div>
            </div>

            <!-- Matriks Kartu 6 Dimensi -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="dim in filteredDimensions" :key="dim.id"
                    class="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    
                    <div class="space-y-4">
                        <!-- Top Meta Header -->
                        <div class="flex items-center justify-between">
                            <span class="w-9 h-9 rounded-2xl bg-stone-100 text-stone-700 font-bold flex items-center justify-center text-xs group-hover:bg-teal-700 group-hover:text-white transition-colors">
                                {{ dim.number }}
                            </span>
                            <span :class="['px-2.5 py-1 text-[11px] font-bold rounded-full border', dim.statusClass]">
                                {{ dim.status }}
                            </span>
                        </div>

                        <!-- Icon & Judul -->
                        <div class="space-y-2">
                            <div :class="['w-10 h-10 rounded-2xl flex items-center justify-center', dim.iconBg]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="dim.iconSvg" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-stone-900 group-hover:text-teal-700 transition-colors leading-snug font-serif">
                                {{ dim.title }}
                            </h3>
                            <p class="text-xs font-semibold text-stone-500">
                                {{ dim.subtitle }}
                            </p>
                        </div>

                        <!-- Deskripsi Sudut Pandang Pertama -->
                        <p class="text-stone-600 text-sm leading-relaxed text-left line-clamp-3">
                            {{ dim.summary }}
                        </p>

                        <!-- Indikator Kunci -->
                        <div class="p-3.5 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                                Poin Telaah Kritis:
                            </span>
                            <ul class="space-y-1.5 text-[11px] text-stone-600">
                                <li v-for="(point, pIdx) in dim.criteria.slice(0, 2)" :key="pIdx" class="flex items-start gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <span class="line-clamp-1">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Action Box / Footer Kartu -->
                    <div class="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                        <button @click="openPreview(dim)"
                            type="button"
                            class="text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors inline-flex items-center gap-1">
                            <span>Pratinjau</span>
                        </button>

                        <NuxtLink :to="dim.path"
                            class="px-3.5 py-1.5 bg-stone-800 text-white hover:bg-teal-700 text-xs font-semibold rounded-full transition-colors inline-flex items-center gap-1.5 shadow-xs">
                            <span>Buka Telaah</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </section>

        <!-- Wadah Interaktif Video & Media Praktik Mandiri -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Card Showcase Video Pembelajaran Mandiri -->
            <div class="bg-white p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-4">
                <div class="flex items-center justify-between">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Wadah Video Praktik Mandiri
                    </div>
                    <span class="text-xs text-stone-500 font-medium">Dimensi 04</span>
                </div>

                <h3 class="text-xl font-bold text-stone-900 font-serif">
                    Dokumentasi Rekaman Video Mengajar Kelas X TM
                </h3>
                <p class="text-stone-600 text-sm md:text-base leading-relaxed text-left">
                    Dokumentasi rekaman performa mengajar mandiri utuh dan editan 15–20 menit di laboratorium komputer: apersepsi agenda Google Docs, pemantauan keliling catatan manual, validasi PPT, kuis Wayground, dan penutupan dengan exit ticket.
                </p>

                <!-- Box Placeholder Video -->
                <div class="p-5 rounded-2xl bg-stone-900 text-white space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-400">
                        <span>Fokus: Kelas X TM 1 & X TM 2</span>
                        <span class="text-amber-400 font-semibold">Tuntas Dilaksanakan</span>
                    </div>
                    <p class="text-xs text-stone-300 leading-relaxed">
                        Analisis menit ke menit tersusun lengkap membedah efektivitas active roaming guru, kedisiplinan lab, dan respon antusias siswa terhadap kuis Wayground.
                    </p>
                    <NuxtLink to="/artefak/ppl-2/analisis-video"
                        class="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-1">
                        Buka Lembar Telaah Video &rarr;
                    </NuxtLink>
                </div>
            </div>

            <!-- Card Showcase Penilaian & Nonmengajar -->
            <div class="bg-white p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-4">
                <div class="flex items-center justify-between">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                        </svg>
                        Wadah Asesmen & Nonmengajar
                    </div>
                    <span class="text-xs text-stone-500 font-medium">Dimensi 05 & 06</span>
                </div>

                <h3 class="text-xl font-bold text-stone-900 font-serif">
                    Sistem Evaluasi Multi-Metode & Inovasi Sekolah
                </h3>
                <p class="text-stone-600 text-sm md:text-base leading-relaxed text-left">
                    Menghimpun rubrik evaluasi multi-metode (catatan manual, flowchart, kuis Wayground, OnlineGDB, dan presentasi kelompok) serta rekam jejak piket 5S, KBM, dan inovasi aplikasi web SIBENKA dan SIPENSI.
                </p>

                <!-- Box Placeholder Asesmen -->
                <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                        <span>Inovasi: SIBENKA & SIPENSI</span>
                        <span class="text-teal-700 font-semibold">Tervalidasi Lengkap</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Data evaluasi ketuntasan klasikal >88%, rekapitulasi respon exit ticket 92% positif, dan dokumentasi kontribusi digital bagi SMKN 3 Yogyakarta.
                    </p>
                    <NuxtLink to="/artefak/ppl-2/analisis-instrumen-penilaian"
                        class="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors pt-1">
                        Buka Instrumen Penilaian &rarr;
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Refleksi & Komitmen Menuju Seminar PPG -->
        <section class="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-xs space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-stone-100 text-stone-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Refleksi Pendidik Mandiri
            </div>
            <h2 class="text-2xl font-bold text-stone-900 font-serif">
                Sintesis Praktik Mandiri Menuju Seminar Inovasi PPG
            </h2>
            <p class="text-stone-600 text-base leading-relaxed text-left">
                Pelaksanaan 6 dimensi analisis pada PPL II ini bukan sekadar pemenuhan beban administrasi kurikulum, melainkan wahana penempaan diri saya untuk menjadi pendidik yang reflektif. Temuan autentik dari analisis perencanaan, materi, media, video rekaman, kegiatan nonmengajar, serta instrumen asesmen ini akan menjadi bahan baku utama yang saya formulasikan dalam desain inovasi pembelajaran pada mata kuliah <strong>Seminar PPG</strong> berikutnya.
            </p>
            <div class="pt-2 flex flex-wrap gap-3">
                <NuxtLink to="/mata-kuliah/ppl-1" class="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-full transition-colors">
                    &larr; Lihat Rekapitulasi PPL I
                </NuxtLink>
                <NuxtLink to="/mata-kuliah/seminar" class="px-4 py-2 bg-stone-800 hover:bg-teal-700 text-white text-xs font-semibold rounded-full transition-colors">
                    Lanjut ke Rencana Seminar PPG &rarr;
                </NuxtLink>
            </div>
        </section>

        <!-- Modal Pratinjau Kriteria Dimensi -->
        <div v-if="previewModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
            <div class="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 space-y-5 shadow-2xl border border-stone-200 relative">
                <button @click="closePreview" type="button" class="absolute top-5 right-5 text-stone-400 hover:text-stone-700 transition-colors p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 bg-stone-100 text-stone-700 text-xs font-bold rounded-full">
                            Dimensi {{ previewModal.number }}
                        </span>
                        <span :class="['px-2.5 py-0.5 text-xs font-bold rounded-full border', previewModal.statusClass]">
                            {{ previewModal.status }}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 font-serif">
                        {{ previewModal.title }}
                    </h3>
                    <p class="text-xs text-stone-500">{{ previewModal.subtitle }}</p>
                </div>

                <div class="space-y-3 text-sm text-stone-600 leading-relaxed">
                    <p class="text-left">{{ previewModal.summary }}</p>

                    <div class="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                        <span class="font-bold text-stone-700 uppercase tracking-wider block text-[10px]">
                            Indikator Telaah Akademik:
                        </span>
                        <ul class="space-y-1.5">
                            <li v-for="(crit, cIdx) in previewModal.criteria" :key="cIdx" class="flex items-start gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 flex-shrink-0"></span>
                                <span>{{ crit }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span class="text-xs text-stone-400">Berkas: {{ previewModal.formatLabel }}</span>
                    <NuxtLink :to="previewModal.path" @click="closePreview"
                        class="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-full transition-colors inline-flex items-center gap-1.5">
                        <span>Buka Halaman Telaah Lengkap</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

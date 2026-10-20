<script setup>
useSeoMeta({
    title: 'Portofolio Seminar PPG',
    description: 'Pusat diseminasi akademik mata kuliah Seminar PPG Yodi Irawan: Identifikasi diri, refleksi pengalaman belajar semester 1 & 2, refleksi komprehensif program PPG, dan karya inovasi pendidikan.'
})

// Query semua artefak seminar
const { data: seminarList } = await useAsyncData('artefak-seminar', () =>
    queryCollection('artefak').where('course', '=', 'seminar').all()
)

// Modal Pratinjau Cepat Ringkasan LK
const previewModal = ref(null)

const openPreview = (item) => {
    previewModal.value = item
}

const closePreview = () => {
    previewModal.value = null
}

// State & fungsi modal pratinjau PDF in-browser
const isPdfModalOpen = ref(false)
const activePdfTitle = ref('')
const activePdfUrl = ref('')

const openPdfPreview = (file) => {
    activePdfTitle.value = file.title || 'Dokumen Asli'
    activePdfUrl.value = file.url
    isPdfModalOpen.value = true
}

const closePdfPreview = () => {
    isPdfModalOpen.value = false
}

// 4 Pilar Utama Seminar PPG
const fourPillars = [
    {
        id: 'lk1',
        number: '01',
        code: 'LK 1',
        title: 'Identifikasi Diri & Visi Guru',
        subtitle: 'Visi Pendidikan Indonesia, Filosofi Guru "Biji Kopi", & Manajemen Diri',
        status: 'Dokumen Asli Tersedia',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/seminar/lk-1-identifikasi-diri',
        iconBg: 'bg-amber-50 text-amber-700',
        iconSvg: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
        summary: 'Formulasi visi mengatasi darurat literasi dasar dan digital, filosofi guru sebagai biji kopi berkualitas tinggi yang mengutamakan praktik kontekstual, serta strategi manajemen diri (fisiologis, emosional, dan motivasi maraton).',
        points: [
            'Visi Pendidikan: Darurat literasi membaca & kecakapan digital siswa',
            'Filosofi Pendidik: Guru sebagai "Biji Kopi" yang tuntas kompetensi dan praktisi nyata SMK',
            'Prinsip Pembelajaran: Kontekstual, membumi, dan berorientasi jam terbang riil',
            'Fondasi Manajemen Diri: Kemerdekaan fisiologis, kecerdasan emosi, dan motivasi intrinsik'
        ],
        hasAuthenticDoc: true,
        docFile: {
            title: 'Lembar Kerja 1 (LK 1): Identifikasi Diri',
            url: '/dokumen/seminar/LEMBAR KERJA 1 (LK 1).pdf',
            size: '184 KB'
        }
    },
    {
        id: 'lk2',
        number: '02',
        code: 'LK 2',
        title: 'Refleksi Mata Kuliah Semester 1 & 2',
        subtitle: 'Telaah Pengalaman Belajar Mata Kuliah Inti & Selektif dengan Kerangka ALACT',
        status: 'Tahap Konsolidasi (Menyusul)',
        statusClass: 'bg-amber-100 text-amber-800 border-amber-200',
        path: '/artefak/seminar/lk-2-refleksi-mata-kuliah',
        iconBg: 'bg-blue-50 text-blue-700',
        iconSvg: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
        summary: 'Rekonstruksi komprehensif pengalaman belajar mata kuliah semester 1 (Filosofi Pendidikan, Pemahaman Peserta Didik, PPA I, PPL I) dan semester 2 (Pembelajaran Berdiferensiasi, PPA II, Projek Kepemimpinan, PPL II) menggunakan kerangka refleksi kritis ALACT/Gibbs.',
        points: [
            'Sintesis teori UbD, TaRL, dan Culturally Responsive Teaching (CRT)',
            'Penerapan strategi diferensiasi konten, proses, dan produk di kelas kejuruan',
            'Integrasi pengalaman asistensi mengajar PPL I dan praktik mandiri PPL II',
            'Analisis kesenjangan teoretis vs dinamika nyata laboratorium komputer'
        ],
        hasAuthenticDoc: false
    },
    {
        id: 'lk3',
        number: '03',
        code: 'LK 3',
        title: 'Refleksi Program PPG Menyeluruh',
        subtitle: 'Sintesis Holistik Metamorfosis Menjadi Pendidik Profesional Berdampak',
        status: 'Tahap Konsolidasi (Menyusul)',
        statusClass: 'bg-amber-100 text-amber-800 border-amber-200',
        path: '/artefak/seminar/lk-3-refleksi-program-ppg',
        iconBg: 'bg-purple-50 text-purple-700',
        iconSvg: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342',
        summary: 'Perenungan holistik perjalanan transformasi dari mahasiswa calon guru menjadi pendidik profesional siap tugas: dekonstruksi pola pikir lama, resonansi kultur ketarunaan vokasi SMKN 3 Yogyakarta, dan kesiapan dedikasi berkelanjutan.',
        points: [
            'Transformasi Mindset: Bergeser dari pengajar materi menjadi fasilitator potensi murid',
            'Resonansi Budaya Vokasi: Harmonisasi disiplin ketarunaan dan kepedulian humanis',
            'Dedikasi Ekosistem Sekolah: Terlibat aktif dalam denyut nadi manajemen dan KBM',
            'Komitmen Berkelanjutan: Adaptif terhadap revolusi teknologi dan integritas moral guru'
        ],
        hasAuthenticDoc: false
    },
    {
        id: 'lk4',
        number: '04',
        code: 'LK 4',
        title: 'Karya Inovasi Pendidikan (SIPENSI)',
        subtitle: 'Aplikasi Presensi Web Berbasis Geolocation & Timestamp Swafoto di SMKN 3 Yogyakarta',
        status: 'Dokumen Asli Tersedia',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/seminar/lk-4-karya-inovasi-pendidikan',
        iconBg: 'bg-emerald-50 text-emerald-700',
        iconSvg: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
        summary: 'Rancang bangun solusi web digital SIPENSI guna menyelesaikan kendala presensi manual kertas dan Google Form terpisah bagi mahasiswa PPL, PK, dan GTT. Memenuhi 5 prinsip inovasi pendidikan dan diadopsi resmi secara massal lintas jurusan.',
        points: [
            'Penyelesaian Masalah Lapangan: Eliminasi titip absen dan mitigasi manipulasi kehadiran',
            'Fitur Unggulan: API Geolocation (radius sekolah) & kamera swafoto timestamp waktu nyata',
            'Pemenuhan 5 Prinsip Inovasi: Kebaruan, Kreativitas, Kebermanfaatan, Relevansi, & Efektivitas',
            'Adopsi Resmi Sekolah: Berkembang dari uji coba 8 mhs menjadi sistem resmi Waka Kurikulum'
        ],
        hasAuthenticDoc: true,
        docFile: {
            title: 'Lembar Kerja 4 (LK 4): Penyusunan Desain Karya Inovatif',
            url: '/dokumen/seminar/LEMBAR KERJA 4 (LK 4).pdf',
            size: '229 KB'
        }
    }
]

// Repositori Dokumen Otentik Seminar PPG
const repoFilter = ref('all')

const repoCategories = [
    { id: 'all', label: 'Semua Berkas' },
    { id: 'Lembar Kerja', label: 'Lembar Kerja (LK)' },
    { id: 'Sistem Informasi', label: 'Sistem & Inovasi' }
]

const seminarDocuments = [
    {
        title: 'Lembar Kerja 1 (LK 1): Identifikasi Diri',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 1 (LK 1).pdf',
        size: '184 KB',
        badge: 'Dokumen Resmi LK 1',
        category: 'Lembar Kerja',
        description: 'Naskah asli identifikasi diri, visi pendidikan Indonesia, filosofi guru "biji kopi", dan langkah manajemen diri.'
    },
    {
        title: 'Lembar Kerja 4 (LK 4): Penyusunan Desain Karya Inovatif',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 4 (LK 4).pdf',
        size: '229 KB',
        badge: 'Dokumen Resmi LK 4',
        category: 'Lembar Kerja',
        description: 'Naskah asli rancang bangun sistem presensi web SIPENSI dengan Geolocation dan Timestamp Swafoto di SMKN 3 Yogyakarta.'
    },
    {
        title: 'Undangan Resmi BIMTEK Aplikasi SIBENKA',
        type: 'pdf',
        url: '/dokumen/ppl-2/Undangan BIMTEK SIBENKA.pdf',
        size: '321 KB',
        badge: 'Diseminasi Inovasi',
        category: 'Sistem Informasi',
        description: 'Bukti surat resmi sosialisasi dan bimbingan teknis implementasi aplikasi Sistem Informasi Bengkel di SMKN 3 Yogyakarta.'
    }
]

const filteredDocuments = computed(() => {
    if (repoFilter.value === 'all') return seminarDocuments
    return seminarDocuments.filter(d => d.category === repoFilter.value)
})

const getBadgeClass = (type) => {
    switch (type) {
        case 'pdf': return 'bg-rose-50 text-rose-700 border-rose-200'
        case 'docx': return 'bg-blue-50 text-blue-700 border-blue-200'
        case 'link': return 'bg-sky-50 text-sky-700 border-sky-200'
        default: return 'bg-stone-50 text-stone-700 border-stone-200'
    }
}
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header Halaman Seminar PPG -->
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
                <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Tahap Refleksi & Diseminasi Akhir
                </span>
            </div>

            <h1 class="text-3xl md:text-5xl font-bold text-stone-900 font-serif">
                Seminar Pendidikan Profesi Guru
            </h1>
            <p class="text-stone-600 max-w-3xl text-base md:text-lg leading-relaxed">
                Pusat diseminasi akademik dan pertanggungjawaban karya profesi pendidik. Memuat <strong>4 pilar utama</strong>: identifikasi visi diri, refleksi pengalaman belajar semester 1 & 2, refleksi komprehensif program PPG, serta perancangan karya inovasi pendidikan.
            </p>
        </header>

        <!-- Banner Orientasi Seminar PPG -->
        <div class="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-emerald-500/10 border border-amber-200/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Diseminasi Praktik Baik & Refleksi Kritis
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-stone-900 font-serif">
                    Karya Inovasi Berbasis Masalah Riil & Refleksi Mendalam
                </h3>
                <p class="text-stone-700 text-sm md:text-base leading-relaxed text-left">
                    Mata kuliah Seminar PPG menguji kematangan calon guru dalam merefleksikan teori dan praktik secara jujur, merumuskan solusi teknologi yang menjawab kebutuhan sekolah (aplikasi <strong>SIPENSI</strong> & <strong>SIBENKA</strong>), serta memetakan komitmen pengabdian jangka panjang bagi pendidikan Indonesia.
                </p>
            </div>
            <div class="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <span class="px-4 py-2 bg-white text-amber-900 font-bold text-xs uppercase tracking-wider rounded-xl border border-amber-200 shadow-xs inline-block">
                    4 Pilar Lembar Kerja
                </span>
            </div>
        </div>

        <!-- Section 4 Pilar Lembar Kerja Seminar PPG -->
        <section class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-200">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                        Struktur 4 Lembar Kerja Seminar PPG
                    </h2>
                    <p class="text-stone-500 text-sm">
                        Rangkaian telaah komprehensif dari evaluasi jati diri hingga penciptaan karya inovasi di sekolah mitra.
                    </p>
                </div>
                <span class="text-xs font-semibold px-3 py-1 bg-stone-100 text-stone-700 rounded-full border border-stone-200 self-start sm:self-auto">
                    2 Dokumen Tuntas • 2 Dalam Proses
                </span>
            </div>

            <!-- Grid 4 Kartu Lembar Kerja -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="pillar in fourPillars" :key="pillar.id"
                    class="bg-white p-6 md:p-7 rounded-3xl border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between space-y-5 group">
                    
                    <div class="space-y-4">
                        <!-- Header Kartu -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3">
                                <div :class="['w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xs', pillar.iconBg]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" :d="pillar.iconSvg" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="text-xs font-bold text-stone-400 block uppercase tracking-wider">{{ pillar.code }}</span>
                                    <h3 class="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-serif leading-snug">
                                        {{ pillar.title }}
                                    </h3>
                                </div>
                            </div>
                            <span :class="['text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex-shrink-0 whitespace-nowrap', pillar.statusClass]">
                                {{ pillar.status }}
                            </span>
                        </div>

                        <!-- Subtitle & Ringkasan -->
                        <div>
                            <p class="text-xs font-semibold text-amber-800 mb-1.5">{{ pillar.subtitle }}</p>
                            <p class="text-stone-600 text-xs sm:text-sm leading-relaxed text-left">
                                {{ pillar.summary }}
                            </p>
                        </div>

                        <!-- Indikator Kunci -->
                        <div class="p-3.5 bg-stone-50 rounded-2xl border border-stone-100 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Fokus & Indikator Kunci:</span>
                            <div v-for="(pt, pIdx) in pillar.points" :key="pIdx" class="flex items-start gap-2 text-xs text-stone-600">
                                <span class="text-amber-600 font-bold mt-0.5">•</span>
                                <span class="leading-relaxed">{{ pt }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Action Footer -->
                    <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <!-- Tombol Pratinjau Cepat Ringkasan -->
                            <button @click="openPreview(pillar)"
                                type="button"
                                class="text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors inline-flex items-center gap-1">
                                <span>Ringkasan</span>
                            </button>

                            <!-- Tombol Pratinjau PDF Asli Jika Ada -->
                            <button v-if="pillar.hasAuthenticDoc && pillar.docFile"
                                @click="openPdfPreview(pillar.docFile)"
                                type="button"
                                class="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg border border-emerald-200 transition-colors inline-flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span>Lihat Berkas Asli</span>
                            </button>
                        </div>

                        <!-- Link Menuju Laman Detail Artefak -->
                        <NuxtLink :to="pillar.path"
                            class="px-3.5 py-1.5 bg-stone-900 text-white hover:bg-amber-700 text-xs font-semibold rounded-full transition-colors inline-flex items-center gap-1.5 shadow-xs ml-auto">
                            <span>Buka Artikel</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </section>

        <!-- Pusat Repositori Berkas Asli Seminar PPG (Evidence Vault) -->
        <section class="bg-stone-50/90 p-6 md:p-10 rounded-3xl border border-stone-200/90 space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div class="space-y-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                        Evidence Vault • Dokumen Asli Seminar PPG
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                        Pusat Repositori Lembar Kerja Otentik
                    </h2>
                    <p class="text-stone-600 text-sm max-w-2xl leading-relaxed">
                        Arsip dokumen resmi Lembar Kerja (LK) dan surat bukti diseminasi karya inovasi. Asesor dan dosen pembimbing dapat mempratinjau lembaran asli di layar atau mengunduh berkas fisik.
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="px-3.5 py-1.5 bg-white text-stone-700 font-semibold text-xs rounded-xl border border-stone-200 shadow-xs">
                        {{ seminarDocuments.length }} Berkas Terverifikasi
                    </span>
                </div>
            </div>

            <!-- Tab Filter Kategori Repositori -->
            <div class="flex items-center gap-1.5 p-1 bg-stone-100 rounded-2xl overflow-x-auto max-w-full">
                <button v-for="rcat in repoCategories" :key="rcat.id"
                    @click="repoFilter = rcat.id"
                    :class="[
                        'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap',
                        repoFilter === rcat.id
                            ? 'bg-white text-amber-900 shadow-xs'
                            : 'text-stone-600 hover:text-stone-900'
                    ]">
                    {{ rcat.label }}
                </button>
            </div>

            <!-- Grid Kartu Berkas Repositori -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(file, fIdx) in filteredDocuments" :key="fIdx"
                    class="bg-white p-5 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group">
                    <div class="space-y-2.5">
                        <div class="flex items-center justify-between gap-2">
                            <span :class="['text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border', getBadgeClass(file.type)]">
                                {{ file.type.toUpperCase() }}
                            </span>
                            <span class="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                                {{ file.badge }}
                            </span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-0.5">{{ file.category }}</span>
                            <h4 class="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                                {{ file.title }}
                            </h4>
                            <p class="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                                {{ file.description }}
                            </p>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                        <!-- Pratinjau Layar PDF -->
                        <button v-if="file.type === 'pdf'"
                            @click="openPdfPreview(file)"
                            type="button"
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>Pratinjau Layar</span>
                        </button>

                        <a :href="file.url"
                            download
                            target="_blank"
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-stone-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>Unduh ({{ file.size }})</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Catatan Berkas LK 2 & LK 3 Menyusul -->
            <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3.5 text-amber-900 text-xs sm:text-sm">
                <div class="w-5 h-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    i
                </div>
                <div class="space-y-1">
                    <p class="font-bold">Informasi Status Lembar Kerja 2 & Lembar Kerja 3:</p>
                    <p class="text-amber-800 leading-relaxed">
                        Dokumen asli untuk <strong>LK 2 (Refleksi Mata Kuliah Semester 1 & 2)</strong> dan <strong>LK 3 (Refleksi Program PPG Secara Keseluruhan)</strong> sedang dalam proses konsolidasi naratif bersama Dosen Pembimbing. Berkas PDF otentik akan langsung disematkan pada repositori ini setelah disahkan.
                    </p>
                </div>
            </div>
        </section>

        <!-- Modal Ringkasan Cepat LK -->
        <div v-if="previewModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
            <div class="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 space-y-5 border border-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md uppercase">{{ previewModal.code }}</span>
                        <span class="text-xs font-semibold text-stone-500">Ringkasan Lembar Kerja</span>
                    </div>
                    <button @click="closePreview" type="button" class="w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center">
                        ✕
                    </button>
                </div>

                <div class="space-y-2">
                    <h3 class="text-xl font-bold text-stone-900 font-serif">{{ previewModal.title }}</h3>
                    <p class="text-xs font-semibold text-amber-800">{{ previewModal.subtitle }}</p>
                    <p class="text-sm text-stone-600 leading-relaxed">{{ previewModal.summary }}</p>
                </div>

                <div class="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                    <span class="text-xs font-bold text-stone-700 block">Indikator yang Ditelaah:</span>
                    <div v-for="(pt, pIdx) in previewModal.points" :key="pIdx" class="flex items-start gap-2 text-xs text-stone-600">
                        <span class="text-amber-600 font-bold">•</span>
                        <span>{{ pt }}</span>
                    </div>
                </div>

                <div class="pt-2 flex items-center justify-between gap-3">
                    <button @click="closePreview" type="button" class="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors">
                        Tutup
                    </button>
                    <NuxtLink :to="previewModal.path" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs">
                        Buka Pembahasan Lengkap &rarr;
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- In-Browser PDF Preview Modal -->
        <PdfViewerModal
            :is-open="isPdfModalOpen"
            :title="activePdfTitle"
            :pdf-url="activePdfUrl"
            @close="closePdfPreview"
        />

    </div>
</template>
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

// Kategori Filter Dimensi
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

// Repositori Dokumen Otentik PPL II
const repoFilter = ref('all')

const repoCategories = [
    { id: 'all', label: 'Semua Berkas' },
    { id: 'Perencanaan', label: 'Perencanaan' },
    { id: 'Materi Ajar', label: 'Materi Ajar' },
    { id: 'Lembar Kerja', label: 'Lembar Kerja' },
    { id: 'Media Pembelajaran', label: 'Media Pembelajaran' },
    { id: 'Asesmen & Evaluasi', label: 'Asesmen & Evaluasi' },
    { id: 'Nonmengajar', label: 'Nonmengajar' }
]

const documentRepository = [
    {
        title: 'Rencana Pelaksanaan Dinamis (RPD): Algoritma & Pemrograman',
        type: 'image',
        url: '/dokumen/ppl-2/RPD Algoritma.png',
        size: '1.6 MB',
        badge: 'RPD Utama',
        category: 'Perencanaan',
        description: 'Desain alur capaian pembelajaran algoritma dan pemrograman terstruktur.'
    },
    {
        title: 'Rencana Pelaksanaan Dinamis (RPD): Sistem Komputer',
        type: 'image',
        url: '/dokumen/ppl-2/RPD Siskom.png',
        size: '1.5 MB',
        badge: 'RPD Penunjang',
        category: 'Perencanaan',
        description: 'Rancangan instruksional topik sistem komputer dan infrastruktur digital.'
    },
    {
        title: 'Buku Administrasi Pendidik TA 2026/2027 (Kelas X TM 1)',
        type: 'xlsx',
        url: '/dokumen/ppl-2/Administrasi Pendidik 2627 - Informatika - TM 1 - Yodi Irawan.xlsx',
        size: '1.8 MB',
        badge: 'Administrasi Guru',
        category: 'Perencanaan',
        description: 'Buku administrasi pendidik komprehensif: Prota, Promes, ATP, Modul Ajar, dan Nilai.'
    },
    {
        title: 'Bahan Bacaan Siswa: Algoritma dan Pemrograman',
        type: 'pdf',
        url: '/dokumen/ppl-2/Bahan Bacaan.pdf',
        size: '191 KB',
        badge: 'Bahan Ajar AP',
        category: 'Materi Ajar',
        description: 'Modul materi logika komputasi, diagram alir, dan pengantar algoritma pemrograman.'
    },
    {
        title: 'Bahan Bacaan Siswa: Analisis Data & Validasi Informasi',
        type: 'pdf',
        url: '/dokumen/ppl-2/Bahan Bacaan Analisis Data.pdf',
        size: '364 KB',
        badge: 'Bahan Ajar AD',
        category: 'Materi Ajar',
        description: 'Materi konsep pengolahan data, privasi data, dan teknik kurasi informasi.'
    },
    {
        title: 'Slide Presentasi: Algoritma & Pemrograman Teknik Mesin',
        type: 'pptx',
        url: '/dokumen/ppl-2/Algoritma & Pemrograman - Teknik Mesin.pptx',
        size: '696 KB',
        badge: 'Slide Presentasi',
        category: 'Media Pembelajaran',
        description: 'Media tayang konseptual konfirmasi materi logika algoritma untuk siswa Teknik Mesin.'
    },
    {
        title: 'Slide Presentasi: Pembersihan dan Validasi Data',
        type: 'pptx',
        url: '/dokumen/ppl-2/Pembersihan dan Validasi Data.pptx',
        size: '1.8 MB',
        badge: 'Slide Presentasi',
        category: 'Media Pembelajaran',
        description: 'Media presentasi interaktif materi pembersihan data kotor dan pengujian konsistensi.'
    },
    {
        title: 'Cheatsheet Pemrograman Python (Bagian 1)',
        type: 'pdf',
        url: '/dokumen/ppl-2/Cheatsheet Python 1.pdf',
        size: '29 KB',
        badge: 'Cheatsheet Python',
        category: 'Materi Ajar',
        description: 'Panduan sintaks cepat Python: variabel, tipe data, operator, dan percabangan.'
    },
    {
        title: 'Cheatsheet Pemrograman Python (Bagian 2)',
        type: 'pdf',
        url: '/dokumen/ppl-2/Cheatsheet Python 2.pdf',
        size: '22 KB',
        badge: 'Cheatsheet Python',
        category: 'Materi Ajar',
        description: 'Panduan struktur kontrol perulangan dan fungsi logika komputasi Python.'
    },
    {
        title: 'Modul Praktikum: Percabangan dan Perulangan',
        type: 'pdf',
        url: '/dokumen/ppl-2/Modul Praktikum Percabangan dan Perulangan.pdf',
        size: '33 KB',
        badge: 'Modul Praktik',
        category: 'Lembar Kerja',
        description: 'Modul panduan langkah demi langkah praktikum laboratorium komputer.'
    },
    {
        title: 'LKPD: Pembersihan dan Validasi Data (X TM)',
        type: 'docx',
        url: '/dokumen/ppl-2/LKPD Pembersihan dan Validasi Data.docx',
        size: '316 KB',
        badge: 'LKPD Siswa',
        category: 'Lembar Kerja',
        description: 'Lembar kerja peserta didik pengolahan data mentah kebiasaan belajar siswa.'
    },
    {
        title: 'Dataset Simulasi: Kebiasaan Belajar Siswa (Dirty Data)',
        type: 'xlsx',
        url: '/dokumen/ppl-2/Dataset Kotor Kebiasaan Belajar Siswa.xlsx',
        size: '15 KB',
        badge: 'Dataset Uji',
        category: 'Asesmen & Evaluasi',
        description: 'Dataset mentah dengan anomali data untuk bahan asesmen praktik siswa.'
    },
    {
        title: 'Kunci Guru: Standar Solusi Pembersihan Data',
        type: 'xlsx',
        url: '/dokumen/ppl-2/Kunci Guru Pembersihan Data.xlsx',
        size: '17 KB',
        badge: 'Kunci Jawaban',
        category: 'Asesmen & Evaluasi',
        description: 'Pedoman standar verifikasi dan kunci penilaian guru terhadap olah data siswa.'
    },
    {
        title: 'Rubrik Penilaian Kinerja Praktik Pembersihan Data',
        type: 'docx',
        url: '/dokumen/ppl-2/Rubrik_Penilaian_Praktik_Pembersihan_Data.docx',
        size: '314 KB',
        badge: 'Rubrik Asesmen',
        category: 'Asesmen & Evaluasi',
        description: 'Instrumen rubrik penskoran autentik kinerja praktik analisis data.'
    },
    {
        title: 'Jadwal Resmi Piket 5S Gerbang Sekolah',
        type: 'pdf',
        url: '/dokumen/ppl-2/Jadwal Piket 5S.pdf',
        size: '184 KB',
        badge: 'Piket 5S',
        category: 'Nonmengajar',
        description: 'Jadwal pembiasaan budaya Senyum, Sapa, Salam, Sopan, dan Santun di gerbang.'
    },
    {
        title: 'Jadwal Piket KBM Harian Mahasiswa PPL II',
        type: 'pdf',
        url: '/dokumen/ppl-2/Jadwal Piket KBM PPL 2 - PPG.pdf',
        size: '198 KB',
        badge: 'Piket KBM',
        category: 'Nonmengajar',
        description: 'Jadwal pelaksanaan piket pelayanan ketertiban kelas dan KBM harian sekolah.'
    },
    {
        title: 'Undangan Resmi BIMTEK Aplikasi SIBENKA',
        type: 'pdf',
        url: '/dokumen/ppl-2/Undangan BIMTEK SIBENKA.pdf',
        size: '321 KB',
        badge: 'Inovasi SIBENKA',
        category: 'Nonmengajar',
        description: 'Undangan resmi diseminasi aplikasi web Sistem Informasi Bengkel di SMKN 3 Yogyakarta.'
    },
    {
        title: 'Jadwal Jumat Krida Skagata 3 in 1 (Senam & Kebugaran)',
        type: 'pdf',
        url: '/dokumen/ppl-2/Jadwal Jumat Krida Skagata 3 in 1 - Skema 3 Kelas.pdf',
        size: '69 KB',
        badge: 'Jumat Krida',
        category: 'Nonmengajar',
        description: 'Skema pembagian kelas kegiatan senam bersama dan pembinaan kebugaran jasmani.'
    },
    {
        title: 'Jadwal Upacara, Perwalian, dan Senam Sehat TA 2026/2027',
        type: 'pdf',
        url: '/dokumen/ppl-2/Jadwal Upacara, Perwalian Wali Kelas, dan Senam Sehat Jumat Krida  - TA 2026-2027 - SMKN 3 Yogyakarta.pdf',
        size: '88 KB',
        badge: 'Agenda Sekolah',
        category: 'Nonmengajar',
        description: 'Agenda pendampingan upacara bendera dan perwalian kelas rutin SMKN 3 Yogyakarta.'
    },
    {
        title: 'Kalender Kegiatan Ketarunaan SMKN 3 Yogyakarta',
        type: 'pdf',
        url: '/dokumen/ppl-2/Kalender_Ketarunaan_SMKN3_Yogyakarta_2026_2027.pdf',
        size: '57 KB',
        badge: 'Budaya Ketarunaan',
        category: 'Nonmengajar',
        description: 'Agenda pembinaan karakter kedisiplinan dan sistem ketarunaan vokasi Skagata.'
    },
    {
        title: 'Struktur Jam Pelajaran & Jadwal KBM',
        type: 'image',
        url: '/dokumen/ppl-2/Jam Pelajaran.jpeg',
        size: '276 KB',
        badge: 'Jadwal KBM',
        category: 'Perencanaan',
        description: 'Struktur alokasi waktu dan jadwal tatap muka laboratorium komputer.'
    },
    {
        title: 'Pengaturan Jadwal Sistem Blok 1 Praktik',
        type: 'image',
        url: '/dokumen/ppl-2/Blok 1.jpeg',
        size: '204 KB',
        badge: 'Sistem Blok',
        category: 'Perencanaan',
        description: 'Dokumentasi pembagian sistem blok 1 pembelajaran kejuruan.'
    },
    {
        title: 'Pengaturan Jadwal Sistem Blok 2 Praktik',
        type: 'image',
        url: '/dokumen/ppl-2/Blok 2.jpeg',
        size: '198 KB',
        badge: 'Sistem Blok',
        category: 'Perencanaan',
        description: 'Dokumentasi pembagian sistem blok 2 pembelajaran kejuruan.'
    },
    {
        title: 'Peta Konsep & Mindmap Analisis Data',
        type: 'image',
        url: '/dokumen/ppl-2/Analisis Data - 2.png',
        size: '1.6 MB',
        badge: 'Mindmap AD',
        category: 'Media Pembelajaran',
        description: 'Media infografis peta konsep visual pengolahan data terstruktur.'
    }
]

const filteredRepository = computed(() => {
    if (repoFilter.value === 'all') return documentRepository
    return documentRepository.filter(d => d.category === repoFilter.value)
})

const getRepoBadgeClass = (type) => {
    switch (type) {
        case 'pdf': return 'bg-rose-50 text-rose-700 border-rose-200'
        case 'docx': return 'bg-blue-50 text-blue-700 border-blue-200'
        case 'pptx': return 'bg-orange-50 text-orange-700 border-orange-200'
        case 'xlsx': return 'bg-emerald-50 text-emerald-700 border-emerald-200'
        case 'image': return 'bg-indigo-50 text-indigo-700 border-indigo-200'
        case 'drive': return 'bg-amber-50 text-amber-800 border-amber-200'
        default: return 'bg-stone-50 text-stone-700 border-stone-200'
    }
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
            <div class="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-teal-700">Dimensi Analisis</span>
                <div class="text-3xl font-extrabold text-stone-900">6 Dimensi</div>
                <p class="text-xs text-stone-500">Standar resmi luaran PPG</p>
            </div>
            <div class="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-700">Fokus Mengajar</span>
                <div class="text-3xl font-extrabold text-stone-900">Mandiri</div>
                <p class="text-xs text-stone-500">Kelas X TM 1 & X TM 2</p>
            </div>
            <div class="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-700">Sekolah Mitra</span>
                <div class="text-3xl font-extrabold text-stone-900">SMKN 3</div>
                <p class="text-xs text-stone-500">Yogyakarta (Skagata)</p>
            </div>
            <div class="bg-white p-5 rounded-3xl border border-stone-200/80 shadow-xs space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-stone-600">Progres Portofolio</span>
                <div class="text-3xl font-extrabold text-stone-900">100%</div>
                <p class="text-xs text-stone-500">Seluruh telaah lengkap</p>
            </div>
        </section>

        <!-- Section: 6 Dimensi Analisis Praktik Mandiri -->
        <section class="space-y-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-stone-200/80">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-teal-700">Katalog Dimensi</span>
                    <h2 class="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                        6 Dimensi Analisis Praktik Mengajar Mandiri
                    </h2>
                    <p class="text-stone-500 text-sm mt-1">
                        Disusun berdasarkan pedoman resmi tugas akhir PPL II Direktorat PPG Kemendikdasmen.
                    </p>
                </div>

                <!-- Tab Filter Interaktif -->
                <div class="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-2xl overflow-x-auto self-start md:self-auto max-w-full">
                    <button v-for="cat in categories" :key="cat.id"
                        @click="activeFilter = cat.id"
                        :class="[
                            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap',
                            activeFilter === cat.id
                                ? 'bg-white text-teal-900 shadow-xs'
                                : 'text-stone-600 hover:text-stone-900'
                        ]">
                        {{ cat.label }}
                    </button>
                </div>
            </div>

            <!-- Grid 6 Dimensi Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="dim in filteredDimensions" :key="dim.id"
                    class="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group">

                    <div class="space-y-4">
                        <!-- Top Metadata -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <span class="w-8 h-8 rounded-2xl bg-stone-100 flex items-center justify-center font-serif font-bold text-sm text-stone-700">
                                    {{ dim.number }}
                                </span>
                                <span class="text-xs font-bold uppercase tracking-wider text-stone-500">
                                    {{ dim.categoryLabel }}
                                </span>
                            </div>

                            <span :class="['text-[11px] font-bold px-2.5 py-1 rounded-full border', dim.statusClass]">
                                {{ dim.status }}
                            </span>
                        </div>

                        <!-- Judul Dimensi -->
                        <div>
                            <h3 class="text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors font-serif leading-snug">
                                {{ dim.title }}
                            </h3>
                            <p class="text-xs text-stone-500 mt-1 font-medium">
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

        <!-- Pusat Unduhan & Repositori Perangkat Pembelajaran Otentik (Evidence Vault) -->
        <section class="bg-stone-50/90 p-6 md:p-10 rounded-3xl border border-stone-200/90 space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div class="space-y-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                        Evidence Vault • Perangkat Pembelajaran Otentik
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                        Pusat Repositori Berkas Asli PPL II
                    </h2>
                    <p class="text-stone-600 text-sm max-w-2xl leading-relaxed">
                        Koleksi lengkap dokumen fisik dan digital asli pelaksanaan PPL II di SMK Negeri 3 Yogyakarta. Asesor dan dosen pembimbing dapat mempratinjau langsung dokumen di layar atau mengunduh berkas master.
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="px-3.5 py-1.5 bg-white text-stone-700 font-semibold text-xs rounded-xl border border-stone-200 shadow-xs">
                        {{ documentRepository.length }} Berkas Otentik
                    </span>
                </div>
            </div>

            <!-- Google Drive Banner: Tugas Murid X TM -->
            <div class="p-6 md:p-8 bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl border border-amber-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                        </svg>
                    </div>
                    <div class="space-y-1">
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full uppercase tracking-wider">
                            Google Drive Siswa • Cloud Storage
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-stone-900 font-serif">
                            Repositori Portofolio & Tugas Murid Kelas X TM
                        </h3>
                        <p class="text-stone-600 text-xs md:text-sm leading-relaxed max-w-2xl">
                            Seluruh hasil pengerjaan tugas mandiri dan kelompok siswa (berukuran besar) tersimpan rapi di Google Drive resmi: lembar pengerjaan pembersihan data, file spreadsheet, notasi flowchart, dan program Python.
                        </p>
                    </div>
                </div>
                <a href="https://drive.google.com/drive/folders/1l3G0LNKkGxQ8UR0H7qK3E2_NA-FlDqSb?usp=sharing" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-5 py-3 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-sm transition-all group flex-shrink-0">
                    <span>Buka Folder Google Drive</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>

            <!-- Tab Filter Kategori Repositori -->
            <div class="flex items-center gap-1.5 p-1 bg-stone-100 rounded-2xl overflow-x-auto max-w-full">
                <button v-for="rcat in repoCategories" :key="rcat.id"
                    @click="repoFilter = rcat.id"
                    :class="[
                        'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap',
                        repoFilter === rcat.id
                            ? 'bg-white text-emerald-900 shadow-xs'
                            : 'text-stone-600 hover:text-stone-900'
                    ]">
                    {{ rcat.label }}
                </button>
            </div>

            <!-- Grid Kartu Berkas Repositori -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(file, fIdx) in filteredRepository" :key="fIdx"
                    class="bg-white p-5 rounded-2xl border border-stone-200 hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group">
                    <div class="space-y-2.5">
                        <div class="flex items-center justify-between gap-2">
                            <span :class="['text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border', getRepoBadgeClass(file.type)]">
                                {{ file.type.toUpperCase() }}
                            </span>
                            <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                                {{ file.badge }}
                            </span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-0.5">{{ file.category }}</span>
                            <h4 class="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                                {{ file.title }}
                            </h4>
                            <p class="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                                {{ file.description }}
                            </p>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                        <!-- Pratinjau Layar untuk PDF dan Gambar -->
                        <button v-if="file.type === 'pdf' || file.type === 'image'"
                            @click="openPdfPreview(file)"
                            type="button"
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>Pratinjau Layar</span>
                        </button>

                        <a :href="file.url"
                            :download="file.type !== 'drive' && file.type !== 'video' && file.type !== 'link'"
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

        <!-- Modal Pratinjau Dokumen PDF & Gambar -->
        <PdfViewerModal
            :is-open="isPdfModalOpen"
            :title="activePdfTitle"
            :file-url="activePdfUrl"
            @close="closePdfPreview"
        />

    </div>
</template>

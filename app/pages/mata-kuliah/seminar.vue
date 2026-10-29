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

// State untuk Galeri Inovasi SIPENSI SKAGATA
const activeSipensiIndex = ref(0)
const isImageModalOpen = ref(false)
const activeImageUrl = ref('')
const activeImageTitle = ref('')

const openImageZoom = (item) => {
    activeImageUrl.value = item.image
    activeImageTitle.value = item.title
    isImageModalOpen.value = true
}

const closeImageZoom = () => {
    isImageModalOpen.value = false
}

const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
        if (isImageModalOpen.value) {
            closeImageZoom()
        } else if (previewModal.value) {
            closePreview()
        }
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})

// Galeri Sorotan Antarmuka SIPENSI SKAGATA
const sipensiGallery = [
    {
        title: 'Presensi Harian Geofencing GPS',
        role: 'Mahasiswa Praktikan',
        caption: 'Batas masuk 07:15 WIB, batas pulang 15:00 WIB, dengan validasi radius ketat 100 meter dari perimeter SMKN 3 Yogyakarta.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 034335.png',
        badge: 'Geofence 100m'
    },
    {
        title: 'Presensi Piket KBM Swafoto WebRTC',
        role: 'Mahasiswa Praktikan',
        caption: 'Kamera swafoto waktu nyata dengan watermark tanggal dan jam otomatis, meniadakan celah kecurangan galeri ponsel.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 034407.png',
        badge: 'WebRTC Camera'
    },
    {
        title: 'Kalibrasi Peta Geofencing Leaflet OSM',
        role: 'Administrator Sistem',
        caption: 'Peta perimeter interaktif SMKN 3 Yogyakarta (-7.777128, 110.366523) dengan kontrol slider radius 10m-1000m.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 035523.png',
        badge: 'Leaflet.js Engine'
    },
    {
        title: 'Monitoring Mahasiswa Binaan Real-Time',
        role: 'Guru Pamong',
        caption: 'Dashboard pemantauan status kehadiran harian mahasiswa Informatika UNY oleh Guru Pamong Febriyana, S.T.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 034903.png',
        badge: 'Live Status'
    },
    {
        title: 'Rekapitulasi Bulanan & Ekspor Excel',
        role: 'Guru Pamong',
        caption: 'Akumulasi presensi bulanan 5 hari kerja efektif dengan persentase kehadiran dan ekspor spreadsheet .xlsx otomatis.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 035308.png',
        badge: 'Ekspor .xlsx'
    },
    {
        title: 'Pemetaan Pamong & Strict Data Isolation',
        role: 'Administrator Sistem',
        caption: 'Penegakan isolasi data ketat agar guru pamong hanya memantau mahasiswa dari jurusan binaannya masing-masing.',
        image: '/dokumen/seminar/ss/Screenshot 2026-10-30 035423.png',
        badge: 'Data Security'
    }
]

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
        subtitle: 'Telaah Pengalaman Belajar 10 Mata Kuliah Semester 1 & 2 Berbasis Dokumen Resmi',
        status: '10 Dokumen Asli Lengkap (Sem 1 & 2)',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/seminar/lk-2-refleksi-mata-kuliah',
        iconBg: 'bg-blue-50 text-blue-700',
        iconSvg: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
        summary: 'Rekonstruksi komprehensif pengalaman belajar 10 mata kuliah Semester 1 dan 2 (Filosofi Pendidikan, Pemahaman Siswa, Pembelajaran Inovatif, Deep Learning Dasar & Lanjutan/PMAL, Growth Mindset, PPL 1 Terbimbing, PSE & Well-Being, Kepemimpinan SIBENKA, dan PPL 2 Mandiri) didukung 11 berkas bukti otentik.',
        points: [
            'Semester 1: Filosofi Among KHD, profiling ZPD, TPACK & PjBL, Deep Learning, Growth Mindset, & PPL 1',
            'PMAL (Sem 2): Pembelajaran adaptif DUP, TaRL, CRT, Taksonomi SOLO, & TeFa lintas kejuruan mesin',
            'PSE (Sem 2): 5 Kompetensi CASEL, teknik STOP, Emotion Wheel, & regulasi gawai JEDA Digital',
            'Projek Kepemimpinan: Kepemimpinan transformasional, Inkuiri Apresiatif BAGJA, SMART Goals SIBENKA',
            'PPL Mandiri: Kemandirian KBM 4 siklus di X TM 1 & 2, gamifikasi Blockly/Wayground, & mitigasi lab'
        ],
        hasAuthenticDoc: true,
        docFile: {
            title: 'Lembar Kerja 2 (LK 2): Pembelajaran Mendalam dan Asesmen Lanjutan (Semester 2)',
            url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pembelajaran Mendalam dan Asesmen Lanjutan.pdf',
            size: '200 KB'
        }
    },
    {
        id: 'lk3',
        number: '03',
        code: 'LK 3',
        title: 'Refleksi Program PPG Menyeluruh',
        subtitle: 'Visi Pendidikan Indonesia, Standar Guru UU 14/2005, & 3 Langkah Karir',
        status: 'Dokumen Asli Tersedia',
        statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        path: '/artefak/seminar/lk-3-refleksi-program-ppg',
        iconBg: 'bg-purple-50 text-purple-700',
        iconSvg: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342',
        summary: 'Perenungan holistik sistem pendidikan Indonesia dari kacamata TI (pemanfaatan teknologi tepat guna & sinkronisasi kurikulum/daerah), penguasaan 4 kompetensi guru profesional UU 14/2005, serta 3 langkah strategis memulai karir guru (adaptasi, persiapan instrumen, dan kemerdekaan diri).',
        points: [
            'Visi Pendidikan: Pemanfaatan TI pedagogis tepat guna & sinkronisasi jenjang SMK-PT/daerah',
            'Standar UU 14/2005: Integrasi 4 kompetensi utama (Pedagogik, Kepribadian, Sosial, Profesional)',
            'Karakter Abad 21: Keterampilan 4C, berorientasi siswa, pembelajar berkelanjutan, & manajerial',
            '3 Langkah Karir Guru: Adaptasi intrinsik-ekstrinsik, kerja keras administrasi, & memerdekakan kebutuhan diri'
        ],
        hasAuthenticDoc: true,
        docFile: {
            title: 'Lembar Kerja 3 (LK 3): Refleksi Pengalaman Belajar Selama Mengikuti PPG',
            url: '/dokumen/seminar/LEMBAR KERJA 3 (LK 3).pdf',
            size: '202 KB'
        }
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
    { id: 'Laporan UAS', label: 'Laporan UAS & Esai' },
    { id: 'Refleksi Praktik', label: 'Refleksi Praktik & Jurnal' },
    { id: 'Sistem Informasi', label: 'Sistem & Inovasi' }
]

const seminarDocuments = [
    {
        title: 'Lembar Kerja 1 (LK 1): Identifikasi Diri',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 1 (LK 1).pdf',
        size: '180 KB',
        badge: 'Dokumen Resmi LK 1',
        category: 'Lembar Kerja',
        description: 'Naskah asli identifikasi diri, visi pendidikan Indonesia, filosofi guru "biji kopi", dan langkah manajemen diri.'
    },
    {
        title: 'LK 2: Filosofi Pendidikan dan Pendidikan Nilai',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Filosofi Pendidikan.pdf',
        size: '198 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi esensi pendidikan pembentuk watak, sistem Among KHD, dan pergeseran dari teacher-centered ke student-centered.'
    },
    {
        title: 'LK 2: Pemahaman Tentang Peserta Didik dan Pembelajaran',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - pemahaman peserta didik.pdf',
        size: '193 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi profiling karakteristik siswa, penolakan penyeragaman, teori Piaget & Vygotsky, ZPD, dan diferensiasi kasus Pak Anto.'
    },
    {
        title: 'LK 2: Pembelajaran Kreatif dan Inovatif',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pembelajaran Kreatif dan Inovatif.pdf',
        size: '194 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi integrasi TPACK, PjBL kontekstual vokasi, Flipped Classroom, gamifikasi Quizizz/Wayground, dan peer-tutoring.'
    },
    {
        title: 'LK 2: Pembelajaran Mendalam dan Asesmen Dasar',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pembelajaran Mendalam dan Asesmen Dasar.pdf',
        size: '198 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi prinsip deep learning (meaningful, mindful, joyful), Backward Design (UbD), dan asesmen autentik unjuk kerja DUDIKA.'
    },
    {
        title: 'LK 2: Pola Pikir Bertumbuh (Growth Mindset)',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pola Pikir Bertumbuh (Growth Mindset).pdf',
        size: '206 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi neuroplastisitas otak, Process-Praise, The Power of Yet, Klinik Kesalahan, dan Bug Bounty & Celebration di kelas koding.'
    },
    {
        title: 'LK 2: Praktik Pengalaman Lapangan (PPL) Terbimbing',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Praktik Pengalaman Lapangan (PPL) Terbimbing.pdf',
        size: '193 KB',
        badge: 'Resmi LK 2 (Sem 1)',
        category: 'Lembar Kerja',
        description: 'Refleksi menjembatani teori dan praktik di SMKN 3 Yogyakarta bersama GP Febriyana, S.T., fleksibilitas RPP Plan B, dan chemistry emosional.'
    },
    {
        title: 'LK 2: Pembelajaran Mendalam dan Asesmen Lanjutan',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pembelajaran Mendalam dan Asesmen Lanjutan.pdf',
        size: '200 KB',
        badge: 'Resmi LK 2 (Sem 2)',
        category: 'Lembar Kerja',
        description: 'Refleksi perancangan pembelajaran adaptif berbasis DUP, TaRL, dan CRT, Taksonomi SOLO, serta evaluasi formatif berkelanjutan.'
    },
    {
        title: 'LK 2: Pembelajaran Sosial Emosional',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Pembelajaran Sosial Emosional.pdf',
        size: '204 KB',
        badge: 'Resmi LK 2 (Sem 2)',
        category: 'Lembar Kerja',
        description: 'Refleksi 5 kompetensi CASEL, teknik STOP, Emotion Wheel, penundaan respons impulsif saat bug/error koding, dan school well-being.'
    },
    {
        title: 'LK 2: Projek Kepemimpinan',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2)- Proyek Kepemimpinan.pdf',
        size: '200 KB',
        badge: 'Resmi LK 2 (Sem 2)',
        category: 'Lembar Kerja',
        description: 'Refleksi kepemimpinan transformasional, Inkuiri Apresiatif BAGJA, SMART Goals, dan integrasi empati manajerial proyek SIBENKA.'
    },
    {
        title: 'LK 2: Praktik Pengalaman Lapangan (PPL) Mandiri',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 2 (LK 2) - Praktik Pengalaman Lapangan (PPL) Mandiri.pdf',
        size: '184 KB',
        badge: 'Resmi LK 2 (Sem 2)',
        category: 'Lembar Kerja',
        description: 'Refleksi puncak praktik mengajar mandiri di SMKN 3 Yogyakarta, integrasi konteks mesin, gamifikasi Blockly, & mitigasi kendala lab.'
    },
    {
        title: 'Lembar Kerja 3 (LK 3): Refleksi Pengalaman Belajar Mengikuti PPG',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 3 (LK 3).pdf',
        size: '202 KB',
        badge: 'Dokumen Resmi LK 3',
        category: 'Lembar Kerja',
        description: 'Naskah asli refleksi komprehensif sistem pendidikan Indonesia (TI & sinkronisasi jenjang/daerah), standar guru UU 14/2005, dan 3 langkah strategis karir guru.'
    },
    {
        title: 'Lembar Kerja 4 (LK 4): Penyusunan Desain Karya Inovatif',
        type: 'pdf',
        url: '/dokumen/seminar/LEMBAR KERJA 4 (LK 4).pdf',
        size: '224 KB',
        badge: 'Dokumen Resmi LK 4',
        category: 'Lembar Kerja',
        description: 'Naskah asli rancang bangun sistem presensi web SIPENSI dengan Geolocation dan Timestamp Swafoto di SMKN 3 Yogyakarta.'
    },
    {
        title: 'Laporan UAS PMAL: Merancang Pembelajaran Berbasis DUP, TaRL, dan CRT',
        type: 'pdf',
        url: '/dokumen/seminar/LAPORAN UJIAN AKHIR SEMESTER - PMAL.pdf',
        size: '480 KB',
        badge: 'Laporan UAS (38 Hlm)',
        category: 'Laporan UAS',
        description: 'Laporan lengkap perancangan 3 pertemuan materi Algoritma di X TM 1 SMKN 3 Yogyakarta memuat kisi-kisi asesmen kognitif & nonkognitif.'
    },
    {
        title: 'Laporan Proyek UAS PSE: JEDA Digital untuk School Well-Being',
        type: 'pdf',
        url: '/dokumen/seminar/LAPORAN UJIAN AKHIR SEMESTER - PSE.pdf',
        size: '665 KB',
        badge: 'Laporan UAS (35 Hlm)',
        category: 'Laporan UAS',
        description: 'Intervensi regulasi gawai di lab komputer berbasis 5 kompetensi CASEL, kartu skenario JEDA, rubrik evaluasi, & naskah poster.'
    },
    {
        title: 'Esai Akademik UAS: Filosofi Pendidikan dan Nilai Profesi Guru',
        type: 'pdf',
        url: '/dokumen/seminar/UAS.pdf',
        size: '151 KB',
        badge: 'Esai UAS Akademik',
        category: 'Laporan UAS',
        description: 'Esai reflektif komprehensif implementasi holistik filosofi pendidikan, analisis Sokola Rimba, growth mindset, dan kode etik guru.'
    },
    {
        title: 'Dokumen 2.E: Refleksi dan Tindak Lanjut Pembelajaran Mendalam',
        type: 'pdf',
        url: '/dokumen/seminar/2E.pdf',
        size: '127 KB',
        badge: 'Artefak 2.E PMAL',
        category: 'Refleksi Praktik',
        description: 'Laporan simulasi KBM di kelas X BP SMKN 3 Yogyakarta, evaluasi diri pendidik, dan strategi manajemen ketahanan emosional.'
    },
    {
        title: 'Dokumen 3.E: Penerapan Experiential Learning dan PSE di Sekolah',
        type: 'pdf',
        url: '/dokumen/seminar/3.E.pdf',
        size: '178 KB',
        badge: 'Artefak 3.E PSE',
        category: 'Refleksi Praktik',
        description: 'Revisi RPP materi Search Engine berorientasi Adiwiyata di kelas X BP, integrasi teknik STOP, Emotion Wheel, & rubrik evaluasi diri.'
    },
    {
        title: 'Tugas 8.1: Jurnal Refleksi Mingguan Proyek Kepemimpinan SIBENKA',
        type: 'pdf',
        url: '/dokumen/seminar/Tugas 8.1.pdf',
        size: '71 KB',
        badge: 'Jurnal SIBENKA (M1-M7)',
        category: 'Refleksi Praktik',
        description: 'Catatan refleksi mingguan peran Ketua Tim & Lead Developer dari inisiasi, koordinasi mitra, uji coba toolman, hingga evaluasi akhir.'
    },
    {
        title: 'LK 4 PPLM: Refleksi Praktik Mengajar Mandiri - Siklus 1',
        type: 'pdf',
        url: '/dokumen/seminar/LK4 Refleksi Praktek Mengajar Mandiri PPLM - siklus 1.pdf',
        size: '289 KB',
        badge: 'LK 4 PPLM Siklus 1',
        category: 'Refleksi Praktik',
        description: 'Refleksi apersepsi algoritma, penguatan Blockly, dan kuis Wayground (ttd Febriyana, S.T & Dr. Drs. Totok Sukardiyono, S.T., M.T.).'
    },
    {
        title: 'LK 4 PPLM: Refleksi Praktik Mengajar Mandiri - Siklus 2',
        type: 'pdf',
        url: '/dokumen/seminar/LK4 Refleksi Praktek Mengajar Mandiri PPLM - siklus 2.pdf',
        size: '288 KB',
        badge: 'LK 4 PPLM Siklus 2',
        category: 'Refleksi Praktik',
        description: 'Refleksi KBM IDE Python OnlineGDB, pemanfaatan cheatsheet koding, dan strategi pendampingan perbedaan kecepatan belajar siswa.'
    },
    {
        title: 'LK 4 PPLM: Refleksi Praktik Mengajar Mandiri - Siklus 3',
        type: 'pdf',
        url: '/dokumen/seminar/LK4 Refleksi Praktek Mengajar Mandiri PPLM - siklus 3.pdf',
        size: '288 KB',
        badge: 'LK 4 PPLM Siklus 3',
        category: 'Refleksi Praktik',
        description: 'Refleksi evaluasi konsep algoritma berbasis Blockly dan transisi analisis data yang dikaitkan dengan konteks Teknik Mesin.'
    },
    {
        title: 'LK 4 PPLM: Refleksi Praktik Mengajar Mandiri - Siklus 4',
        type: 'pdf',
        url: '/dokumen/seminar/LK4 Refleksi Praktek Mengajar Mandiri PPLM - siklus 4.pdf',
        size: '291 KB',
        badge: 'LK 4 PPLM Siklus 4',
        category: 'Refleksi Praktik',
        description: 'Refleksi presentasi kelompok, praktik Excel, dan mitigasi kendala lab komputer dengan pengalihan KBM ke kelas teori pada 5 Oktober.'
    },
    {
        title: 'Laporan Aksi Nyata: Refleksi Filosofi Pendidikan Indonesia',
        type: 'pdf',
        url: '/dokumen/seminar/4.E LAPORAN AKSI NYATA.pdf',
        size: '327 KB',
        badge: 'Aksi Nyata KHD',
        category: 'Refleksi Praktik',
        description: 'Rancangan 3 aksi nyata pembenahan diri, pembelajaran kontekstual berbasis potensi lokal, & literasi digital global Tri-Kon KHD.'
    },
    {
        title: 'Aplikasi Presensi Web SIPENSI SKAGATA (CodeIgniter 4)',
        type: 'link',
        url: 'https://github.com/yodi-dev/sipensi-skagata',
        badge: 'Inovasi SIPENSI',
        category: 'Sistem Informasi',
        description: 'Repositori resmi sistem presensi & piket KBM berbasis CodeIgniter 4, Geolocation GPS radius 100m, dan WebRTC kamera timestamp di SMKN 3 Yogyakarta.'
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
                <span class="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200 self-start sm:self-auto font-medium">
                    4 Pilar Lembar Kerja Tuntas 100% (LK 1 - LK 4 Lengkap)
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
                    <div class="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2.5">
                        <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <!-- Tombol Pratinjau Cepat Ringkasan -->
                            <button @click="openPreview(pillar)"
                                type="button"
                                class="text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-stone-50">
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

        <!-- Showcase Khusus Karya Inovasi Pendidikan: SIPENSI SKAGATA (CodeIgniter 4) -->
        <section class="bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-900 text-stone-100 p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-emerald-900/60 shadow-lg space-y-8 relative overflow-hidden">
            <!-- Decorative Background Element -->
            <div class="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Header Showcase -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-800 relative z-10">
                <div class="space-y-2 max-w-2xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 text-[11px] font-bold rounded-full uppercase tracking-wider">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Karya Inovasi Unggulan • Lembar Kerja 4
                    </div>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
                        SIPENSI SKAGATA (CodeIgniter 4)
                    </h2>
                    <p class="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        Sistem Informasi Presensi & Piket KBM berbasis web dengan verifikasi <strong>HTML5 Geolocation (Radius 100m)</strong>, <strong>Kamera Swafoto WebRTC Timestamp</strong>, dan <strong>Strict Data Isolation</strong> di SMK Negeri 3 Yogyakarta.
                    </p>
                </div>

                <div class="flex flex-wrap items-center gap-2.5 flex-shrink-0">
                    <a href="https://github.com/yodi-dev/sipensi-skagata" target="_blank" rel="noopener noreferrer"
                        class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-2 shadow-sm">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Source Code GitHub</span>
                    </a>
                    <NuxtLink to="/artefak/seminar/lk-4-karya-inovasi-pendidikan"
                        class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-semibold rounded-xl transition-all border border-stone-700 inline-flex items-center gap-1.5">
                        <span>Baca Naskah LK 4</span>
                        &rarr;
                    </NuxtLink>
                </div>
            </div>

            <!-- Fitur Utama & Highlight Metrik -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs relative z-10">
                <div class="p-3.5 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1">
                    <span class="text-[10px] uppercase font-mono text-emerald-400 block">Arsitektur MVC</span>
                    <span class="font-bold text-white text-sm">CodeIgniter 4 & MySQL</span>
                    <p class="text-[11px] text-stone-400">CSRF protection, routing bersih, dan database relasional aman.</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1">
                    <span class="text-[10px] uppercase font-mono text-emerald-400 block">Geofence Perimeter</span>
                    <span class="font-bold text-white text-sm">Radius 100m Presisi</span>
                    <p class="text-[11px] text-stone-400">Peta Leaflet OSM SMKN 3 Yogyakarta (-7.777128, 110.366523).</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1">
                    <span class="text-[10px] uppercase font-mono text-emerald-400 block">Anti-Kecurangan</span>
                    <span class="font-bold text-white text-sm">WebRTC Swafoto</span>
                    <p class="text-[11px] text-stone-400">Kamera langsung dengan watermark jam dan tanggal otomatis.</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-stone-800/60 border border-stone-700/60 space-y-1">
                    <span class="text-[10px] uppercase font-mono text-emerald-400 block">Pelaporan Instan</span>
                    <span class="font-bold text-white text-sm">Ekspor Excel .xlsx</span>
                    <p class="text-[11px] text-stone-400">Rekapitulasi bulanan otomatis sekali klik siap tanda tangan.</p>
                </div>
            </div>

            <!-- Galeri Interaktif Preview Antarmuka -->
            <div class="space-y-4 pt-2 relative z-10">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-emerald-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        Sorotan Tangkapan Layar Sistem (Klik untuk Memperbesar)
                    </span>
                    <span class="text-[11px] text-stone-400">
                        Menampilkan {{ sipensiGallery.length }} dari 20 Dokumen Antarmuka Otentik
                    </span>
                </div>

                <!-- Showcase Preview Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="(item, idx) in sipensiGallery" :key="idx"
                        @click="openImageZoom(item)"
                        class="bg-stone-800/80 hover:bg-stone-800 p-3.5 rounded-2xl border border-stone-700 hover:border-emerald-500/60 transition-all cursor-pointer group flex flex-col justify-between space-y-3">
                        <div class="overflow-hidden rounded-xl border border-stone-700/80 bg-stone-950 aspect-video relative">
                            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                            <div class="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors"></div>
                            <span class="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-stone-900/90 text-emerald-400 text-[10px] font-bold border border-stone-700">
                                {{ item.badge }}
                            </span>
                        </div>
                        <div class="space-y-1">
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">{{ item.role }}</span>
                                <span class="text-[10px] text-stone-500 group-hover:text-stone-300 transition-colors">Perbesar &rarr;</span>
                            </div>
                            <h4 class="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1 font-serif">
                                {{ item.title }}
                            </h4>
                            <p class="text-[11px] text-stone-400 leading-relaxed line-clamp-2">
                                {{ item.caption }}
                            </p>
                        </div>
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
                            :download="file.type !== 'link'"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-stone-500">
                                <path v-if="file.type === 'link'" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>{{ file.type === 'link' ? 'Buka Aplikasi' : `Unduh (${file.size || 'Berkas'})` }}</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Catatan Berkas LK 2 & LK 3 -->
            <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-3.5 text-emerald-950 text-xs sm:text-sm">
                <div class="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                </div>
                <div class="space-y-1">
                    <p class="font-bold text-emerald-900">Kelengkapan 100% Repositori Seminar PPG:</p>
                    <p class="text-emerald-800 leading-relaxed">
                        Seluruh dokumen otentik untuk <strong>4 Pilar Lembar Kerja Seminar PPG (LK 1, LK 2 [10 Dokumen], LK 3, dan LK 4)</strong> telah 100% lengkap dan terverifikasi di repositori bersama 11 berkas bukti dukung otentik (total 26 berkas fisik resmi). E-Portfolio diseminasi akademik mata kuliah Seminar PPG kini telah paripurna dan siap diuji.
                    </p>
                </div>
            </div>
        </section>

        <!-- Modal Ringkasan Cepat LK -->
        <div v-if="previewModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn"
            @click.self="closePreview">
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
            :file-url="activePdfUrl"
            @close="closePdfPreview"
        />

        <!-- Image Zoom Modal SIPENSI SKAGATA -->
        <div v-if="isImageModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn"
            @click.self="closeImageZoom">
            <div class="bg-stone-900 border border-stone-800 rounded-3xl max-w-4xl w-full p-4 space-y-3 relative shadow-2xl overflow-hidden">
                <div class="flex items-center justify-between text-stone-200 px-2 pt-1">
                    <span class="text-xs font-bold font-mono tracking-wider text-emerald-400">{{ activeImageTitle }}</span>
                    <button @click="closeImageZoom" type="button" class="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                        ✕
                    </button>
                </div>
                <div class="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center max-h-[80vh]">
                    <img :src="activeImageUrl" :alt="activeImageTitle" class="w-full h-auto max-h-[78vh] object-contain" />
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
useSeoMeta({
    title: 'Dashboard Portofolio',
    description: 'Dashboard resmi E-Portfolio PPG Calon Guru Yodi Irawan. Ikhtisar capaian PPL I, persiapan PPL II, dan Seminar PPG.'
})

const quickModules = [
    {
        title: 'Profil Pendidik',
        desc: 'Latar belakang kultural Melayu, identitas, dan sinergi keahlian Web Developer.',
        to: '/profil',
        badge: 'Identitas Diri',
        color: 'emerald',
        icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
    },
    {
        title: 'Mata Kuliah PPG',
        desc: 'Pusat kurikulum terpadu: PPL I (Terbimbing), PPL II (Mandiri), dan Seminar PPG.',
        to: '/mata-kuliah',
        badge: 'Kurikulum',
        color: 'teal',
        icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
    },
    {
        title: 'Artefak Pembelajaran',
        desc: 'Katalog 13 modul ajar, 6 dimensi analisis PPL II, dan LK 1–4 Seminar PPG.',
        to: '/artefak',
        badge: '13 Dokumen',
        color: 'emerald',
        icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
    },
    {
        title: 'Lembar Penilaian Resmi',
        desc: 'Rekapitulasi otentik Lampiran 7 (Skor 3.4) dan Lampiran 8 (Skor 3.9).',
        to: '/penilaian',
        badge: 'Asesmen GP',
        color: 'emerald',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z'
    },
    {
        title: 'Visi Guru Profesional',
        desc: 'Komitmen filosofis, 3 pilar implementasi, dan RTL Pasca-PPG.',
        to: '/visi',
        badge: 'Filosofi',
        color: 'stone',
        icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
    },
    {
        title: 'Refleksi Akhir & Filosofi',
        desc: 'Evaluasi kritis PPL Terbimbing berbasis ZPD Vygotsky & Ki Hadjar Dewantara.',
        to: '/refleksi',
        badge: 'Bagian 2',
        color: 'amber',
        icon: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18w4.5Z'
    }
]
</script>

<template>
    <div class="space-y-16 animate-fadeIn">

        <!-- Hero Dashboard -->
        <section
            class="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-stone-200/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
            <div
                class="absolute -right-12 -top-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none">
            </div>

            <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                <div
                    class="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white shadow-md overflow-hidden flex-shrink-0 group">
                    <img src="/pp.png" alt="Foto Yodi Irawan"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div class="flex-1 text-center md:text-left space-y-4">
                    <div class="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                        <div
                            class="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            E-Portfolio Terpadu • PPG Calon Guru
                        </div>
                        <div
                            class="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border border-stone-200/80 rounded-full text-xs text-stone-700 font-medium">
                            <img src="/logo-uny.svg" alt="Logo UNY" class="w-4 h-4 object-contain" />
                            <img src="/logo-kemendikbud.svg" alt="Logo Kemendikdasmen" class="w-4 h-4 object-contain" />
                            <span>LPTK UNY</span>
                        </div>
                    </div>
                    <h1 class="text-3xl md:text-5xl font-bold text-stone-900 leading-tight font-serif">
                        Dashboard Akademik & Praktik Lapangan
                    </h1>
                    <p class="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl">
                        Selamat datang di portal e-portfolio <strong>Yodi Irawan</strong>. Menghimpun seluruh luaran
                        terpadu mata kuliah <strong>PPL I</strong>, <strong>PPL II</strong>, dan <strong>Seminar
                            PPG</strong> secara terstruktur dan transparan.
                    </p>
                    <div class="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                        <NuxtLink to="/mata-kuliah"
                            class="px-5 py-2.5 bg-stone-800 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-sm inline-flex items-center gap-2">
                            Pusat Mata Kuliah
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/profil"
                            class="px-5 py-2.5 bg-white text-stone-700 border border-stone-200 text-sm font-semibold rounded-full hover:bg-stone-50 hover:text-emerald-700 transition-colors shadow-sm">
                            Profil Pendidik
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- KPI & Capaian Metrik PPL -->
        <section class="space-y-4">
            <h2 class="text-xs uppercase tracking-widest text-stone-500 font-bold text-center md:text-left">
                Ringkasan Capaian & Legalitas Asesmen
            </h2>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-stone-500">Total Artefak</span>
                    <div class="text-3xl md:text-4xl font-extrabold text-stone-900 font-serif">
                        13</div>
                    <p class="text-stone-500 text-xs leading-relaxed">PPL I (3), PPL II (6), Seminar (4)</p>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-emerald-700">Nilai Perangkat
                        (L7)</span>
                    <div class="text-3xl md:text-4xl font-extrabold text-emerald-700 font-serif">3.4 <span class="text-xs font-normal text-stone-400">/
                            4.0</span></div>
                    <p class="text-stone-500 text-xs leading-relaxed">Skor total 68 (Kategori Amat Baik)</p>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-teal-700">Nilai Praktik (L8)</span>
                    <div class="text-3xl md:text-4xl font-extrabold text-teal-700 font-serif">
                        3.9 <span class="text-xs font-normal text-stone-400">/ 4.0</span></div>
                    <p class="text-stone-500 text-xs leading-relaxed">Skor total 78 (Kategori Istimewa)</p>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm space-y-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-amber-700">Status PPL I</span>
                    <div class="text-2xl md:text-3xl font-extrabold text-stone-900 font-serif">
                        Tuntas</div>
                    <p class="text-stone-500 text-xs leading-relaxed">Evaluasi Guru Pamong: Febriyana, S.T.</p>
                </div>
            </div>
        </section>

        <!-- Peta Progres Mata Kuliah PPG (Course Matrix) -->
        <section class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-stone-900 font-serif">
                        Progres Kurikulum & Mata Kuliah PPG
                    </h2>
                    <p class="text-stone-500 text-sm">Status penyelesaian luaran tugas PPL I, PPL II, dan Seminar PPG.
                    </p>
                </div>
                <NuxtLink to="/mata-kuliah"
                    class="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:underline hidden sm:block">
                    Lihat Semua Mata Kuliah &rarr;
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- PPL 1 -->
                <NuxtLink to="/mata-kuliah/ppl-1"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-stone-500 uppercase">Mata Kuliah 1</span>
                            <span
                                class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Selesai
                                (Tuntas)</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-serif">
                            PPL I: Praktik Terbimbing
                        </h3>
                        <p class="text-stone-600 text-sm leading-relaxed">
                            3 siklus modul ajar selesai. Nilai Lampiran 7 (3.4) & Lampiran 8 (3.9) dari Guru Pamong
                            Febriyana, S.T.
                        </p>
                    </div>
                    <div
                        class="pt-4 mt-4 border-t border-stone-50 text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Buka Portofolio PPL I &rarr;
                    </div>
                </NuxtLink>

                <!-- PPL 2 -->
                <NuxtLink to="/mata-kuliah/ppl-2"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-stone-500 uppercase">Mata Kuliah 2</span>
                            <span class="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">6 Dimensi Lengkap</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-teal-700 transition-colors font-serif">
                            PPL II: Praktik Mandiri
                        </h3>
                        <p class="text-stone-600 text-sm leading-relaxed">
                            Praktik mandiri kelas X TM 1 & 2 SMKN 3 Yogyakarta, telaah 6 dimensi, integrasi Wayground & OnlineGDB, serta aplikasi SIBENKA & SIPENSI.
                        </p>
                    </div>
                    <div
                        class="pt-4 mt-4 border-t border-stone-50 text-xs font-bold text-teal-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Buka Portofolio PPL II &rarr;
                    </div>
                </NuxtLink>

                <!-- Seminar PPG -->
                <NuxtLink to="/mata-kuliah/seminar"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-stone-500 uppercase">Mata Kuliah 3</span>
                            <span
                                class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">4 Lembar Kerja</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors font-serif">
                            Seminar PPG
                        </h3>
                        <p class="text-stone-600 text-sm leading-relaxed">
                            Refleksi LK 1 (Identifikasi Diri), 6 berkas LK 2 (Semester 1), dan Desain Inovasi SIPENSI (LK 4) lengkap berkas fisik otentik.
                        </p>
                    </div>
                    <div
                        class="pt-4 mt-4 border-t border-stone-50 text-xs font-bold text-amber-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Buka Portofolio Seminar &rarr;
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- Modul Navigasi Utama Portofolio -->
        <section class="space-y-6">
            <div class="text-center md:text-left space-y-1">
                <h2 class="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                    Pusat Modul Portofolio
                </h2>
                <p class="text-stone-500 text-sm">Pilih modul untuk menelaah dokumen dan laporan pembelajaran secara
                    terperinci.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtLink v-for="mod in quickModules" :key="mod.to" :to="mod.to"
                    class="bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <div
                                class="p-3 bg-stone-50 group-hover:bg-emerald-50 rounded-2xl text-stone-600 group-hover:text-emerald-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="mod.icon" />
                                </svg>
                            </div>
                            <span
                                class="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-50 px-2.5 py-1 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                                {{ mod.badge }}
                            </span>
                        </div>
                        <h3 class="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-serif">
                            {{ mod.title }}
                        </h3>
                        <p class="text-stone-600 text-sm leading-relaxed">
                            {{ mod.desc }}
                        </p>
                    </div>

                    <div
                        class="pt-6 mt-4 border-t border-stone-50 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 group-hover:gap-3 transition-all">
                        Akses Modul
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- Jejak Langkah Pembelajaran Siklus Highlight -->
        <HomeHighlight />

    </div>
</template>
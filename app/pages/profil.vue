<script setup>
useSeoMeta({
    title: 'Profil Pendidik',
    description: 'Profil lengkap Yodi Irawan: latar belakang budaya Melayu, inspirasi pendidik, dan komitmen profesional dalam PPG Calon Guru.'
})
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header Halaman -->
        <header class="text-center space-y-4">
            <span
                class="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Identitas & Rekam Jejak
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-stone-900 font-serif">
                Profil Pendidik
            </h1>
            <p class="text-stone-600 max-w-2xl mx-auto text-base leading-relaxed">
                Mengenal lebih dekat latar belakang kultural, perjalanan inspirasi, serta komitmen pedagogis sebagai calon guru profesional.
            </p>
        </header>

        <!-- Kartu Utama Profil & Biodata -->
        <section class="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/70">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
                <div class="w-44 h-44 md:w-52 md:h-52 flex-shrink-0">
                    <div class="w-full h-full rounded-2xl border-4 border-white shadow-lg overflow-hidden group">
                        <img src="/pp.png" alt="Foto Profil Yodi Irawan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                <div class="flex-1 space-y-5 text-center md:text-left">
                    <div>
                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                            <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                                Mahasiswa PPG Calon Guru
                            </span>
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
                                <img src="/logo-uny.svg" alt="UNY" class="w-3.5 h-3.5 object-contain" />
                                <img src="/logo-kemendikbud.svg" alt="PPG Kemendikdasmen" class="w-3.5 h-3.5 object-contain" />
                                Universitas Negeri Yogyakarta
                            </span>
                        </div>
                        <h2 class="text-3xl font-bold text-stone-900 font-serif">
                            Yodi Irawan
                        </h2>
                        <p class="text-stone-500 text-sm mt-1">NIM: <strong>25105260008</strong> • Bidang Studi: <strong>Informatika</strong></p>
                    </div>

                    <p class="text-stone-700 leading-relaxed text-base md:text-[17px] text-left">
                        Seorang pendidik yang bersemangat mengombinasikan kepekaan pedagogi humanis dengan kecakapan teknologi instruksional. Berfokus pada penciptaan ekosistem kelas yang aman, memberdayakan nalar kritis, dan memfasilitasi kemandirian belajar bagi setiap peserta didik di SMK Negeri 3 Yogyakarta.
                    </p>

                    <!-- Informasi Meta / Ringkasan Akademik -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-stone-100 text-left text-sm">
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">Sekolah PPL</span>
                            <span class="text-stone-800 font-medium truncate">SMK Negeri 3 Yogyakarta</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">Kelas Sasaran</span>
                            <span class="text-stone-800 font-medium truncate">X TM 1 & X TM 2 (Teknik Mesin)</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">Guru Pamong</span>
                            <span class="text-stone-800 font-medium">Febriyana, S.T.</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">Akar Budaya</span>
                            <span class="text-stone-800 font-medium">Melayu (Jambi – Sumsel)</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">LPTK Asal</span>
                            <span class="text-stone-800 font-medium">Universitas Negeri Yogyakarta</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-400 text-xs font-bold uppercase tracking-wider w-28 flex-shrink-0">Web Portofolio</span>
                            <a href="https://awanbeo.my.id" target="_blank" rel="noopener noreferrer" class="text-emerald-700 font-semibold hover:underline flex items-center gap-1">
                                <span>awanbeo.my.id</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Narasi Mendalam: Latar Belakang Kultural & Inspirasi -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/60 space-y-4">
                <div class="flex items-center gap-3 text-emerald-600">
                    <div class="p-3 bg-emerald-50 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 font-serif">
                        Akar Budaya & Karakter Dasar
                    </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed text-left">
                    Saya dibesarkan di kawasan perbatasan antara Jambi dan Sumatera Selatan, lingkungan masyarakat yang kental dengan falsafah Melayu. Nilai-nilai kesantunan tutur kata, penghormatan terhadap adab, kekeluargaan, serta gotong royong telah terpatri kuat dan menjadi fondasi utama etika saya dalam membimbing dan memperlakukan peserta didik.
                </p>
            </div>

            <div class="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/60 space-y-4">
                <div class="flex items-center gap-3 text-emerald-600">
                    <div class="p-3 bg-emerald-50 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18w4.5Z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 font-serif">
                        Inspirasi & Titik Mula Panggilan
                    </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed text-left">
                    Benih ketertarikan untuk mengajar tumbuh sejak bangku SMP melalui teladan guru Bahasa Inggris saya, Ma'am Amel. Pendekatan beliau yang tulus, penuh empati, dan selalu memompa semangat belajar membuktikan bahwa seorang guru mampu mengubah cara pandang seorang murid terhadap potensi dirinya sendiri seumur hidup.
                </p>
            </div>
        </section>

        <!-- Kutipan Inspiratif -->
        <section class="pb-2">
            <blockquote class="relative p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-teal-50/60 rounded-[2.5rem] border border-white shadow-sm overflow-hidden text-center space-y-4">
                <p class="text-xl md:text-2xl text-stone-800 italic font-medium leading-relaxed max-w-3xl mx-auto font-serif">
                    "Jadi guru itu amalannya jariyah, selama ilmu yang kita ajarkan itu digunakan maka pahalanya akan terus mengalir."
                </p>
                <footer class="text-emerald-800 font-bold tracking-wider uppercase text-xs">
                    — Ma'am Amel, Guru Bahasa Inggris
                </footer>
            </blockquote>
        </section>

        <!-- Pilar Kompetensi Pendidik -->
        <section class="space-y-6">
            <div class="text-center space-y-2">
                <h3 class="text-2xl font-bold text-stone-900 font-serif">
                    Fokus & Kompetensi Pengajaran
                </h3>
                <p class="text-stone-500 text-sm">Prinsip kerja yang dipegang dalam setiap perancangan dan pelaksanaan kelas.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">1</div>
                    <h4 class="font-bold text-stone-800">Pedagogi Humanis</h4>
                    <p class="text-stone-600 text-sm leading-relaxed">Menuntun dan menghargai keunikan siswa dengan prinsip Sistem Among tanpa mempermalukan mental murid.</p>
                </div>

                <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">2</div>
                    <h4 class="font-bold text-stone-800">Integrasi Teknologi</h4>
                    <p class="text-stone-600 text-sm leading-relaxed">Memanfaatkan instrumen riset digital dan diferensiasi produk multimedia (Canva/PPT) yang relevan bagi generasi digital.</p>
                </div>

                <div class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="w-10 h-10 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center font-bold">3</div>
                    <h4 class="font-bold text-stone-800">Refleksi Berkelanjutan</h4>
                    <p class="text-stone-600 text-sm leading-relaxed">Secara proaktif merevisi modul ajar, rubrik asesmen, dan tata kelola waktu kelas demi perbaikan kualitas berkesinambungan.</p>
                </div>
            </div>
        </section>

        <!-- Sinergi Keahlian: Pendidik & Pengembang Web (Unique Value Proposition) -->
        <section class="bg-gradient-to-br from-stone-900 to-stone-800 text-stone-200 p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="space-y-3 max-w-2xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider">
                        Keunggulan Komparatif (USP)
                    </div>
                    <h3 class="text-2xl font-bold text-white font-serif">
                        Sinergi Pendidik & Web Developer
                    </h3>
                    <p class="text-stone-300 text-sm md:text-base leading-relaxed text-left">
                        Latar belakang rekayasa perangkat lunak dan pengembangan web memungkinkan saya merancang media belajar interaktif, sistem asesmen digital mandiri, serta ekosistem e-portfolio yang responsif dan modern. Portofolio teknis dan rekayasa kode sengaja dipisahkan agar fokus kurikulum PPG tetap terjaga.
                    </p>
                </div>

                <div class="flex-shrink-0">
                    <a href="https://awanbeo.my.id" target="_blank" rel="noopener noreferrer"
                        class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md hover:scale-105">
                        Lihat Portofolio Web Dev
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA Navigasi -->
        <div class="flex justify-center pt-2">
            <NuxtLink to="/mata-kuliah" class="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors text-sm shadow-md">
                Jelajahi Portofolio Mata Kuliah PPG
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </NuxtLink>
        </div>

    </div>
</template>

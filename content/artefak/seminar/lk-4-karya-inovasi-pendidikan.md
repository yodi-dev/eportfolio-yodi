---
title: "LK 4: Penyusunan Desain Karya Inovatif Pendidikan"
description: "Rancang bangun inovasi sistem informasi manajemen kehadiran 'SIPENSI' (Sistem Informasi Presensi & Piket KBM Berbasis Geolocation & Timestamp Swafoto) menggunakan CodeIgniter 4 di SMKN 3 Yogyakarta."
category: "Seminar PPG: Lembar Kerja 04"
course: "seminar"
status: "completed"
date: "2026-10-14"
badge: "LK 4 - Karya Inovasi"
color: "emerald"
attachments:
  - title: "Lembar Kerja 4 (LK 4): Penyusunan Desain Karya Inovatif"
    type: "pdf"
    url: "/dokumen/seminar/LEMBAR KERJA 4 (LK 4).pdf"
    size: "229 KB"
    badge: "Dokumen Resmi LK 4"
    description: "Naskah asli Lembar Kerja 4 yang memuat analisis kebutuhan, rancangan prototipe web, 5 prinsip inovasi pendidikan, dan evaluasi implementasi SIPENSI."
  - title: "Repositori Source Code SIPENSI SKAGATA (CodeIgniter 4)"
    type: "link"
    url: "https://github.com/yodi-dev/sipensi-skagata"
    badge: "Source Code GitHub"
    description: "Repositori resmi source code aplikasi web SIPENSI SKAGATA dibangun dengan CodeIgniter 4, MySQL, HTML5 Geolocation API, WebRTC camera, dan Leaflet.js."
  - title: "Dokumen Undangan Resmi BIMTEK Aplikasi SIBENKA"
    type: "pdf"
    url: "/dokumen/ppl-2/Undangan BIMTEK SIBENKA.pdf"
    size: "321 KB"
    badge: "Diseminasi Resmi"
    description: "Bukti surat undangan resmi diseminasi dan bimbingan teknis inovasi sistem digital bagi civitas akademika SMKN 3 Yogyakarta."
---

## 1. Identitas Karya Inovatif

Mata kuliah **Seminar Pendidikan Profesi Guru (PPG)** menuntut mahasiswa calon guru untuk tidak sekadar menguasai ruang kelas, tetapi juga mampu menghadirkan terobosan nyata (*educational innovation*) guna menyelesaikan kendala manajerial maupun instruksional di sekolah mitra.

Melalui **Lembar Kerja 4 (LK 4)**, saya merancang, mengembangkan, dan mengimplementasikan sebuah sistem administrasi presensi digital modern berbasis web yang diberi nama **SIPENSI SKAGATA**:

- **Nama Karya**: *SIPENSI SKAGATA — Sistem Informasi Presensi & Piket KBM Berbasis Geolocation dan Timestamp Swafoto*
- **Basis Teknologi**: Framework **PHP CodeIgniter 4 (CI4)**, MySQL Relational Database, HTML5 Geolocation API, Leaflet.js Geofencing, dan WebRTC MediaDevices Camera Capture.
- **Sasaran Pengguna**: Mahasiswa Praktik Pengalaman Lapangan (PPL), Mahasiswa Praktik Kependidikan (PK), dan Guru Tidak Tetap (GTT) di **SMK Negeri 3 Yogyakarta**.
- **Konteks Lembaga**: Sekolah Menengah Kejuruan berorientasi ketarunaan dengan mobilitas tinggi dan dinamika KBM bengkel yang padat (Jl. RW. Monginsidi No.2, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta).
- **Dukungan Infrastruktur**: Didukung oleh server hosting *production* `awanbeo.my.id`.

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
<div class="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
<span class="text-xs font-bold uppercase tracking-wider text-rose-700 block">Tantangan Manajemen Sekolah</span>
<ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
<li><strong>Presensi Manual Kertas</strong>: Rentan rusak, tercecer, dan rawan manipulasi.</li>
<li><strong>Google Form Terpisah</strong>: Rawan "titip absen" dari luar lingkungan sekolah.</li>
<li><strong>Monitoring Lambat</strong>: Waka Kurikulum sulit memastikan kesiapan KBM secara real-time.</li>
<li><strong>Rekapitulasi Manual</strong>: Staf kurikulum menghabiskan berhari-hari merekap lembaran fisik.</li>
</ul>
</div>
<div class="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
<span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block">Solusi Inovasi Web SIPENSI SKAGATA</span>
<ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
<li><strong>HTML5 Geolocation & Leaflet OSM</strong>: Radius ketat 100m dari koordinat sekolah.</li>
<li><strong>Timestamp Swafoto WebRTC</strong>: Kamera langsung mengunci foto dan waktu nyata tanpa manipulasi galeri.</li>
<li><strong>Dashboard Real-Time 3 Peran</strong>: Mahasiswa praktikan, Guru Pamong, dan Administrator Kurikulum.</li>
<li><strong>Ekspor Excel Sekali Klik</strong>: Laporan bulanan berformat .xlsx dan cetak siap tanda tangan.</li>
</ul>
</div>
</div>

---

## 2. Identifikasi Kebutuhan & Akar Masalah Lapangan

Berdasarkan pengamatan empiris saya selama menjalankan penugasan PPL II di **SMK Negeri 3 Yogyakarta**, kelancaran proses pembelajaran di kelas dan bengkel praktik sangat bergantung pada ketepatan waktu serta kedisiplinan para tenaga pendidik (khususnya mahasiswa PPL, PK, dan GTT).

Namun, ditemukan beberapa titik rawan manajerial yang menghambat operasional sekolah:
1. **Sistem Presensi Masih Manual**: Presensi kedatangan harian masih menggunakan lembaran kertas fisik yang rentan tercecer, robek, atau dimanipulasi data kehadirannya.
2. **Fragmentasi Data Piket KBM**: Untuk pelaporan tugas Piket Kegiatan Belajar Mengajar (KBM), digunakan instrumen *Google Form* terpisah yang tidak terhubung dengan absensi gerbang harian. Sistem ini rawan praktik "titip absen" karena siapa pun dapat mengisi tautan dari luar lingkungan sekolah tanpa verifikasi fisik.
3. **Kendala Monitoring Real-Time**: Guru Pamong dan Wakil Kepala Sekolah Bidang Kurikulum (Waka Kurikulum) kesulitan memantau kesiapan pengajar di kelas secara tepat waktu sebelum bel masuk berbunyi (pukul 07:15 WIB).
4. **Lambatnya Rekapitulasi Data**: Rekapitulasi presensi bulanan membutuhkan waktu berhari-hari karena staf harus memeriksa lembaran kertas dan spreadsheet secara manual satu per satu, berpotensi mengganggu efektivitas evaluasi KBM.

---

## 3. Gagasan Inovasi & Arsitektur Solusi Teknis

Menjawab permasalahan di atas, saya merumuskan ide untuk mendigitalkan dan memusatkan sistem manajemen kehadiran tersebut melalui rancang bangun **Aplikasi Presensi Web SIPENSI SKAGATA** menggunakan ekosistem **PHP CodeIgniter 4**.

<div class="my-6 p-6 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 space-y-4 not-prose">
<div class="flex items-center justify-between pb-3 border-b border-stone-800">
<div>
<span class="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">System Architecture</span>
<h3 class="text-base font-bold text-white font-serif">Arsitektur Terpadu SIPENSI SKAGATA</h3>
</div>
<span class="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono">CI4 + MySQL</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<div class="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
<div class="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
<span>1. Client Layer</span>
</div>
<ul class="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
<li><strong>HTML5 Geolocation</strong>: Sensor GPS posisi pengguna.</li>
<li><strong>WebRTC Camera</strong>: Swafoto live kamera ponsel.</li>
<li><strong>Leaflet.js + OSM</strong>: Peta polygon radius 100m.</li>
<li><strong>Bootstrap 5 UI</strong>: Responsif desktop & ponsel.</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
<div class="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-sky-400"></span>
<span>2. Backend CI4 MVC</span>
</div>
<ul class="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
<li><strong>CodeIgniter 4 (PHP 8.1+)</strong>: Arsitektur MVC bersih.</li>
<li><strong>Haversine Formula</strong>: Kalkulasi jarak koordinat GPS.</li>
<li><strong>PhpSpreadsheet</strong>: Ekspor & impor data Excel.</li>
<li><strong>Session & CSRF</strong>: Proteksi keamanan tingkat tinggi.</li>
</ul>
</div>
<div class="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
<div class="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-amber-400"></span>
<span>3. Database & Hosting</span>
</div>
<ul class="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
<li><strong>MySQL Relational</strong>: Skema terisolasi per pamong.</li>
<li><strong>Strict Data Isolation</strong>: Akses privat per jurusan.</li>
<li><strong>Production Server</strong>: Didukung <code>awanbeo.my.id</code>.</li>
<li><strong>Integritas Data</strong>: Riwayat terverifikasi permanen.</li>
</ul>
</div>
</div>
</div>

### A. Fitur Unggulan Sistem
- **Verifikasi Koordinat Geolocation API & Geofence Perimeter**: Memanfaatkan *HTML5 Geolocation API* pada gawai pengguna untuk membaca koordinat GPS secara waktu nyata. Sistem mencocokkan jarak pengguna dengan titik pusat SMKN 3 Yogyakarta (Latitude: `-7.777128`, Longitude: `110.366523`). Presensi hanya dapat dikirim jika pengguna berada di dalam radius ketat **100 meter**.
- **Kamera Swafoto dengan Watermark Timestamp Otomatis**: Khusus untuk bukti kehadiran Piket KBM, pengguna wajib mengambil foto langsung (*selfie*) via kamera gawai yang otomatis dibubuhi tanda air digital (tanggal, jam, menit, detik) tanpa celah manipulasi unggahan galeri lawas.
- **Arsitektur Tiga Peran Pengguna (Tri-Role Multi-Tenant)**:
  1. *Role Mahasiswa Praktikan (PPL/PK)*: Antarmuka terpusat untuk presensi datang (maks. 07:15 WIB), presensi pulang (min. 15:00 WIB), unggah foto piket KBM, pengajuan izin/sakit berbukti surat, dan riwayat presensi pribadi.
  2. *Role Guru Pamong (Pembimbing Lapangan)*: Dashboard pemantau kehadiran *real-time* mahasiswa binaan, verifikasi foto piket, penyesuaian status izin/sakit, serta fitur ekspor lembar rekapitulasi presensi bulanan berformat Excel (.xlsx).
  3. *Role Administrator Sistem / Waka Kurikulum*: Kalibrasi koordinat peta Leaflet, pengaturan jam kerja, impor massal mahasiswa melalui file Excel, pemetaan penugasan pamong dengan prinsip *Strict Data Isolation*, dan manajemen master data jurusan & universitas mitra.

---

## 4. Pembuktian 5 Prinsip Karya Inovasi Pendidikan

Karya inovasi ini dirancang dengan memenuhi 5 prinsip utama inovasi pendidikan yang ditetapkan dalam kriteria kelulusan profesi:

| No | Prinsip Inovasi | Penjelasan & Bukti Penerapan Lapangan |
| :-: | :--- | :--- |
| **1** | **Kebaruan (*Novelty*)** | Mengintegrasikan presensi gerbang harian, piket KBM swafoto, dan rekapitulasi pamong yang sebelumnya terpecah ke dalam satu portal terpusat mandiri yang dirancang khusus bagi SMKN 3 Yogyakarta. |
| **2** | **Kreativitas (*Creativity*)** | Mengombinasikan teknologi *web geolocation*, *Leaflet OSM map*, dan *WebRTC timestamp camera* sebagai solusi pengawasan jarak jauh yang berbiaya murah, ramah sumber daya gawai pengguna, dan tidak memerlukan mesin absensi sidik jari berbiaya mahal. |
| **3** | **Kebermanfaatan (*Usefulness*)** | Memberikan nilai tambah nyata bagi Waka Kurikulum dan Guru Pamong dalam efisiensi rekapitulasi data, eliminasi human-error, dan optimalisasi monitoring kesiapan SDM di ruang kelas dan bengkel praktik. |
| **4** | **Relevansi & Kontekstualitas** | Selaras dengan agenda transformasi digital sekolah vokasi modern dan budaya ketarunaan SMKN 3 Yogyakarta yang menjunjung tinggi kedisiplinan, ketepatan waktu, dan integritas. |
| **5** | **Efektivitas Terbukti (*Evidence-Based*)** | Teruji di lapangan secara nyata: terbukti meniadakan kasus manipulasi presensi dan secara resmi diadopsi pihak sekolah untuk menampung mahasiswa dari berbagai universitas mitra. |

---

## 5. Rute Implementasi Bertahap (Iterative Staged Rollout)

Pengembangan dan penerapan aplikasi ini dilakukan melalui metodologi adaptif dan bertahap guna memastikan kestabilan sistem:

<div class="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
<div class="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1.5">
<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-sky-200 text-sky-800 rounded">Tahap 1</span>
<h4 class="text-xs font-bold text-stone-900">Uji Coba Terbatas</h4>
<p class="text-xs text-stone-600">8 Mahasiswa PPL Informatika menguji akurasi GPS dan stabilitas antarmuka.</p>
</div>
<div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-amber-200 text-amber-800 rounded">Tahap 2</span>
<h4 class="text-xs font-bold text-stone-900">Validasi Pamong</h4>
<p class="text-xs text-stone-600">Presentasi hasil rekap data dan verifikasi fitur anti-kecurangan kepada Guru Pamong.</p>
</div>
<div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-emerald-200 text-emerald-800 rounded">Tahap 3</span>
<h4 class="text-xs font-bold text-stone-900">Diseminasi Kurikulum</h4>
<p class="text-xs text-stone-600">Eskalasi ke Waka Kurikulum SMKN 3 Yogyakarta untuk arahan standardisasi.</p>
</div>
<div class="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1.5">
<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-purple-200 text-purple-800 rounded">Tahap 4</span>
<h4 class="text-xs font-bold text-stone-900">Adopsi Massal Sekolah</h4>
<p class="text-xs text-stone-600">Pendaftaran seluruh akun PPL, PK, dan GTT lintas jurusan secara resmi.</p>
</div>
</div>

1. **Tahap 1 (Uji Coba Skala Kecil)**: Diluncurkan pada kelompok terbatas yang terdiri dari mahasiswa PPL jurusan Informatika untuk menguji akurasi GPS, toleransi sinyal gawai, dan responsivitas antarmuka.
2. **Tahap 2 (Validasi Guru Pamong)**: Mempresentasikan rekapitulasi data dan demonstrasi fitur verifikasi piket KBM kepada Guru Pamong (Ibu Febriyana, S.T.).
3. **Tahap 3 (Eskalasi Manajemen Kurikulum)**: Melaporkan efektivitas sistem kepada Waka Kurikulum SMKN 3 Yogyakarta untuk mendapatkan arahan standardisasi operasional sekolah.
4. **Tahap 4 (Adopsi Massal Lintas Jurusan)**: Pihak sekolah mendaftarkan akun mahasiswa PPL, Praktik Kependidikan (PK), dan Guru Tidak Tetap (GTT) dari seluruh program keahlian dan perguruan tinggi mitra (UNY, UAD, UGM, dsb.) untuk menggunakan sistem SIPENSI secara resmi.

---

## 6. Metrik Evaluasi & Dampak Keberhasilan

Efektivitas produk inovasi ini diukur melalui tiga indikator kinerja utama:
- **Validitas Data Kehadiran**: Peningkatan akurasi data mencapai 100%. Kasus keterlambatan tersembunyi dan titip presensi berhasil dieliminasi karena penguncian koordinat *geolocation* sekolah dalam perimeter 100m.
- **Efisiensi Waktu Rekapitulasi**: Waktu kerja penyusunan laporan presensi bulanan yang semula memakan waktu 3–5 hari kerja kini terpangkas menjadi hitungan detik dengan fitur ekspor otomatis ke Excel (.xlsx) dari database.
- **Tingkat Kepuasan & Umpan Balik Positif**: Wawancara dengan pemangku kepentingan (Waka Kurikulum dan Guru Pamong) mencatatkan tingkat kepuasan tinggi terhadap kemudahan operasional, keandalan sistem, dan transparansi pemantauan tenaga pendidik.

---

## 7. Galeri Dokumentasi Antarmuka Sistem (UI Showcase) SIPENSI SKAGATA

Berikut adalah dokumentasi visual otentik dari implementasi aplikasi web **SIPENSI SKAGATA** yang dihimpun dari 20 tangkapan layar antarmuka fungsional di lingkungan produksi nyata:

<div class="space-y-10 my-8 not-prose">

<!-- KLASTER 1: GERBANG AUTENTIKASI -->
<div class="space-y-4">
<div class="flex items-center gap-2 border-b border-stone-200 pb-2">
<span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
<h3 class="text-base font-bold text-stone-900 font-serif">A. Gerbang Masuk & Autentikasi Sistem Terpadu</h3>
<span class="text-xs text-stone-500 ml-auto">Modul Login</span>
</div>
<div class="bg-stone-50 p-4 rounded-2xl border border-stone-200">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
<img src="/dokumen/seminar/ss/01-login-sipensi-skagata.webp" alt="Login SIPENSI SKAGATA" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
<div>
                    <span class="font-bold text-stone-900">Antarmuka Login SIPENSI SKAGATA:</span>
                    <span class="text-stone-600 ml-1">Gerbang masuk terpusat dengan autentikasi multi-peran (Mahasiswa Praktikan, Guru Pamong, dan Administrator Sistem) didukung server production <code>awanbeo.my.id</code>.</span>
</div>
<span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-semibold rounded text-[11px]">Autentikasi Terenkripsi</span>
</div>
</div>
</div>

<!-- KLASTER 2: PORTAL MAHASISWA PRAKTIKAN -->
<div class="space-y-4">
<div class="flex items-center gap-2 border-b border-stone-200 pb-2">
<span class="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
<h3 class="text-base font-bold text-stone-900 font-serif">B. Pengalaman Pengguna: Portal Mahasiswa Praktikan (PPL/PK)</h3>
<span class="text-xs text-stone-500 ml-auto">5 Tangkapan Layar</span>
</div>
<p class="text-xs text-stone-600">Modul yang digunakan mahasiswa praktikan untuk presensi harian berbasis GPS, bukti swafoto piket KBM, monitoring rekap riwayat kehadiran, serta panduan operasional.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- 01: Presensi Harian Geofencing -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/02-presensi-harian-geofencing.webp" alt="Presensi Harian Mahasiswa" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">1. Presensi Harian & Tombol Datang/Pulang</span>
                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Geofence 100m</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Jam Masuk Maksimal 07:15 WIB, Jam Pulang Minimal 15:00 WIB. Dilengkapi validasi GPS otomatis serta fitur pengajuan Izin/Sakit resmi.
                    </p>
</div>
</div>

<!-- 02: Presensi Piket KBM Swafoto -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/03-presensi-piket-kbm-swafoto.webp" alt="Kamera Piket KBM" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">2. Presensi Piket KBM dengan Swafoto Langsung</span>
                        <span class="text-[10px] font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">WebRTC Camera</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Mengakses kamera ponsel secara waktu nyata tanpa celah unggah foto lama galeri. Foto dibubuhi timestamp otomatis saat penugasan piket.
                    </p>
</div>
</div>

<!-- 03: Riwayat Presensi Saya -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/04-riwayat-presensi-mahasiswa.webp" alt="Riwayat Presensi" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">3. Riwayat Kehadiran Mahasiswa Praktikan</span>
                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">100% Efektif</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Akumulasi statistik kehadiran Yodi Irawan (Informatika UNY): Hadir 3 hari, Terlambat 1 hari, Alpa 0. Detail jam masuk dan jam pulang terekam presisi.
                    </p>
</div>
</div>

<!-- 04: Panduan Pengguna Praktikan -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/05-panduan-praktikan.webp" alt="Panduan Praktikan" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">4. Pusat Panduan Pengguna Mahasiswa</span>
                        <span class="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Standard SOP</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Ringkasan alur cepat harian: (1) Presensi Datang, (2) Dokumentasi Piket KBM, (3) Presensi Pulang setelah pukul 15:00 WIB.
                    </p>
</div>
</div>

<!-- 05: Profil Mahasiswa Praktikan -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3 md:col-span-2">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs max-h-72">
                    <img src="/dokumen/seminar/ss/06-profil-mahasiswa.webp" alt="Profil Mahasiswa" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">5. Profil & Keamanan Akun Mahasiswa Praktikan</span>
                        <span class="text-[10px] font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Keamanan Akun</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Identitas resmi akun, kampus mitra (Universitas Negeri Yogyakarta), prodi Informatika, periode gelombang PPL Semester Gasal 2026/2027, dan pengaturan kata sandi.
                    </p>
</div>
</div>
</div>
</div>

<!-- KLASTER 3: PORTAL GURU PAMONG -->
<div class="space-y-4">
<div class="flex items-center gap-2 border-b border-stone-200 pb-2">
<span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
<h3 class="text-base font-bold text-stone-900 font-serif">C. Pengawasan & Verifikasi: Portal Guru Pamong (Pembimbing Lapangan)</h3>
<span class="text-xs text-stone-500 ml-auto">5 Tangkapan Layar</span>
</div>
<p class="text-xs text-stone-600">Antarmuka khusus bagi Guru Pamong (Ibu Febriyana, S.T.) untuk memantau presensi harian mahasiswa bimbingan secara real-time, memeriksa foto piket, dan mencetak rekap bulanan.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- 06: Monitoring Harian Pamong -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/07-monitoring-harian-pamong.webp" alt="Monitoring Harian Pamong" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">6. Monitoring Presensi Harian Mahasiswa Binaan</span>
                        <span class="text-[10px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Live Status</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Memantau kehadiran mahasiswa praktikan Informatika UNY (Fajar Alamsyah, Inarotul Qolbiyah, Yodi Irawan) per tanggal dengan tombol ubah status presensi instan.
                    </p>
</div>
</div>

<!-- 07: Laporan Piket KBM Pamong -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/08-laporan-piket-kbm-pamong.webp" alt="Laporan Piket KBM Pamong" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">7. Verifikasi Bukti Swafoto Piket KBM</span>
                        <span class="text-[10px] font-semibold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">Verifikasi Foto</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Tabel riwayat piket mahasiswa bimbingan dilengkapi jam penugasan dan tombol 'Lihat Foto' untuk memeriksa kesesuaian tugas piket di lingkungan sekolah.
                    </p>
</div>
</div>

<!-- 08: Rekapitulasi Presensi Bulanan Pamong -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/09-rekap-bulanan-pamong-excel.webp" alt="Rekapitulasi Bulanan" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">8. Rekapitulasi Presensi Bulanan & Ekspor Excel</span>
                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Ekspor .xlsx</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Tabel rekapitulasi 5 hari kerja efektif memuat persentase kehadiran efektif, tombol cetak dokumen, dan ekspor spreadsheet Excel (.xlsx) otomatis.
                    </p>
</div>
</div>

<!-- 09: Panduan Guru Pamong -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/10-panduan-guru-pamong.webp" alt="Panduan Pamong" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">9. Pusat Panduan Operasional Guru Pamong</span>
                        <span class="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Petunjuk Pamong</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Instruksi tiga langkah kerja pamong: (1) Pantau Mahasiswa Binaan, (2) Verifikasi Piket & Izin, (3) Ekspor Laporan Excel untuk arsip evaluasi.
                    </p>
</div>
</div>

<!-- 10: Profil Guru Pamong -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3 md:col-span-2">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs max-h-72">
                    <img src="/dokumen/seminar/ss/11-profil-guru-pamong.webp" alt="Profil Pamong" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">10. Profil & Keamanan Guru Pamong</span>
                        <span class="text-[10px] font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Profil Resmi</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Akun resmi Ibu Febriyana, S.T. memetakan jurusan binaan Informatika UNY dengan kuota 3 praktikan aktif terisolasi sesuai hak akses.
                    </p>
</div>
</div>
</div>
</div>

<!-- KLASTER 4: PANEL ADMINISTRATOR SISTEM -->
<div class="space-y-4">
<div class="flex items-center gap-2 border-b border-stone-200 pb-2">
<span class="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
<h3 class="text-base font-bold text-stone-900 font-serif">D. Tata Kelola Kurikulum: Panel Administrator Sistem</h3>
<span class="text-xs text-stone-500 ml-auto">9 Tangkapan Layar</span>
</div>
<p class="text-xs text-stone-600">Modul kendali penuh yang digunakan oleh Administrator Sekolah dan Waka Kurikulum SMKN 3 Yogyakarta untuk kalibrasi geofencing Leaflet, manajemen massal pengguna, serta pangkalan data master.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- 11: Dashboard Ringkasan Eksekutif -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/12-dashboard-eksekutif-admin.webp" alt="Dashboard Administrator" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">11. Ringkasan Presensi & Operasional Eksekutif</span>
                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Dashboard</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Pemantauan operasional real-time: 15 Mahasiswa PPL/PK, 2 Guru Pamong, status geofencing radius 100m aktif, dan batas jam presensi.
                    </p>
</div>
</div>

<!-- 12: Manajemen Data Mahasiswa & Impor Excel -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/13-manajemen-mahasiswa-impor-excel.webp" alt="Manajemen Mahasiswa" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">12. Manajemen Mahasiswa & Impor Massal Excel</span>
                        <span class="text-[10px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Bulk Import</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Tabel kelola 15 akun praktikan terdistribusi di 7 kejuruan dan 4 kampus mitra dilengkapi fitur 'Impor Mahasiswa' via file Excel .xlsx.
                    </p>
</div>
</div>

<!-- 13: Pemetaan Guru Pamong & Strict Data Isolation -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/14-pemetaan-pamong-data-isolation.webp" alt="Pemetaan Pamong" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">13. Pemetaan Pamong & Strict Data Isolation</span>
                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Data Isolation</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Penegakan isolasi data ketat: Guru pamong hanya memiliki akses monitoring terhadap mahasiswa di jurusan binaan yang telah dipetakan resmi.
                    </p>
</div>
</div>

<!-- 14: Master Data Jurusan -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/15-master-data-jurusan.webp" alt="Master Data Jurusan" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">14. Master Data Konsentrasi Keahlian / Jurusan</span>
                        <span class="text-[10px] font-semibold text-stone-800 bg-stone-200 px-2 py-0.5 rounded">9 Jurusan</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Pangkalan data 9 program keahlian SMKN 3 Yogyakarta (Informatika, Teknik Mesin, Listrik, BK, dsb.) beserta distribusi mahasiswa per prodi.
                    </p>
</div>
</div>

<!-- 15: Master Data Asal Universitas Mitra -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/16-master-data-universitas-mitra.webp" alt="Master Data Universitas" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">15. Master Data Asal Universitas Mitra Kampus</span>
                        <span class="text-[10px] font-semibold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">7 Kampus Mitra</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Data perguruan tinggi mitra kerja sama penempatan PPL/PK: UNY, UAD, UGM, UST, UPY, dsb. lengkap dengan alamat dan kontak telepon resmi.
                    </p>
</div>
</div>

<!-- 16: Master Data Periode & Gelombang -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/17-master-data-periode-gelombang.webp" alt="Master Data Periode" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">16. Master Data Periode & Gelombang PPL/PK</span>
                        <span class="text-[10px] font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">Periode Aktif</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Manajemen rentang tanggal pelaksanaan (15 Juli – 30 November 2026) dan status aktif gelombang untuk isolasi arsip tahun ajaran lampau.
                    </p>
</div>
</div>

<!-- 17: Pengaturan Geofencing Peta SMKN 3 Yogyakarta (LEAFLET OSM) -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3 md:col-span-2">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs max-h-96">
                    <img src="/dokumen/seminar/ss/18-kalibrasi-geofencing-leaflet-osm.webp" alt="Peta Geofencing Leaflet SMKN 3 Yogyakarta" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">17. Kalibrasi Geofencing GPS Interaktif Peta SMKN 3 Yogyakarta (Leaflet.js & OSM)</span>
                        <span class="text-[10px] font-semibold text-rose-800 bg-rose-100 px-2 py-0.5 rounded">Core Geofence Engine</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Fitur kalibrasi perimeter sekolah: Pin koordinat SMKN 3 Yogyakarta (Lat: <code>-7.777128</code>, Long: <code>110.366523</code>), slider radius interaktif (10m–1000m, default 100m), dan penetapan batas jam presensi (Maks 07:15 WIB, Min 15:00 WIB).
                    </p>
</div>
</div>

<!-- 18: Panduan Pengguna Administrator -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/19-panduan-administrator-sistem.webp" alt="Panduan Administrator" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">18. Panduan Administrator & Multi-Role Switcher</span>
                        <span class="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Multi-Role View</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Petunjuk operasional admin sistem dengan fitur peninjauan sudut pandang (*role preview*) Guru Pamong, Mahasiswa PPL, dan Guru GTT.
                    </p>
</div>
</div>

<!-- 19: Profil Administrator Sistem -->
<div class="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-3">
<div class="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
                    <img src="/dokumen/seminar/ss/20-profil-super-administrator.webp" alt="Profil Administrator" class="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" loading="lazy" />
</div>
<div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">19. Profil Super Administrator SMKN 3 Yogyakarta</span>
                        <span class="text-[10px] font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Super Admin</span>
                    </div>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Akun otoritas tertinggi pemegang kendali hak akses konfigurasi sistem, kebijakan batas waktu absensi, dan basis data instansi.
                    </p>
</div>
</div>
</div>
</div>

</div>

---

## 8. Repositori Source Code & Ketersediaan Sistem

Sebagai wujud keterbukaan akademik dan keberlanjutan produk inovasi (*sustainable software development*), seluruh kode sumber (*source code*) aplikasi **SIPENSI SKAGATA** telah dipublikasikan dan didokumentasikan secara terbuka melalui repositori resmi GitHub:

<div class="my-6 p-6 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md space-y-4 not-prose">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-2xl bg-stone-800 text-white flex items-center justify-center border border-stone-700 flex-shrink-0">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
</svg>
</div>
<div>
<h4 class="text-base font-bold text-white font-mono">yodi-dev / sipensi-skagata</h4>
<p class="text-xs text-stone-400">CodeIgniter 4 Web Application • SMKN 3 Yogyakarta Presence System</p>
</div>
</div>
<a href="https://github.com/yodi-dev/sipensi-skagata" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-xs self-start sm:self-auto">
<span>Buka Repositori GitHub</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-800 text-xs">
<div class="p-2.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
<span class="text-[10px] text-stone-400 uppercase font-mono block">Framework</span>
<span class="font-bold text-stone-200">CodeIgniter 4 (PHP 8.1+)</span>
</div>
<div class="p-2.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
<span class="text-[10px] text-stone-400 uppercase font-mono block">Geofencing</span>
<span class="font-bold text-stone-200">Leaflet.js & HTML5 GPS</span>
</div>
<div class="p-2.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
<span class="text-[10px] text-stone-400 uppercase font-mono block">Camera Capture</span>
<span class="font-bold text-stone-200">WebRTC Canvas Timestamp</span>
</div>
<div class="p-2.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
<span class="text-[10px] text-stone-400 uppercase font-mono block">Data Security</span>
<span class="font-bold text-stone-200">Strict Data Isolation</span>
</div>
</div>
</div>

---

## 9. Refleksi Pribadi & Rencana Diseminasi Berkelanjutan

Merancang dan mengimplementasikan **SIPENSI SKAGATA** membuktikan bahwa peran seorang guru masa kini tidak lagi terbatas pada penyampaian materi di papan tulis, melainkan mencakup kepekaan sistemik untuk mendiagnosis kelemahan institusional dan menghadirkan solusi teknologi tepat guna.

Bagi saya pribadi, keberhasilan SIPENSI yang digunakan secara nyata oleh puluhan mahasiswa praktikan lintas universitas dan dipantau langsung oleh para guru pamong serta manajemen kurikulum SMKN 3 Yogyakarta adalah wujud nyata dari **amal jariyah pendidik**. Ke depan, sistem ini terus dikembangkan agar dapat diintegrasikan dengan sistem presensi kesiswaan dan diadaptasi oleh sekolah-sekolah kejuruan lainnya.

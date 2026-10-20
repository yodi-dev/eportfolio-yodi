---
title: "LK 4: Penyusunan Desain Karya Inovatif Pendidikan"
description: "Rancang bangun inovasi sistem informasi manajemen kehadiran 'SIPENSI' (Presensi Web Berbasis Geolocation & Timestamp Swafoto) untuk menanggulangi tantangan kedisiplinan dan monitoring KBM di SMKN 3 Yogyakarta."
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
  - title: "Dokumen Undangan Resmi BIMTEK Aplikasi SIBENKA"
    type: "pdf"
    url: "/dokumen/ppl-2/Undangan BIMTEK SIBENKA.pdf"
    size: "321 KB"
    badge: "Diseminasi Resmi"
    description: "Bukti surat undangan resmi diseminasi dan bimbingan teknis inovasi sistem digital bagi civitas akademika SMKN 3 Yogyakarta."
---

## 1. Identitas Karya Inovatif

Mata kuliah **Seminar Pendidikan Profesi Guru (PPG)** menuntut mahasiswa calon guru untuk tidak sekadar menguasai ruang kelas, tetapi juga mampu menghadirkan terobosan nyata (*educational innovation*) guna menyelesaikan kendala manajerial maupun instruksional di sekolah mitra.

Melalui **Lembar Kerja 4 (LK 4)**, saya merancang dan mengimplementasikan sebuah sistem administrasi presensi digital modern yang diberi nama **SIPENSI**:

- **Nama Karya**: *Aplikasi Presensi Berbasis Web dengan Fitur Geolocation dan Timestamp Swafoto (SIPENSI)*
- **Sasaran Pengguna**: Mahasiswa Praktik Pengalaman Lapangan (PPL), Mahasiswa Praktik Kependidikan (PK), dan Guru Tidak Tetap (GTT) di **SMK Negeri 3 Yogyakarta**.
- **Konteks Lembaga**: Sekolah Menengah Kejuruan berorientasi ketarunaan dengan mobilitas tinggi dan dinamika KBM bengkel yang padat.

<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
    <div class="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-rose-700 block">Tantangan Manajemen Sekolah</span>
        <ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
            <li><strong>Presensi Manual Kertas</strong>: Rentan rusak, tercecer, dan rawan manipulasi.</li>
            <li><strong>Google Form Terpisah</strong>: Rawan "titip absen" dari luar sekolah.</li>
            <li><strong>Monitoring Lambat</strong>: Waka Kurikulum sulit memastikan kesiapan KBM secara real-time.</li>
        </ul>
    </div>
    <div class="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block">Solusi Inovasi Web SIPENSI</span>
        <ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc list-inside">
            <li><strong>API Geolocation</strong>: Verifikasi radius koordinat GPS sekolah secara otomatis.</li>
            <li><strong>Timestamp Swafoto</strong>: Kamera gawai mengunci foto dan waktu nyata tanpa manipulasi.</li>
            <li><strong>Dashboard Real-Time</strong>: Rekapitulasi laporan bulanan otomatis sekali klik.</li>
        </ul>
    </div>
</div>

---

## 2. Identifikasi Kebutuhan & Akar Masalah Lapangan

Berdasarkan pengamatan empiris saya selama menjalankan penugasan PPL II di **SMK Negeri 3 Yogyakarta**, kelancaran proses pembelajaran di kelas dan bengkel praktik sangat bergantung pada ketepatan waktu serta kedisiplinan para tenaga pendidik (khususnya mahasiswa PPL, PK, dan GTT).

Namun, ditemukan beberapa titik rawan manajerial yang menghambat operasional sekolah:
1. **Sistem Presensi Masih Manual**: Presensi kedatangan harian masih menggunakan lembaran kertas fisik yang rentan tercecer, robek, atau dimanipulasi data kehadirannya.
2. **Fragmentasi Data Piket KBM**: Untuk pelaporan tugas Piket Kegiatan Belajar Mengajar (KBM), digunakan instrumen *Google Form* terpisah yang tidak terhubung dengan absensi gerbang harian. Sistem ini rawan praktik "titip absen" karena siapa pun dapat mengisi tautan dari luar lingkungan sekolah.
3. **Kendala Monitoring Real-Time**: Guru Pamong dan Wakil Kepala Sekolah Bidang Kurikulum (Waka Kurikulum) kesulitan memantau kesiapan pengajar di kelas secara tepat waktu.
4. **Lambatnya Rekapitulasi Data**: Rekapitulasi presensi bulanan membutuhkan waktu berhari-hari karena staf harus memeriksa lembaran kertas dan spreadsheet secara manual satu per satu, berpotensi mengganggu efektivitas evaluasi KBM.

---

## 3. Gagasan Inovasi & Arsitektur Solusi Teknis

Menjawab permasalahan di atas, saya merumuskan ide untuk mendigitalkan dan memusatkan sistem manajemen kehadiran tersebut melalui rancang bangun **Aplikasi Presensi Berbasis Web Terintegrasi**.

### A. Fitur Unggulan Sistem
- **Verifikasi Koordinat Geolocation API**: Memanfaatkan *HTML5 Geolocation API* pada gawai pengguna untuk mengunci koordinat GPS saat presensi dilakukan. Sistem hanya mengizinkan pengiriman kehadiran jika koordinat berada di dalam radius resmi wilayah SMKN 3 Yogyakarta.
- **Kamera Swafoto dengan Watermark Timestamp Otomatis**: Khusus untuk bukti kehadiran Piket KBM, pengguna wajib mengunggah foto diri (*selfie*) langsung melalui kamera gawai yang otomatis dibubuhi tanda air digital (tanggal, jam, menit, detik) tanpa celah manipulasi unggahan galeri lawas.
- **Sistem Peran Ganda (Dual-Role Architecture)**:
  - *Role Mahasiswa/GTT*: Antarmuka simpel untuk login, penekanan tombol hadir instan, perekaman GPS otomatis, dan pelaporan piket harian.
  - *Role Guru Pamong / Admin / Waka Kurikulum*: Dashboard pemantau kehadiran *real-time*, verifikasi bukti swafoto, serta fitur ekspor laporan bulanan otomatis sekali klik.

---

## 4. Pembuktian 5 Prinsip Karya Inovasi Pendidikan

Karya inovasi ini dirancang dengan memenuhi 5 prinsip utama inovasi pendidikan yang ditetapkan dalam kriteria kelulusan profesi:

| No | Prinsip Inovasi | Penjelasan & Bukti Penerapan Lapangan |
| :-: | :--- | :--- |
| **1** | **Kebaruan (*Novelty*)** | Mengintegrasikan presensi harian gerbang dan piket KBM yang sebelumnya terpecah (kertas & Google Form) ke dalam satu portal terpusat mandiri yang dirancang khusus bagi SMKN 3 Yogyakarta. |
| **2** | **Kreativitas (*Creativity*)** | Mengombinasikan teknologi *web geolocation* dan *timestamp camera* sebagai solusi pengawasan jarak jauh yang berbiaya murah, ramah sumber daya, dan mudah diakses melalui ponsel masing-masing pengguna tanpa perangkat keras mahal. |
| **3** | **Kebermanfaatan (*Usefulness*)** | Memberikan nilai tambah nyata bagi Waka Kurikulum dan Guru Pamong dalam efisiensi rekapitulasi data, eliminasi human-error, dan optimalisasi monitoring kesiapan SDM di ruang kelas. |
| **4** | **Relevansi & Kontekstualitas** | Selaras dengan agenda transformasi digital sekolah vokasi modern dan budaya ketarunaan SMKN 3 Yogyakarta yang menjunjung tinggi kedisiplinan dan transparansi. |
| **5** | **Efektivitas Terbukti (*Evidence-Based*)** | Teruji di lapangan secara nyata: terbukti meniadakan kasus manipulasi presensi dan secara resmi diminta oleh pihak sekolah untuk diadopsi massal lintas jurusan. |

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

1. **Tahap 1 (Uji Coba Skala Kecil)**: Diluncurkan pada kelompok terbatas yang terdiri dari 8 mahasiswa PPL jurusan Informatika untuk menguji akurasi GPS dan responsivitas antarmuka.
2. **Tahap 2 (Validasi Guru Pamong)**: Mempresentasikan rekapitulasi data dan demonstrasi fitur anti-kecurangan kepada Guru Pamong.
3. **Tahap 3 (Eskalasi Manajemen Kurikulum)**: Melaporkan efektivitas sistem kepada Waka Kurikulum SMKN 3 Yogyakarta untuk mendapatkan arahan standardisasi operasional.
4. **Tahap 4 (Adopsi Massal Lintas Jurusan)**: Pihak sekolah mendaftarkan seluruh akun mahasiswa PPL, Praktik Kependidikan (PK), dan Guru Tidak Tetap (GTT) dari seluruh program keahlian untuk menggunakan sistem SIPENSI secara resmi.

---

## 6. Metrik Evaluasi & Dampak Keberhasilan

Efektivitas produk inovasi ini diukur melalui tiga indikator kinerja utama:
- **Validitas Data Kehadiran**: Peningkatan akurasi data mencapai tingkat tertinggi. Kasus keterlambatan tersembunyi dan titip presensi berhasil dieliminasi karena penguncian koordinat *geolocation* sekolah.
- **Efisiensi Waktu Rekapitulasi**: Waktu kerja penyusunan laporan presensi bulanan yang semula memakan waktu 3–5 hari kerja kini terpangkas menjadi hitungan detik dengan fitur cetak otomatis dari database.
- **Tingkat Kepuasan & Umpan Balik Positif**: Wawancara dengan pemangku kepentingan (Waka Kurikulum dan Guru Pamong) mencatatkan tingkat kepuasan tinggi terhadap kemudahan operasional dan transparansi pemantauan tenaga pendidik.


---
title: "Analisis Media Pembelajaran yang Dipergunakan"
description: "Evaluasi efektivitas ekosistem media pembelajaran digital dan fisik: Google Docs, Buku Catatan Manual, PPT Validasi, Wayground, Blockly Games, dan OnlineGDB di Laboratorium Komputer SMKN 3 Yogyakarta."
category: "PPL II: Praktik Mandiri"
course: "ppl-2"
status: "completed"
date: "2026-10-16"
badge: "Dimensi 03 - Media Instruksional"
color: "teal"
---

## 1. Arsitektur Ekosistem Media Pembelajaran

Pada pelaksanaan PPL II di **SMK Negeri 3 Yogyakarta**, keberhasilan pembelajaran di kelas **X TM 1 dan X TM 2** sangat ditentukan oleh pemilihan media yang tepat guna dan responsif terhadap karakteristik siswa. Menghindari kelemahan PPL I di mana siswa mudah terdistraksi saat membaca bahan tayang yang monoton, saya membangun sebuah **Ekosistem Media Multi-Modal Terpadu** yang mengombinasikan keunggulan platform digital modern dengan keandalan media konvensional.

```mermaid
flowchart LR
    A["1. Google Docs<br/>Rundown & Transparansi Agenda"] --> B["2. Browser & Buku Fisik<br/>Active Note-Taking & Parafrase"]
    B --> C["3. Slide PPT Interaktif<br/>Konfirmasi & Diskusi Kelas"]
    C --> D["4. Wayground<br/>Evaluasi Gamifikasi Cepat"]
    D --> E["5. Blockly Games & OnlineGDB<br/>Jembatan Logika & Praktik Ngoding"]
    E --> F["6. Modul Cheatsheet PDF<br/>Panduan Modifikasi & AI Assistant"]
    style A fill:#f0fdf4,stroke:#16a34a,stroke-width:2px
    style B fill:#fefce8,stroke:#ca8a04,stroke-width:2px
    style C fill:#eff6ff,stroke:#2563eb,stroke-width:2px
    style D fill:#fdf2f8,stroke:#db2777,stroke-width:2px
    style E fill:#f0fdfa,stroke:#0d9488,stroke-width:2px
    style F fill:#faf5ff,stroke:#9333ea,stroke-width:2px
```

---

## 2. Inventaris & Peran Spesifik Setiap Media

| No | Nama Media / Platform | Tipe Media | Peran Instruksional & Fungsi Pedagogis |
| :-: | :--- | :--- | :--- |
| **1** | **Google Docs** | *Cloud Document* | **Transparansi Agenda & Kontrak Belajar**: Ditampilkan saat apersepsi untuk menyajikan sasaran hari itu, langkah kegiatan, dan rundown menit ke menit sehingga siswa memiliki ekspektasi waktu yang terukur. |
| **2** | **Web Browser & Buku Tulis Fisik** | *Hybrid Digital-Manual* | **Active Note-Taking & Anti-Distraksi**: Siswa mencari materi teori melalui peramban, lalu wajib membaca, memahami, dan mencatatnya ke buku tulis masing-masing menggunakan kalimat sendiri (dilarang menyalin mentah-mentah). |
| **3** | **Slide PPT Guru** | *Visual Presentation* | **Validasi & Konfirmasi Konsep**: Digunakan guru di depan kelas untuk mengulas hasil pencarian mandiri siswa, meluruskan pemahaman yang keliru, serta memandu diskusi terbuka dua arah. |
| **4** | **Wayground** | *Gamified Quiz Platform* | **Evaluasi Formatif Interaktif**: Wadah asesmen cepat berupa kuis pilihan ganda interaktif dengan visual dan dinamika permainan yang sangat memacu antusiasme siswa teknik. |
| **5** | **Blockly Games** | *Visual Logic Puzzle* | **Jembatan Logika Algoritma**: Media permainan susun-blok interaktif untuk memperkuat nalar alur instruksi sekuensial dan percabangan sebelum siswa berhadapan dengan baris kode teks. |
| **6** | **OnlineGDB** | *Cloud Web IDE* | **Eksekusi Koding Instan**: Lingkungan pengembangan kode terpadu berbasis peramban yang memungkinkan siswa menulis, mengompilasi, dan menguji program tanpa repot menginstal software lokal di laboratorium. |
| **7** | **Cheatsheet / Panduan Ringkas PDF** | *Handout Digital Ringkas* | **Panduan Mandiri Siswa**: Lembaran ringkasan sintaks dasar, struktur perintah, dan contoh implementasi yang dapat diakses mandiri oleh siswa saat guru berkeliling mendampingi siswa lain. |
| **8** | **Generative AI Tools** | *AI Learning Assistant* | **Eksplorasi Tingkat Lanjut**: Digunakan secara terarah pada fase modifikasi kode untuk melatih siswa mengeksplorasi variasi algoritma dan memahami etika pemanfaatan AI. |

---

## 3. Analisis Efektivitas & Dampak terhadap Keterlibatan Siswa

### A. Pengentasan Pasivitas Melalui Kombinasi "Browser + Catatan Buku Fisik"
Pada evaluasi PPL I, penggunaan modul bacaan digital penuh sering kali disalahgunakan siswa untuk membuka tab gim atau aplikasi lain. Dengan mewajibkan siswa membaca di peramban lalu **menuliskan intisarinya dengan bahasa sendiri di buku catatan fisik**, proses kognitif tingkat tinggi (membaca, mencerna, memparafrase) terjadi secara nyata. Saat saya rutin berkeliling memeriksa buku catatan, siswa menunjukkan keseriusan penuh dan tidak ada lagi yang pasif membuka situs non-pelajaran.

### B. Ledakan Motivasi Siswa Melalui Gamifikasi "Wayground"
Platform **Wayground** terbukti menjadi media evaluasi paling favorit bagi siswa kelas X TM 1 dan X TM 2. Format penilaian yang menyerupai antarmuka game membuat siswa teknik mesin yang kompetitif merasa tertantang. Mereka terlibat aktif mendiskusikan skor, memeriksa kesalahan butir soal, dan secara sukarela meminta sesi penguatan untuk memperbaiki peringkat mereka.

### C. Efisiensi Teknis Lab Komputer Melalui "OnlineGDB" dan "Blockly Games"
Laboratorium komputer sekolah kejuruan sering menghadapi kendala lisensi atau variasi konfigurasi OS pada tiap PC. Penggunaan **Blockly Games** dan **OnlineGDB** memitigasi kendala infrastruktur tersebut secara tuntas karena keduanya berjalan 100% di peramban web (*zero-installation*). Transisi dari logika blok Blockly ke kode berbasis teks di OnlineGDB terbukti menurunkan tingkat kecemasan (*coding anxiety*) siswa pemula secara drastis.

---

## 4. Tantangan Teknis & Mitigasi di Laboratorium

- **Konektivitas Internet Fluktuatif**: Ketika koneksi lab mengalami perlambatan sesaat, materi cheatsheet PDF dan bahan bacaan artikel telah disiapkan dalam format berkas luring (*offline file share*) di jaringan lokal sekolah.
- **Perbedaan Kecepatan Belajar Siswa**: Bagi siswa yang selesai lebih cepat pada Blockly Games atau latihan dasar OnlineGDB, saya menyediakan tantangan pengayaan modifikasi kode berbantukan prompt AI terarah pada modul cheatsheet, sementara saya mendampingi siswa yang membutuhkan asistensi lebih (*scaffolding*).

---

## 5. Tautan & Repositori Media Pembelajaran

- Tautan Dokumen Apersepsi Google Docs (Rundown Belajar X TM 1 & X TM 2).
- Tautan Sesi Evaluasi Gamifikasi Wayground (Bank Soal Algoritma Pemrograman).
- Tautan Portal Latihan Logika Visual: [Blockly Games](https://blockly.games).
- Tautan Lingkungan Koding Laboratorium: [OnlineGDB IDE](https://www.onlinegdb.com).
- [Berkas Cheatsheet & Panduan Praktik Koding PDF](/lkpd.docx).

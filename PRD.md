# Product Requirements Document (PRD) & Blueprint Arsitektur
## Proyek: E-Portfolio Terpadu Yodi Irawan (`eportofolio-yodi`)

> **Status**: Aktif & Dokumen Sumber Kebenaran (Single Source of Truth)  
> **Cakupan Kurikulum**: PPG Calon Guru Kemendikdasmen (**PPL I**, **PPL II**, & **Seminar PPG**)  
> **Pemilik**: Yodi Irawan (Mahasiswa PPG Calon Guru UNY)  
> **Domain Live**: [awanbeo.my.id](http://awanbeo.my.id) | **GitHub**: [github.com/yodi-dev/eportfolio-yodi](https://github.com/yodi-dev/eportfolio-yodi.git)

---

## 1. Quick Reference untuk Pengembang & Asisten AI

Jika Anda (developer atau asisten AI) sedang melanjutkan proyek ini, patuhi pedoman berikut:

- **Stack**: Nuxt 4 (`^4.4.2`, mode Nuxt 4 aktif dengan root `app/`), Vue 3.5 Composition API, `@nuxt/content` 3.13.0 (Content v3 dengan Better-SQLite3 native driver), Tailwind CSS v3 via `@nuxtjs/tailwindcss`.
- **Package Manager**: `pnpm` (pnpm 10.15.x).
- **Struktur Halaman Terpadu**:
  - `/` (`app/pages/index.vue`): Dashboard Eksekutif Portofolio (Matriks Progres Kurikulum PPL I, PPL II, Seminar, Metrik Skor, Modul Hub).
  - `/profil` (`app/pages/profil.vue`): Profil Lengkap Pendidik (Biodata, Nilai Kultural Melayu, Inspirasi Ma'am Amel, & Sinergi USP Web Developer).
  - `/mata-kuliah` (`app/pages/mata-kuliah/index.vue`): Hub Kurikulum 3 Mata Kuliah PPG.
    - `/mata-kuliah/ppl-1`: Khusus PPL I Terbimbing (Siklus 1-3, Skor L7 & L8, Refleksi).
    - `/mata-kuliah/ppl-2`: Khusus PPL II Praktik Mandiri (Studi Kasus, Observasi Sekolah, Asesmen Mandiri).
    - `/mata-kuliah/seminar`: Khusus Seminar PPG (Desain Inovasi EdTech, Jurnal Reflektif Kritis, Karya Ilmiah/PTK).
  - `/artefak` (`app/pages/artefak/index.vue`): Katalog artefak dengan filter dinamis (`Semua`, `PPL I`, `PPL II`, `Seminar PPG`).
  - `/artefak/[...slug]` (`app/pages/artefak/[...slug].vue`): Detail konten artefak via `<ContentRenderer>` dengan tanggal format Indonesia.
  - `/penilaian` (`app/pages/penilaian.vue`): Rekapitulasi instrumen Lampiran 7 (Perangkat - Skor 3.4) dan Lampiran 8 (Praktik - Skor 3.9) dari Guru Pamong Febriyana, S.T.
  - `/visi` (`app/pages/visi.vue`): Visi guru profesional, 3 pilar filosofis, dan Rencana Tindak Lanjut (RTL).
  - `/refleksi` (`app/pages/refleksi.vue`): Refleksi PPL Terbimbing & Filosofi Mengajar (Sistem Among KHD & Konstruktivisme Sosial Vygotsky).
- **Aturan Semantik**: Tag `<main>` hanya berada di `app/layouts/default.vue`. Halaman di `app/pages/**/*.vue` dibungkus dengan `<div>` atau `<article>`.
- **Pemisahan Portofolio Web Dev**: Portofolio koding web developer dipisahkan secara fisik/domain ke `awanbeo.my.id`, namun disinergikan sebagai keunggulan unik (USP) pendidik di halaman profil.

---

## 2. Peta Direktori & Peran Modul

```
eportofolio-yodi/
├── app/
│   ├── app.vue                     # Root app (<NuxtLayout><NuxtPage /></NuxtLayout>)
│   ├── components/                 # Komponen modular beranda
│   │   ├── HomeHero.vue            # Hero section awal
│   │   ├── HomeAbout.vue           # Latar belakang & nilai kultural Melayu
│   │   ├── HomeQuote.vue           # Kutipan inspirasi amal jariyah
│   │   └── HomeHighlight.vue       # Ringkasan 3 siklus PPL I
│   ├── layouts/
│   │   └── default.vue             # Header dengan Dropdown Mata Kuliah & Drawer Mobile
│   └── pages/                      # Rute halaman Nuxt 4
│       ├── index.vue               # Dashboard Eksekutif & Course Matrix Tracker
│       ├── profil.vue              # Laman Dedikasi Profil Diri + USP Web Developer
│       ├── mata-kuliah/            # Hub Kurikulum PPG
│       │   ├── index.vue           # Overview 3 Mata Kuliah PPG
│       │   ├── ppl-1.vue           # Portofolio PPL I (Terbimbing)
│       │   ├── ppl-2.vue           # Portofolio PPL II (Wadah 6 Dimensi Analisis Praktik Mandiri)
│       │   └── seminar.vue         # Portofolio Seminar PPG (Inovasi & Jurnal)
│       ├── artefak/
│       │   ├── index.vue           # Katalog artefak dengan filter course pills
│       │   └── [...slug].vue       # Renderer markdown artefak
│       ├── penilaian.vue           # Lembar penilaian Lampiran 7 & 8 resmi
│       ├── visi.vue                # Visi guru profesional & RTL
│       └── refleksi.vue            # Refleksi mendalam & ideologi mengajar
61: ├── content/
62: │   └── artefak/                    # Data artefak Markdown multi-matakuliah
63: │       ├── siklus-1.md             # PPL I - Siklus 1
64: │       ├── siklus-2.md             # PPL I - Siklus 2
65: │       ├── siklus-3.md             # PPL I - Siklus 3
66: │       └── ppl-2/                  # PPL II - 6 Dimensi Analisis Praktik Mandiri
67: │           ├── analisis-perencanaan.md          # Dimensi 01: Modul Ajar Guided Discovery
68: │           ├── analisis-materi.md               # Dimensi 02: AP & AD Berbasis SOP Mesin
69: │           ├── analisis-media.md                # Dimensi 03: Wayground, OnlineGDB, Catatan Buku
70: │           ├── analisis-video.md                # Dimensi 04: Active Roaming & Scaffolding
71: │           ├── analisis-kegiatan-nonmengajar.md # Dimensi 05: Piket 5S, SIBENKA & SIPENSI
72: │           └── analisis-instrumen-penilaian.md  # Dimensi 06: Evaluasi Multi-Metode & Exit Ticket
73: ├── public/                         # Aset statis (PDF Lampiran, Dokumen RPP/LKPD, Foto pp.png)
74: ├── content.config.ts               # Skema Zod (mendukung course: ppl-1 | ppl-2 | seminar)
75: ├── nuxt.config.ts                  # Konfigurasi Nuxt 4, SEO global, font Lora & Jakarta Sans
76: └── package.json                    # Dependensi proyek
77: ```
78: 
79: ---
80: 
81: ## 3. Skema Data Artefak (`content.config.ts`)
82: 
83: ```ts
84: schema: z.object({
85:     title: z.string(),
86:     description: z.string(),
87:     category: z.string(),
88:     course: z.enum(['ppl-1', 'ppl-2', 'seminar']).default('ppl-1'),
89:     status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
90:     date: z.string(),
91:     badge: z.string().optional(),
92:     color: z.string().optional(),
93: })
94: ```
95: 
96: ### Prosedur Menambah Dokumen Tugas Baru:
97: - **Tugas PPL I**: Masukkan frontmatter `course: "ppl-1"`.
98: - **Tugas PPL II**: Masukkan frontmatter `course: "ppl-2"`.
99: - **Tugas Seminar PPG**: Masukkan frontmatter `course: "seminar"`.
100: Dokumen akan langsung terpetakan otomatis ke filter `/artefak` dan halaman hub mata kuliah yang bersangkutan.
101: 
102: ---
103: 
104: ## 4. Status Implementasi & Roadmap
105: 
106: ### Fase 1: Perbaikan Bug & Pemisahan Profil (Selesai ✅)
107: - [x] Pemisahan Dashboard (`/`) dan Profil (`/profil`).
108: - [x] Navigasi responsif mobile drawer dan hamburger toggle.
109: - [x] Pembersihan semantik tag `<main>` ganda.
110: - [x] SEO dan meta tag global dan dinamis.
111: - [x] Pembersihan warning CSS PostCSS.
112: - [x] Penyesuaian label berkas download PDF.
113: 
114: ### Fase 2: Arsitektur Multi-Mata Kuliah (Selesai ✅)
115: - [x] Skema Nuxt Content v3 diperluas mendukung `course: ppl-1 | ppl-2 | seminar`.
116: - [x] Dropdown desktop & Accordion mobile untuk menu Mata Kuliah di `default.vue`.
117: - [x] Halaman hub kurikulum: `/mata-kuliah`, `/mata-kuliah/ppl-1`, `/mata-kuliah/ppl-2`, `/mata-kuliah/seminar`.
118: - [x] Filter pills kategori per mata kuliah di `/artefak`.
119: - [x] Matriks Progres Mata Kuliah (Course Matrix Tracker) di Dashboard.
120: - [x] Sinergi USP Pendidik & Web Developer di `/profil`.
121: - [x] Integrasi wadah 6 Dimensi Analisis Praktik Mandiri PPL II dan 6 dokumen analisis mendalam berbasis data riil kelas X TM 1 & X TM 2 SMKN 3 Yogyakarta.
122: 
123: ### Fase 3: Pengisian Konten Bertahap & Fitur Masa Depan (Sedang Berjalan 🚀)
124: - [x] Pengisian berkas autentik dan data evaluasi PPL II (Algoritma Pemrograman, Analisis Data, Wayground, OnlineGDB, Piket 5S/KBM, SIBENKA & SIPENSI).
125: - [ ] Pengisian desain inovasi & jurnal Seminar PPG.
126: - [ ] Inline PDF previewer modal untuk Lampiran 7 & 8.
127: - [ ] Video embed responsif untuk rekaman micro-teaching.

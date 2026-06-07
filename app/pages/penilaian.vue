<template>
    <main class="max-w-5xl mx-auto py-12 px-4 space-y-10">

        <!-- Header Halaman -->
        <header class="text-center space-y-4">
            <span
                class="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Legalitas & Asesmen PPL
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Lembar Penilaian Resmi
            </h1>
            <p class="text-stone-600 max-w-2xl mx-auto text-base leading-relaxed">
                Rekapitulasi nilai otentik berdasarkan instrumen Direktorat PPG Kemendikdasmen.
            </p>
        </header>

        <!-- Kartu Metadata Evaluasi -->
        <div
            class="bg-white border border-stone-200 shadow-sm p-6 rounded-2xl flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start text-sm text-stone-700">
            <div class="space-y-1">
                <span class="text-stone-400 text-xs font-bold uppercase tracking-wider">Nama Mahasiswa</span>
                <p class="font-semibold text-stone-800 text-base">Yodi Irawan</p>
            </div>
            <div class="space-y-1">
                <span class="text-stone-400 text-xs font-bold uppercase tracking-wider">Guru Pamong (GP)</span>
                <p class="font-semibold text-stone-800 text-base">Febriyana, S.T.</p>
            </div>
            <div class="space-y-1">
                <span class="text-stone-400 text-xs font-bold uppercase tracking-wider">Tanggal Evaluasi</span>
                <p class="font-semibold text-stone-800 text-base">Yogyakarta, 30 April 2026</p>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex justify-center p-1.5 bg-stone-100 rounded-2xl max-w-md mx-auto shadow-inner">
            <button @click="activeTab = 'lampiran7'" :class="[
                'w-1/2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300',
                activeTab === 'lampiran7' ? 'bg-white text-emerald-700 shadow-sm' : 'text-stone-500 hover:text-stone-800'
            ]">
                Lampiran 7 (Perangkat)
            </button>
            <button @click="activeTab = 'lampiran8'" :class="[
                'w-1/2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300',
                activeTab === 'lampiran8' ? 'bg-white text-emerald-700 shadow-sm' : 'text-stone-500 hover:text-stone-800'
            ]">
                Lampiran 8 (Praktik)
            </button>
        </div>

        <!-- ================= KONTEN LAMPIRAN 7 ================= -->
        <section v-if="activeTab === 'lampiran7'" class="space-y-6 animate-fadeIn">
            <div
                class="p-6 bg-stone-50 rounded-3xl border border-stone-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h4 class="font-bold text-stone-800 text-base">Berkas Fisik Lampiran 7 (Rancangan Pembelajaran ke-1)
                    </h4>
                    <p class="text-stone-500 text-xs mt-0.5">Penilaian rancangan pembelajaran oleh GP untuk tahapan
                        asistensi/praktik.</p>
                </div>
                <a href="/Lampiran7.pdf" target="_blank"
                    class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-700 font-semibold text-sm rounded-xl border border-stone-200 shadow-sm hover:bg-stone-50 hover:text-emerald-700 hover:border-emerald-200 transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Unduh Lampiran 7 PPLT.pdf
                </a>
            </div>

            <div
                class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-stone-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr
                                class="bg-stone-50/70 border-b border-stone-100 text-stone-500 text-xs font-bold uppercase tracking-wider">
                                <th class="p-5 pl-8 w-1/3">Aspek & Indikator Penilaian</th>
                                <th class="p-5 text-center w-28">Skor Rata-Rata (Skala 1-4)</th>
                                <th class="p-5 pl-6">Catatan Kekurangan & Refleksi GP</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-100 text-sm text-stone-700">
                            <tr v-for="(aspek, idx) in aspekLampiran7" :key="idx"
                                class="hover:bg-stone-50/30 transition-colors">
                                <td class="p-5 pl-8">
                                    <div class="font-bold text-stone-800 text-sm md:text-base">{{ aspek.nama }}</div>
                                    <div class="text-stone-400 text-xs mt-1 leading-relaxed">{{ aspek.desc }}</div>
                                </td>
                                <td class="p-5 text-center font-bold text-emerald-600 bg-emerald-50/20 text-lg">{{
                                    aspek.skor }}</td>
                                <td class="p-5 pl-6 text-xs text-stone-600 leading-relaxed italic pr-8">{{ aspek.catatan
                                }}</td>
                            </tr>
                            <!-- Baris Total Kumulatif -->
                            <tr class="bg-emerald-800 text-white font-bold">
                                <td class="p-5 pl-8 rounded-bl-[2rem] text-right">Nilai Akhir Rancangan Pembelajaran:
                                </td>
                                <td class="p-5 text-center text-white bg-emerald-900 font-extrabold text-xl">3.4</td>
                                <td
                                    class="p-5 pl-6 text-xs font-normal text-emerald-100 hidden sm:table-cell rounded-br-[2rem] sm:rounded-none">
                                    Total Skor Perolehan: 68</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ================= KONTEN LAMPIRAN 8 ================= -->
        <section v-if="activeTab === 'lampiran8'" class="space-y-6 animate-fadeIn">
            <div
                class="p-6 bg-stone-50 rounded-3xl border border-stone-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h4 class="font-bold text-stone-800 text-base">Berkas Fisik Lampiran 8 (Pembelajaran ke-2)</h4>
                    <p class="text-stone-500 text-xs mt-0.5">Penilaian praktik mengajar untuk tahapan pembelajaran
                        terbimbing.</p>
                </div>
                <a href="/Lampiran8.pdf" target="_blank"
                    class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-700 font-semibold text-sm rounded-xl border border-stone-200 shadow-sm hover:bg-stone-50 hover:text-emerald-700 hover:border-emerald-200 transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Unduh Lampiran 8 PPLT.docx
                </a>
            </div>

            <div
                class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-stone-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr
                                class="bg-stone-50/70 border-b border-stone-100 text-stone-500 text-xs font-bold uppercase tracking-wider">
                                <th class="p-5 pl-8 w-1/3">Aspek & Indikator Praktik Mengajar</th>
                                <th class="p-5 text-center w-28">Skor Rata-Rata (Skala 1-4)</th>
                                <th class="p-5 pl-6">Catatan Kekurangan & Refleksi GP</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-100 text-sm text-stone-700">
                            <tr v-for="(aspek, idx) in aspekLampiran8" :key="idx"
                                class="hover:bg-stone-50/30 transition-colors">
                                <td class="p-5 pl-8">
                                    <div class="font-bold text-stone-800 text-sm md:text-base">{{ aspek.nama }}</div>
                                    <div class="text-stone-400 text-xs mt-1 leading-relaxed">{{ aspek.desc }}</div>
                                </td>
                                <td class="p-5 text-center font-bold text-teal-600 bg-teal-50/20 text-lg">{{ aspek.skor
                                }}</td>
                                <td class="p-5 pl-6 text-xs text-stone-600 leading-relaxed italic pr-8">{{ aspek.catatan
                                }}</td>
                            </tr>
                            <!-- Baris Total Kumulatif -->
                            <tr class="bg-stone-800 text-white font-bold">
                                <td class="p-5 pl-8 rounded-bl-[2rem] text-right">Nilai Akhir Pelaksanaan Pembelajaran:
                                </td>
                                <td class="p-5 text-center text-white bg-stone-900 font-extrabold text-xl">3.9</td>
                                <td
                                    class="p-5 pl-6 text-xs font-normal text-stone-300 hidden sm:table-cell rounded-br-[2rem] sm:rounded-none">
                                    Total Skor Perolehan: 78</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Aturan Rubrik Footer -->
        <footer class="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 text-stone-500 text-xs leading-relaxed">
            <p class="font-bold text-stone-700 mb-1">Keterangan:</p>
            <p>Kriteria Penilaian: Setiap munculnya deskriptor secara sempurna mendapat skor 2, deskriptor yang muncul
                kurang sempurna mendapat skor 1, dan tidak munculnya deskriptor mendapat skor 0.</p>
        </footer>

    </main>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('lampiran7')

// Data Riil Lampiran 7 (Rancangan Pembelajaran Ke-1)
const aspekLampiran7 = ref([
    {
        nama: '1. Identitas dan Kompetensi',
        desc: 'Memuat mata pelajaran, kelas, waktu, CP/KD, serta level kemampuan murid hasil observasi.',
        skor: '4.0',
        catatan: 'Seluruh indikator identitas dan kompetensi mendapatkan skor sempurna (4).'
    },
    {
        nama: '2. Pengembangan Materi, Bahan, & Media',
        desc: 'Cakupan materi, isi bahan ajar, penentuan sumber belajar, dan variasi media.',
        skor: '3.8',
        catatan: 'Sebagian besar indikator bernilai 4, namun variasi media mengikuti transisi kegiatan mendapat skor 3.'
    },
    {
        nama: '3. Skenario Kegiatan Pembelajaran',
        desc: 'Kegiatan pembuka (apersepsi), tahapan kegiatan inti dengan scaffolding, dan kegiatan penutup.',
        skor: '3.2',
        catatan: 'Belum ada teknik scaffolding pada penjelasan tahapan kegiatan inti (skor 3). Pada kegiatan penutup, belum memuat rencana tindak lanjut (skor 1).'
    },
    {
        nama: '4. Penilaian',
        desc: 'Kesesuaian alat ukur dengan kompetensi, instruksi asesmen, kunci jawaban, dan rubrik.',
        skor: '3.0',
        catatan: 'Intruksi asesmen sudah jelas, namun perangkat belum memuat kunci/kisi jawaban dan rubrik penilaian (skor 1).'
    }
])

// Data Riil Lampiran 8 (Pembelajaran Ke-2)
const aspekLampiran8 = ref([
    {
        nama: '1. Membuka Pelajaran',
        desc: 'Apersepsi dan keterkaitan tujuan dengan pengetahuan murid atau kehidupan sehari-hari.',
        skor: '4.0',
        catatan: 'Apersepsi dilakukan dengan sangat baik (skor 4).'
    },
    {
        nama: '2. Melaksanakan Kegiatan Inti',
        desc: 'Mendorong murid aktif berkolaborasi, penguasaan kompetensi, demonstrasi, pemberian respon, dan media efektif.',
        skor: '4.0',
        catatan: 'Penguasaan metode pembelajaran, ketepatan materi, serta interaksi menggunakan media belajar dieksekusi dengan nilai maksimal di seluruh indikator (skor 4).'
    },
    {
        nama: '3. Menutup Pembelajaran',
        desc: 'Mengakomodasi kesulitan murid, menyusun simpulan akhir, dan penilaian performa sesuai CP.',
        skor: '4.0',
        catatan: 'Kemampuan guru dalam melakukan refleksi dan mengevaluasi murid tercapai dengan sangat baik (skor 4).'
    },
    {
        nama: '4. Faktor Penunjang',
        desc: 'Kejelasan bahasa, pengorganisasian waktu, kepercayaan diri, perlakuan kepada murid, dan penampilan.',
        skor: '3.6',
        catatan: 'Mayoritas aspek berkinerja sempurna, namun untuk pengorganisasian waktu dan perlakuan profesional kepada murid mendapatkan skor cukup baik (skor 3).'
    }
])
</script>

<style scoped>
th,
td {
    padding: 1.25rem !important;
}

th.pl-8,
td.pl-8 {
    padding-left: 2rem !important;
}

.animate-fadeIn {
    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(6px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
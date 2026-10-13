<script setup>
useSeoMeta({
    title: 'Portofolio PPL II (Praktik Mandiri)',
    description: 'Wadah dokumentasi Praktik Pengalaman Lapangan II (PPL II): Praktik pembelajaran mandiri, studi kasus kasuistik, dan asesmen komprehensif.'
})

const { data: ppl2List } = await useAsyncData('artefak-ppl2', () =>
    queryCollection('artefak').where('course', '=', 'ppl-2').all()
)

const roadmapPPL2 = [
    {
        title: 'Praktik Mengajar Mandiri Penuh',
        desc: 'Eksekusi pembelajaran secara independen dengan penguasaan manajemen kelas menyeluruh dan diferensiasi materi.',
        status: 'Tahap Berjalan'
    },
    {
        title: 'Studi Kasus Penanganan Peserta Didik',
        desc: 'Analisis diagnostik terhadap kesulitan belajar atau dinamika perilaku siswa dengan intervensi pedagogi terukur.',
        status: 'Akan Datang'
    },
    {
        title: 'Observasi Lingkungan & Budaya Sekolah',
        desc: 'Laporan analisis iklim sekolah, manajemen sarana prasarana, serta interaksi sosial komunitas pendidikan.',
        status: 'Akan Datang'
    },
    {
        title: 'Asesmen & Refleksi Mandiri Komprehensif',
        desc: 'Penyusunan instrumen evaluasi hasil belajar mandiri dan pelaporan kemajuan capaian belajar murid.',
        status: 'Akan Datang'
    }
]
</script>

<template>
    <div class="space-y-12 animate-fadeIn">

        <!-- Header -->
        <header class="text-center md:text-left space-y-4">
            <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <NuxtLink to="/mata-kuliah" class="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    &larr; Semua Mata Kuliah
                </NuxtLink>
                <span class="text-stone-300">•</span>
                <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Status: Praktik Mandiri (Fase Berjalan)
                </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                PPL II: Praktik Pembelajaran Mandiri
            </h1>
            <p class="text-stone-600 max-w-3xl text-base leading-relaxed">
                Ruang portofolio resmi untuk mengarsipkan luaran tugas, modul ajar mandiri, studi kasus bimbingan siswa, dan evaluasi hasil belajar selama masa Praktik Pengalaman Lapangan II.
            </p>
        </header>

        <!-- Banner Panduan Pengisian Bertahap -->
        <div class="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-0.5 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Wadah Terintegrasi
                </div>
                <h3 class="text-xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Siap Diisi Bertahap Sesuai Penugasan
                </h3>
                <p class="text-stone-600 text-sm leading-relaxed">
                    Setiap kali modul ajar atau laporan studi kasus PPL II kamu selesai disusun, cukup tambahkan berkas Markdown di folder konten dengan tag <code class="bg-white px-2 py-0.5 rounded text-teal-700 font-mono text-xs">course: "ppl-2"</code>. Dokumen akan langsung otomatis tampil di sini.
                </p>
            </div>
            <div class="flex-shrink-0">
                <span class="px-4 py-2 bg-white text-teal-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-teal-200 shadow-sm inline-block">
                    Format Siap Pakai
                </span>
            </div>
        </div>

        <!-- Daftar Artefak PPL II yang Sudah Diunggah -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                Artefak & Dokumen Pembelajaran Mandiri
            </h2>

            <div v-if="!ppl2List?.length" class="bg-white rounded-3xl border border-stone-200/70 p-10 text-center space-y-3">
                <div class="w-12 h-12 bg-stone-100 text-stone-400 rounded-2xl mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h3 class="text-lg font-bold text-stone-700">Belum Ada Artefak PPL II yang Dipublikasikan</h3>
                <p class="text-stone-500 text-sm max-w-md mx-auto">
                    Wadah telah siap. Berkas modul ajar dan laporan mandiri akan tampil otomatis di sini begitu penugasan PPL II diinput.
                </p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NuxtLink v-for="item in ppl2List" :key="item.path" :to="item.path"
                    class="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <h3 class="text-lg font-bold text-stone-800 group-hover:text-teal-700 transition-colors">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-600 text-sm mt-2 line-clamp-2">
                        {{ item.description }}
                    </p>
                </NuxtLink>
            </div>
        </section>

        <!-- Matriks Rencana Luaran PPL II -->
        <section class="space-y-6">
            <div>
                <h2 class="text-2xl font-bold text-stone-800" style="font-family: 'Lora', serif;">
                    Peta Target Luaran PPL II
                </h2>
                <p class="text-stone-500 text-sm">Capaian pembelajaran yang akan didokumentasikan sepanjang siklus praktik mandiri.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(item, idx) in roadmapPPL2" :key="idx"
                    class="p-6 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs">
                            0{{ idx + 1 }}
                        </span>
                        <span class="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                            {{ item.status }}
                        </span>
                    </div>
                    <h3 class="text-base font-bold text-stone-800">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-600 text-xs leading-relaxed">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </section>

    </div>
</template>


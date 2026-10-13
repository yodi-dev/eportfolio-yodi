<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)
const isCourseDropdownOpen = ref(false)
const isMobileCoursesOpen = ref(true) // default terbuka di mobile agar mudah diakses
const route = useRoute()

// Otomatis tutup menu jika rute berganti
watch(() => route.path, () => {
    isMobileMenuOpen.value = false
    isCourseDropdownOpen.value = false
})

const isCourseActive = computed(() => {
    return route.path.startsWith('/mata-kuliah')
})

const coursesSubmenu = [
    { label: 'Ringkasan Mata Kuliah', to: '/mata-kuliah', desc: 'Peta kurikulum & status 3 mata kuliah' },
    { label: 'PPL I (Terbimbing)', to: '/mata-kuliah/ppl-1', desc: 'Asistensi, 3 siklus & legalitas L7-L8' },
    { label: 'PPL II (Praktik Mandiri)', to: '/mata-kuliah/ppl-2', desc: 'Praktik mandiri & penanganan kasus' },
    { label: 'Seminar PPG', to: '/mata-kuliah/seminar', desc: 'Desain inovasi & jurnal refleksi' }
]

// Tutup dropdown desktop saat klik di luar
let handleOutsideClick = null
onMounted(() => {
    handleOutsideClick = (e) => {
        if (!e.target.closest('#course-dropdown-container')) {
            isCourseDropdownOpen.value = false
        }
    }
    document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
    if (handleOutsideClick) {
        document.removeEventListener('click', handleOutsideClick)
    }
})
</script>

<template>
    <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-stone-800 relative overflow-hidden"
        style="font-family: 'Plus Jakarta Sans', sans-serif;">

        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10">
        </div>

        <header
            class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60 shadow-sm transition-all duration-300">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">

                    <div class="flex-shrink-0 flex items-center">
                        <NuxtLink to="/" class="flex items-center gap-2.5 group">
                            <div class="flex items-center gap-1.5 p-1 bg-stone-50 rounded-lg border border-stone-200/80 group-hover:border-emerald-300 transition-colors">
                                <img src="/logo-uny.svg" alt="Logo UNY" class="w-6 h-6 object-contain" />
                                <img src="/logo-kemendikbud.svg" alt="Logo PPG Kemendikdasmen" class="w-6 h-6 object-contain" />
                            </div>
                            <div>
                                <span class="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent block leading-tight"
                                    style="font-family: 'Lora', serif;">
                                    E-Portfolio
                                </span>
                                <span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-stone-400 block -mt-0.5">
                                    PPG Calon Guru UNY
                                </span>
                            </div>
                        </NuxtLink>
                    </div>

                    <!-- Navigasi Desktop -->
                    <nav class="hidden md:flex items-center space-x-5 lg:space-x-7">
                        <NuxtLink to="/" exact
                            exact-active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Beranda
                        </NuxtLink>

                        <NuxtLink to="/profil"
                            active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Profil
                        </NuxtLink>

                        <!-- Dropdown Mata Kuliah -->
                        <div id="course-dropdown-container" class="relative">
                            <button @click="isCourseDropdownOpen = !isCourseDropdownOpen"
                                type="button"
                                :class="[
                                    'px-1 py-5 text-sm font-medium transition-colors flex items-center gap-1.5 focus:outline-none',
                                    isCourseActive || isCourseDropdownOpen ? 'text-emerald-600 font-semibold' : 'text-stone-500 hover:text-emerald-600'
                                ]">
                                Mata Kuliah
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    :class="['w-3.5 h-3.5 transition-transform duration-200', isCourseDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-stone-400']">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            <!-- Menu Popover Dropdown Desktop -->
                            <transition
                                enter-active-class="transition duration-150 ease-out"
                                enter-from-class="opacity-0 translate-y-1 scale-95"
                                enter-to-class="opacity-100 translate-y-0 scale-100"
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100 translate-y-0 scale-100"
                                leave-to-class="opacity-0 translate-y-1 scale-95">
                                <div v-if="isCourseDropdownOpen"
                                    class="absolute left-0 mt-1 w-64 rounded-2xl bg-white shadow-xl border border-stone-200/80 p-2 space-y-1 z-50">
                                    <NuxtLink v-for="sub in coursesSubmenu" :key="sub.to" :to="sub.to"
                                        @click="isCourseDropdownOpen = false"
                                        class="block px-3.5 py-2.5 rounded-xl hover:bg-stone-50 transition-colors group">
                                        <div class="text-xs font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                                            {{ sub.label }}
                                        </div>
                                        <div class="text-[11px] text-stone-400 mt-0.5 leading-tight">
                                            {{ sub.desc }}
                                        </div>
                                    </NuxtLink>
                                </div>
                            </transition>
                        </div>

                        <NuxtLink to="/artefak"
                            active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Artefak
                        </NuxtLink>

                        <NuxtLink to="/penilaian"
                            active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Penilaian
                        </NuxtLink>

                        <NuxtLink to="/visi"
                            active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Visi Guru
                        </NuxtLink>

                        <NuxtLink to="/refleksi"
                            active-class="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Refleksi
                        </NuxtLink>
                    </nav>

                    <!-- Tombol Hamburger Mobile -->
                    <div class="flex md:hidden items-center">
                        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                            type="button"
                            :aria-expanded="isMobileMenuOpen"
                            aria-label="Buka Menu Navigasi"
                            class="p-2 rounded-xl text-stone-600 hover:text-emerald-600 hover:bg-stone-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <!-- Drawer Navigasi Mobile -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <div v-if="isMobileMenuOpen" class="md:hidden border-b border-stone-200/80 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-5 space-y-1 shadow-lg max-h-[85vh] overflow-y-auto">
                    <NuxtLink to="/" exact
                        exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Beranda
                    </NuxtLink>

                    <NuxtLink to="/profil"
                        active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Profil
                    </NuxtLink>

                    <!-- Accordion Mata Kuliah Mobile -->
                    <div class="rounded-2xl border border-stone-100 overflow-hidden bg-stone-50/50">
                        <button @click="isMobileCoursesOpen = !isMobileCoursesOpen"
                            type="button"
                            class="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-stone-700">
                            <span>Mata Kuliah PPG</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                :class="['w-4 h-4 transition-transform', isMobileCoursesOpen ? 'rotate-180 text-emerald-600' : 'text-stone-400']">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div v-if="isMobileCoursesOpen" class="px-2 pb-2 space-y-1">
                            <NuxtLink v-for="sub in coursesSubmenu" :key="sub.to" :to="sub.to"
                                active-class="bg-emerald-100/60 text-emerald-800 font-bold"
                                @click="isMobileMenuOpen = false"
                                class="block px-3 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-emerald-700 hover:bg-white transition-colors">
                                {{ sub.label }}
                            </NuxtLink>
                        </div>
                    </div>

                    <NuxtLink to="/artefak"
                        active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Artefak
                    </NuxtLink>

                    <NuxtLink to="/penilaian"
                        active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Penilaian
                    </NuxtLink>

                    <NuxtLink to="/visi"
                        active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Visi Guru
                    </NuxtLink>

                    <NuxtLink to="/refleksi"
                        active-class="bg-emerald-50 text-emerald-700 font-semibold"
                        @click="isMobileMenuOpen = false"
                        class="block px-4 py-2.5 rounded-xl text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 transition-colors">
                        Refleksi
                    </NuxtLink>
                </div>
            </transition>
        </header>

        <main class="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 z-10">
            <slot />
        </main>

        <footer class="bg-white border-t border-stone-200 mt-auto z-10">
            <div class="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                    
                    <!-- Kolom 1: Identitas Institusi & Afiliasi -->
                    <div class="md:col-span-5 space-y-4 text-center md:text-left">
                        <div class="flex items-center justify-center md:justify-start gap-3">
                            <img src="/logo-uny.svg" alt="Logo Universitas Negeri Yogyakarta" class="h-11 w-11 object-contain" />
                            <img src="/logo-kemendikbud.svg" alt="Logo Kemendikdasmen Tut Wuri Handayani" class="h-11 w-11 object-contain" />
                            <div class="h-8 w-px bg-stone-200 mx-1"></div>
                            <div>
                                <p class="text-xs font-bold uppercase tracking-wider text-emerald-800">PPG Calon Guru</p>
                                <p class="text-[11px] text-stone-500 font-medium">Universitas Negeri Yogyakarta</p>
                            </div>
                        </div>

                        <p class="text-sm text-stone-600 leading-relaxed text-justify">
                            Portal e-portfolio resmi dokumentasi luaran akademik dan praktik pembelajaran <strong>Yodi Irawan</strong>. Menghimpun asesmen otentik, modul ajar multi-siklus, inovasi pedagogis, dan refleksi kritis program <strong>Pendidikan Profesi Guru (PPG) Calon Guru</strong>.
                        </p>

                        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-600">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>LPTK Penyelenggara: <strong>UNY (Yogyakarta)</strong></span>
                        </div>
                    </div>

                    <!-- Kolom 2: Navigasi Kurikulum -->
                    <div class="md:col-span-4 space-y-3">
                        <h3 class="text-xs font-bold uppercase tracking-widest text-stone-400">Navigasi Kurikulum</h3>
                        <ul class="space-y-2 text-sm">
                            <li>
                                <NuxtLink to="/mata-kuliah/ppl-1" class="text-stone-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                                    <span class="text-emerald-600 font-bold">&bull;</span> PPL I (Terbimbing & Legalitas L7-L8)
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/mata-kuliah/ppl-2" class="text-stone-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                                    <span class="text-emerald-600 font-bold">&bull;</span> PPL II (Praktik Mandiri & Studi Kasus)
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/mata-kuliah/seminar" class="text-stone-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                                    <span class="text-emerald-600 font-bold">&bull;</span> Seminar PPG (Desain Inovasi)
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/penilaian" class="text-stone-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                                    <span class="text-emerald-600 font-bold">&bull;</span> Lembar Penilaian Otentik (L7 & L8)
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/artefak" class="text-stone-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                                    <span class="text-emerald-600 font-bold">&bull;</span> Katalog Artefak & Modul Ajar
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Kolom 3: Portofolio Web Developer & Tautan Luar -->
                    <div class="md:col-span-3 space-y-3">
                        <h3 class="text-xs font-bold uppercase tracking-widest text-stone-400">Portofolio & Tautan</h3>
                        
                        <!-- Kartu Khusus Web Developer -->
                        <a href="https://awanbeo.my.id" target="_blank" rel="noopener noreferrer"
                            class="block p-3.5 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-800 text-white hover:from-emerald-900 hover:to-stone-900 transition-all duration-300 shadow-sm group border border-stone-700/50">
                            <div class="text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1 flex items-center justify-between">
                                <span>Web Developer</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p class="text-xs font-semibold text-stone-100">awanbeo.my.id</p>
                            <p class="text-[11px] text-stone-400 mt-1 leading-snug">Kunjungi portofolio teknologi & rekayasa web personal saya.</p>
                        </a>

                        <ul class="space-y-1.5 text-xs text-stone-500 pt-1">
                            <li>
                                <a href="https://ppg.kemendikdasmen.go.id" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-stone-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    <span>Portal PPG Kemendikdasmen</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://ppg.uny.ac.id" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-stone-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    <span>Direktorat PPG UNY</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- Bottom Bar / Hak Cipta -->
                <div class="mt-10 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-medium">
                    <p class="text-center sm:text-left">
                        &copy; {{ new Date().getFullYear() }} <strong>Yodi Irawan</strong>. Seluruh hak cipta dilindungi.
                    </p>
                    <p class="text-stone-400 text-center sm:text-right">
                        E-Portfolio Resmi Pendidikan Profesi Guru (PPG) Calon Guru &bull; Universitas Negeri Yogyakarta
                    </p>
                </div>
            </div>
        </footer>

    </div>
</template>
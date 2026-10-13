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
                        <NuxtLink to="/"
                            class="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            style="font-family: 'Lora', serif;">
                            E-Portfolio
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

        <footer class="bg-white/80 border-t border-stone-200 mt-auto backdrop-blur-sm z-10">
            <div class="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-stone-500 font-medium tracking-wide">
                    &copy; {{ new Date().getFullYear() }} Yodi Irawan - <a href="http://awanbeo.my.id" target="_blank"
                        rel="noopener noreferrer" class="hover:text-emerald-600 transition-colors">awanbeo.my.id</a>
                </p>
            </div>
        </footer>

    </div>
</template>
<template>
    <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-stone-800 relative overflow-hidden"
        style="font-family: 'Plus Jakarta Sans', sans-serif;">

        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10">
        </div>

        <header
            class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/50 shadow-sm transition-all duration-300">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">

                    <div class="flex-shrink-0 flex items-center">
                        <NuxtLink to="/"
                            class="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            style="font-family: 'Lora', serif;">
                            E-Portfolio
                        </NuxtLink>
                    </div>

                    <nav class="hidden md:flex space-x-8">
                        <NuxtLink to="/" activeClass="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Profil
                        </NuxtLink>
                        <NuxtLink to="/artefak"
                            activeClass="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Artefak
                        </NuxtLink>
                        <NuxtLink to="/penilaian"
                            activeClass="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Penilaian
                        </NuxtLink>
                        <NuxtLink to="/visi" activeClass="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Visi Guru
                        </NuxtLink>
                        <NuxtLink to="/refleksi"
                            activeClass="text-emerald-600 font-semibold border-b-2 border-emerald-600"
                            class="text-stone-500 hover:text-emerald-600 px-1 py-5 text-sm font-medium transition-colors">
                            Refleksi
                        </NuxtLink>
                    </nav>

                </div>
            </div>
        </header>

        <main class="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 z-10">
            <slot />
        </main>

        <footer class="bg-white/80 border-t border-stone-200 mt-auto backdrop-blur-sm z-10">
            <div class="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-stone-500 font-medium tracking-wide">
                    &copy; {{ new Date().getFullYear() }} Yodi Irawan - <a href="http://awanbeo.my.id" target="_blank"
                        rel="noopener noreferrer">awanbeo.my.id</a>
                </p>
            </div>
        </footer>

    </div>
</template>
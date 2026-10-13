<template>
    <section class="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div class="flex-1 space-y-6 text-center md:text-left">
            <!-- Institutional Affiliation Badge -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-stone-100/80 border border-stone-200/80 rounded-full shadow-xs">
                <div class="flex items-center gap-1.5">
                    <img src="/logo-uny.svg" alt="Logo UNY" class="w-5 h-5 object-contain" />
                    <img src="/logo-kemendikbud.svg" alt="Logo Kemendikdasmen" class="w-5 h-5 object-contain" />
                </div>
                <div class="h-3.5 w-px bg-stone-300"></div>
                <span class="text-xs font-semibold text-stone-700">
                    UNY &bull; PPG Calon Guru
                </span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold text-stone-800 tracking-tight"
                style="font-family: 'Lora', serif;">
                Halo, Saya <span class="text-emerald-600">Yodi Irawan</span>
            </h1>
            <p class="text-lg md:text-xl text-stone-600 leading-relaxed font-light">
                Mahasiswa PPG Calon Guru yang bersemangat untuk menjadi pendidik profesional. Saya bertekad
                menggabungkan keahlian pedagogi dan kemampuan teknis untuk menciptakan pembelajaran yang relevan dan
                berpusat pada peserta didik.
            </p>
        </div>

        <div class="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 group cursor-pointer">
            <div
                class="w-full h-full bg-stone-100 rounded-full border-8 border-white shadow-[0_20px_50px_rgb(0,0,0,0.07)] overflow-hidden flex items-center justify-center text-stone-400 group-hover:scale-105 transition-transform duration-500">

                <!-- Ganti span kemarin dengan tag img ini, sob -->
                <img src="/pp.png" alt="Foto Profil Mahasiswa" class="w-full h-full object-cover" />

            </div>
        </div>
    </section>
</template>
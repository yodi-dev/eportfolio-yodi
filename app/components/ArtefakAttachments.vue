<script setup>
defineProps({
    attachments: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['preview'])

const getBadgeStyle = (type) => {
    switch (type) {
        case 'pdf':
            return {
                bg: 'bg-rose-50 text-rose-700 border-rose-200',
                iconBg: 'bg-rose-100 text-rose-600',
                label: 'PDF Document'
            }
        case 'docx':
            return {
                bg: 'bg-blue-50 text-blue-700 border-blue-200',
                iconBg: 'bg-blue-100 text-blue-600',
                label: 'Word DOCX'
            }
        case 'pptx':
            return {
                bg: 'bg-orange-50 text-orange-700 border-orange-200',
                iconBg: 'bg-orange-100 text-orange-600',
                label: 'Slide PPT'
            }
        case 'xlsx':
            return {
                bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                iconBg: 'bg-emerald-100 text-emerald-600',
                label: 'Excel Data'
            }
        case 'image':
            return {
                bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                iconBg: 'bg-indigo-100 text-indigo-600',
                label: 'Gambar / Infografis'
            }
        case 'drive':
            return {
                bg: 'bg-amber-50 text-amber-800 border-amber-200',
                iconBg: 'bg-amber-100 text-amber-700',
                label: 'Google Drive'
            }
        case 'video':
            return {
                bg: 'bg-purple-50 text-purple-700 border-purple-200',
                iconBg: 'bg-purple-100 text-purple-600',
                label: 'Video Rekaman'
            }
        default:
            return {
                bg: 'bg-stone-50 text-stone-700 border-stone-200',
                iconBg: 'bg-stone-100 text-stone-600',
                label: 'Tautan Berkas'
            }
    }
}
</script>

<template>
    <section v-if="attachments && attachments.length > 0" class="my-10 p-6 md:p-8 bg-stone-50/80 rounded-3xl border border-stone-200/90 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-200/80">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-base font-bold text-stone-900 font-serif">Dokumen Asli & Berkas Bukti Fisik</h3>
                    <p class="text-xs text-stone-500">Perangkat pembelajaran otentik, instrumen, dan bukti dukung pelaksanaan.</p>
                </div>
            </div>
            <span class="text-xs font-semibold px-3 py-1 bg-white text-stone-600 rounded-full border border-stone-200 self-start sm:self-auto">
                {{ attachments.length }} Berkas Terlampir
            </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(file, idx) in attachments" :key="idx"
                class="bg-white p-5 rounded-2xl border border-stone-200 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group">
                
                <div class="space-y-2.5">
                    <div class="flex items-center justify-between gap-2">
                        <span :class="['text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border', getBadgeStyle(file.type).bg]">
                            {{ getBadgeStyle(file.type).label }}
                        </span>
                        <span v-if="file.badge" class="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                            {{ file.badge }}
                        </span>
                        <span v-else-if="file.size" class="text-[11px] text-stone-400 font-medium">
                            {{ file.size }}
                        </span>
                    </div>

                    <div>
                        <h4 class="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                            {{ file.title }}
                        </h4>
                        <p v-if="file.description" class="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                            {{ file.description }}
                        </p>
                    </div>
                </div>

                <!-- Action Button Group -->
                <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <!-- Tombol Pratinjau Khusus PDF & Gambar -->
                    <button v-if="file.type === 'pdf' || file.type === 'image'"
                        @click="emit('preview', file)"
                        type="button"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>Pratinjau Layar</span>
                    </button>

                    <!-- Tombol Aksi Utama (Unduh / Buka) -->
                    <a :href="file.url"
                        :download="file.type !== 'drive' && file.type !== 'video' && file.type !== 'link'"
                        :target="file.type === 'drive' || file.type === 'video' || file.type === 'link' ? '_blank' : '_blank'"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs ml-auto">
                        <svg v-if="file.type === 'drive' || file.type === 'video' || file.type === 'link'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <span>{{ file.type === 'drive' ? 'Buka di Drive' : file.type === 'video' ? 'Putar Video' : 'Unduh Berkas' }}</span>
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

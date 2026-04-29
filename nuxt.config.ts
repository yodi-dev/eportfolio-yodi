// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    experimental: {
      nativeSqlite: true
    }
  },
  future: {
    compatibilityVersion: 4, // Memastikan fitur Nuxt 4 aktif sepenuhnya
  }
})
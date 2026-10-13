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
  app: {
    head: {
      titleTemplate: '%s - E-Portfolio Yodi Irawan',
      title: 'E-Portfolio Yodi Irawan',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'E-Portfolio Resmi Pendidikan Profesi Guru (PPG) Prajabatan - Yodi Irawan. Menampilkan artefak pembelajaran, penilaian resmi, visi pendidik, dan refleksi pedagogis.' },
        { property: 'og:site_name', content: 'E-Portfolio Yodi Irawan' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' }
      ]
    }
  },
  future: {
    compatibilityVersion: 4, // Memastikan fitur Nuxt 4 aktif sepenuhnya
  }
})
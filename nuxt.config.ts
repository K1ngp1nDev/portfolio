// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: { classSuffix: '', preference: 'system', fallback: 'light' },
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    head: {
      title: 'Serhii Kulitskyi — Full-Stack Product Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Serhii Kulitskyi — full-stack product engineer & AI-native builder. I build dashboards, admin panels, e-commerce systems, AI assistants and internal tools — framework-agnostic.',
        },
        { property: 'og:title', content: 'Serhii Kulitskyi — Full-Stack Product Engineer' },
        {
          property: 'og:description',
          content: 'Practical web products: dashboards, admin panels, e-commerce, AI assistants and internal tools.',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
})

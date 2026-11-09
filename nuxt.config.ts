// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  components: [
    {
      path: '~/components/templates',
      pathPrefix: false
    }
  ],
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  devtools: { enabled: false }
})

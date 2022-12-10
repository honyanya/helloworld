// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt3-hello-world"
    }
  },
  modules: [
    '@nuxt/ui'
  ],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  }
})

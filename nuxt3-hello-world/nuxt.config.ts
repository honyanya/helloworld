// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: "nuxt3-hello-world",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ]
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

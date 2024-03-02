// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/algolia'],
  runtimeConfig: {
    notionSecret: process.env.NOTION_SECRET!
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true
  }
})

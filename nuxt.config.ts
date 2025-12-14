// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@pinia/nuxt'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  typescript: {
    strict: true
  },
  compatibilityDate: '2024-04-03'
})

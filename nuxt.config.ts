// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@pinia/nuxt'],
	css: ['@/assets/css/_global.css'],
})

export default {
  target: 'static',
  components: true,
  transition: 'fade',
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss'],
  head: {
    titleTemplate: '%s - Blog',
    htmlAttrs: { lang: 'en' },
    bodyAttrs: {
      class:
        'font-sans bg-white text-gray-900 text-sm md:text-base min-h-screen',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  css: ['~/assets/css/styles.css'],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
      },
    },
  },
}

export default {
  target: 'static',
  components: true,
  pageTransition: 'fade',
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
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap' },
    ]
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

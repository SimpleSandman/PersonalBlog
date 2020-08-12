import dotenv from 'dotenv';
dotenv.config();

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.SITE_NAME || 'wildbeard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:title', content: 'Preston Haddock | Wild Beard' },
      { name: 'og:description', content: 'Preston Haddock, Wild Beard, develops things for the web.' },
      { name: 'og:url', content: 'https://wildbeard.app' },
      { name: 'og:image', content: '/images/Le-Beard.png' },
      { name: 'description', content: 'Preston Haddock, AKA Wild Beard, develops things for the web.' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/Le-Beard.png' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/scss/sassy.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/posts',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

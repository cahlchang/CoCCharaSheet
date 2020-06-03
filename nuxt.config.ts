import { Configuration } from '@nuxt/types'

const colors = require('vuetify/es5/util/colors').default

const config: Configuration = {
  mode: 'universal',
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** TypeScript Config
  */
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/firebase',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
  ** Firebase module configuration
  ** Doc: https://firebase.nuxtjs.org/guide/getting-started/#requirements
  */
  firebase: {
    config: {
      apiKey: process.env.VUE_APP_apiKey || '',
      authDomain: process.env.VUE_APP_authDomain || '',
      databaseURL: process.env.VUE_APP_databaseURL || '',
      projectId: process.env.VUE_APP_projectId || '',
      storageBucket: process.env.VUE_APP_storageBucket || '',
      messagingSenderId: process.env.VUE_APP_messagingSenderId || '',
      appId: process.env.VUE_APP_appId || '',
      measurementId: process.env.VUE_APP_measurementId || '',
    },
    services: {
      auth: false,
    },
  },
  /*
  ** Build configuration
  */
  build: {
  },
}

export default config

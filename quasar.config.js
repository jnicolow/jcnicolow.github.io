import { configure } from 'quasar/wrappers'

export default configure((/* ctx */) => {
  return {
    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'material-icons',
      'mdi-v7'
    ],

    build: {
      target: { browser: ['es2022', 'firefox115', 'chrome115', 'safari14'] },
      vueRouterMode: 'hash',
      publicPath: '/',
      vitePlugins: []
    },

    devServer: {
      open: true
    },

    framework: {
      config: {
        dark: true,
        brand: {
          primary: '#ecc30b',
          secondary: '#539987',
          accent: '#0075f2',
          dark: '#503d3f',
          'dark-page': '#503d3f',
          positive: '#539987',
          negative: '#f87171',
          info: '#0075f2',
          warning: '#ecc30b'
        }
      },
      plugins: ['Dialog', 'Scroll']
    },

    animations: 'all',

    ssr: { pwa: false },

    pwa: {
      workboxMode: 'GenerateSW'
    }
  }
})

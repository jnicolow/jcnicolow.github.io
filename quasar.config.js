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
      open: true,
      // Avoid clash with another process often bound to 127.0.0.1:9000 (e.g. Python),
      // which makes http://localhost:9000/ return ERR_INVALID_HTTP_RESPONSE in the browser.
      port: 9100,
      strictPort: false
    },

    framework: {
      config: {
        dark: true,
        brand: {
          primary: '#F0D3A0',
          secondary: '#587252',
          accent: '#0075f2',
          dark: '#355431',
          'dark-page': '#355431',
          positive: '#9FBF97',
          negative: '#E9CC94',
          info: '#0075f2',
          warning: '#F0D3A0'
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

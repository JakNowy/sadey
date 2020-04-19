const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: '/my-first-project/', //todo: configure githubpages
  configureWebpack: {
    // plugins: [
    //   new PrerenderSPAPlugin({
    //     // Required - The path to the webpack-outputted app to prerender.
    //     staticDir: path.join(__dirname, 'dist'),
    //     // Required - Routes to render.
    //     routes: [ '/', '/about' ],
    //   })
    // ]
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}

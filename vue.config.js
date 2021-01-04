
module.exports = {
  publicPath: '/sadey/',
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
      rtlSupport: true,
      cssAddon: true,
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}

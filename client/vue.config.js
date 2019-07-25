const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      }),

      new webpack.DefinePlugin({
        '__BROWSER__': true
      })
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000'
      }
    }
  }
}

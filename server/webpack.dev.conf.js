const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    server: './src/server.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: './.cache/babel-loader',
              compact: false
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
  ],
  stats: {
    warningsFilter: warning => {
      // Critical dependency
      return RegExp("node_modules/express/lib/view.js").test(warning);
    }
  },
}

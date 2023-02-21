// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');
// basic webpack config

/* module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}; */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'none',
  entry: './src/LoaderEx/app.js',
  output: {
    filename: 'css.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:  {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
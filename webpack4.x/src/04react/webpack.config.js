const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// yarn add @babel/preset-react
// 解析 jsx 语法
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, './'),
  entry: './index.js',
  devServer: {
    contentBase: './index.js',
    open: true,
    port: 8888,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              chrome: '67'
            },
            useBuiltIns: 'usage'
          }], '@babel/preset-react'],
        }
      }
    ]
  }
}
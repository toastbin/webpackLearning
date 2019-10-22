const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // sourceMap 是一个映射关系, 源文件和打包后的文件的映射关系
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  // production
  // devtool: 'cheap-module-source-map'
  context: path.resolve(__dirname, './'),
  entry: './index.js',
  output: {
    filename: '[name].output.js',
    path: path.resolve(__dirname, './output')
  },
  devServer: {
    contentBase: './index.js',
    open: true,
    proxy: {
      // 代理
      '/api': 'http://localhost:3000'
    },
    port: 8088,
    // 开启热更新
    hot: true,
    hotOnly: true
  },
  // 可以在 webpack 运行到某一个时刻时帮你做一些事情
  plugins: [
    // 自动生成一个 html 文件, 并把打包生成的js自动引入到这个html文件中
    new HtmlWebPackPlugin({
      // 模板文件
      template: './index.html'
    }),
    // 下次打包时, 清理之前打包生成的文件
    new CleanWebpackPlugin(),
    // 热更新
    new webpack.HotModuleReplacementPlugin()
  ]
}
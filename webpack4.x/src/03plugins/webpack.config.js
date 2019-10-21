const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: './index.js',
  output: {
    filename: '[name].output.js',
    path: path.resolve(__dirname, './output')
  },
  // 可以在 webpack 运行到某一个时刻时帮你做一些事情
  plugins: [
    // 自动生成一个 html 文件, 并把打包生成的js自动引入到这个html文件中
    new HtmlWebPackPlugin({
      // 模板文件
      template: './index.html'
    }),
    // 下次打包时, 清理之前打包生成的文件
    new CleanWebpackPlugin()
  ]
}
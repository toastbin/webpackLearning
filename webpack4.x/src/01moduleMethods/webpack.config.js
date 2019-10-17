const path = require('path')

module.exports = {
  // 打包入口
  entry: './index.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, './output')
  }
}
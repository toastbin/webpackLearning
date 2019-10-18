const path = require('path')

module.exports = {
  mode: 'development',
  // 打包入口
  entry: {
    main: path.resolve(__dirname, './index.js'),
    es6module: path.resolve(__dirname, './src/es6/es6modules.js')
  },
  output: {
    filename: '[name].output.js',
    path: path.resolve(__dirname, './output')
  }
}
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './index.js'),
    fileLoader: path.resolve(__dirname, './src/fileLoader/index.js')
  },
  output: {
    filename: '[name].output.js',
    path: path.resolve(__dirname, './output')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: {
    fileLoader: './src/fileLoader/index.js',
    urlLoader: './src/urlLoader/index.js',
    styleLoader: './src/styleLoader/index.js',
    babel: './src/babel/index.js'
  },
  output: {
    filename: '[name].output.js',
    path: path.resolve(__dirname, './output')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 2048,
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.gif$/,
        use: {
          loader: 'file-loader',
          options: {
            // 保留原始文件名和后缀名 placeholder 占位符
            name: '[name]..[ext]',
            // 打包的时候放在指定文件夹内
            outputPath: 'images/',
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        // loader 执行顺序 从右到左
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              // 通过import 引入的css 都会依次执行后面的 一个loader
              importLoaders: 1,
              // 开启 css modules
              modules: true
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1",
            },
            useBuiltIns: "usage",
          }]]
        }
      }
    ]
  }
}
## Tree Shaking
+ 只打包引入的东西, 不打包多余的东西
+ 只针对**ES Module**
+ `optimazition`
  + ```
    // 开发环境 webpack.config.js, 还会保留代码, production环境下 不会保留, 也不需要进行下面的配置
    optimazition: {
      usedExports: true
    }

    // package.json
    "sideEffects": [
      "*.css"
    ]
    ```

## Development, Production
+ 使用`webpack-merge`进行配置的拆分合并
+ `merge(commonFig, devConfig)`


## webpack 和 code spliting
+ 代码分割和 webpack 无关
+ `SplitChunksPlugin`: 同步的代码分割
  ```
  optimazition: {
     splitChunks: {
      // async    只对异步代码生效
      // initial  只对同步代码生效
      // all      都生效
      chunks: 'async',
      // 大小大于这个字节, 才会做代码分割
      minSize: 30000,
      // 对每个chunk进行限制, 如果当前打包生成的chunk会进行二次分割, 一般来说不进行配置
      maxSize: 0,
      // 当一个模块被使用至少多少次的时候才进行代码分割
      minChunks: 1,
      // 同时加载的模块数, 最多是5个
      maxAsyncRequests: 5,
      // 入口文件进行加载的时候, 入口文件的代码分割, 最多只能分割三个
      maxInitialRequests: 3,
      // 文件生成的时候文件名的连接符 ~
      automaticNameDelimiter: '~',
      // 文件名最大长度
      automaticNameMaxLength: 30,
      // 打包生成的文件名从 cacheGroups 里找
      name: true,
      cacheGroups: {
        // 发现是从 node_modules 里引入的, 就打包到一起
        // 例如 node_nodules~main.js
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          // 权重
          // 一个要打包的文件 符合 node_modules 也符合 default
          // 按照 priority的权重大小来决定打包到哪个文件里去
          priority: -10,
          // ~后面的去掉
          filename: 'node_modules.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          // 如果一个模块已经被打包过, 会直接去复用之前打包过的模块
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
  }
  ```
+ `import('xxx').then()`: 动态的异步导入, 目前只是实验性的方案, 所以需要借助`@babel/plugin-syntax-dynamic-import`
  ```
    // 使用 babel 将这种语法编译成可用
    // 配置 babel
    {
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }

    // 异步引入
    function getCom() {
      // 魔法注释 给该异步引入的代码起名字
      return import(/* webpackChunkName:'lodashChunk' */ 'lodash').then(({ default: _ }) => {
        // do something
      })
    }
  ```

## lazyLoading 懒加载
+ 异步加载, 使用到的时候才会进行加载 

## chunk
+ 打包后的的代码就是`chunk`

## 打包分析, Preloading, Prefetching
+ `github/webpack/analyse`
+ 代码使用率, 多写异步代码
+ `Preloading`, 预加载
  + 利用, `magic comment`
  + `import(/* webpackLoad: true */ 'LoginModal');`
  + 和主业务文件一起加载
+ `Prefetching`
  + `import(/* webpackPrefetch: true */ 'LoginModal');`
  + 主要的js加载完毕之后, 网络带宽已经空闲下来就开始加载, 预先加载, 不用等到用的时候才开始加载, 而是用之前已经预先加载好

## CSS文件代码分割
+ `filename`, `chunkFilename`
  + 入口文件走`filename`
  + 被入口文件加载的间接js文件是一个chunk, 名字会走`chunkFilename`
+ not css in js
  + `MiniCssExtractPlugin`, 不支持 HMR
  + ```
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    module.exports = {
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                // 使用这个插件的 loader 生成单独的css文件
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  publicPath: '../',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              'css-loader',
            ],
          },
        ],
      },
    };
    ```

## webpack 与 浏览器缓存(Caching)
+ ```
  optimization: {
    runtimeChunk: {
      // 提取 mainfest 
      name: 'runtime'
    }
  }
  ```
## Shimming
+ `webpack.ProvidePlugin()`
  + ```
    plugins: {
      // 如果一个模块中使用了 $, 会自动的引入 jquery 这个模块
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    }
    ```

## 环境变量的使用
+ `env`: `webpack --env.production`, 在代码里可以使用`env`这个环境变量, 默认为`true`



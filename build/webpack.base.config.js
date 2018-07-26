const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const util = require('./util')
const resolve = util.resolve
const assetsPath = util.assetsPath
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'tb-skeleton.js',
    library: "tb-skeleton",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use:[
          {
            loader: 'babel-loader',
            options: {
            },
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(html|tpl)$/,
        use: 'html-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};

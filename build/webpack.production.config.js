const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require('./webpack.base.config.js')
const util = require('./util')
const resolve = util.resolve
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'tb-skeleton.min.js',
    library: "tb-skeleton",
    libraryTarget: "commonjs2",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "css-loader", "postcss-loader", "sass-loader"
        ]
      },
    ],
  },
  plugins: [
  ]
})

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const util = require('./util');
const resolve = util.resolve;

module.exports = merge(webpackBaseConfig, {
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'tb-skeleton.noextra.js',
    library: "tb-skeleton",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          }
        ],
      },
    ],
  }
})

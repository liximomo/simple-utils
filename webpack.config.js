'use strict';

var webpack = require('webpack')

var env = process.env.NODE_ENV
var config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {
                modules: false // for webpack2
              }],
              'stage-0'
            ],
            plugins: [
              ['transform-runtime', {
                helpers: true, // defaults to true
                polyfill: false, // defaults to true
                regenerator: false // defaults to true
              }],
            ]
          }
        }],
      },
    ]
  },
  output: {
    library: 'SimpleUtil',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config

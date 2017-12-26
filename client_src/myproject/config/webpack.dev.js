var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://10.0.0.172:7777/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    port: 7777,
    host: '10.0.0.172',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/service': {
        target: 'http://labtest.gofrugal.com',
        secure: false,
        changeOrigin: true,
      },
      //    outputPath: helpers.root('dist')
    },
    outputPath: helpers.root('dist')
  }
});

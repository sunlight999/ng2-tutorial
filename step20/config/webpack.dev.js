var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ngtools = require('@ngtools/webpack');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ngtools.AotPlugin({
            tsConfigPath: helpers.root('tsconfig-aot.json'),
            entryModule: helpers.root('src/app/app.module#AppModule')
        }),
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    contentBase: helpers.root('dist'),
    compress: true,
    historyApiFallback: true,
    stats: 'minimal'
  }
});

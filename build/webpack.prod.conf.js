const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // MINI CSS
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../libs'),
    filename: 'index.js',
    libraryTarget: 'umd',
    publicPath: config.build.assetsPublicPath
  },
  externals: {
    antd: 'antd',
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      filename: 'index.css'
      // chunkFilename: '[id].[chunkhash].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            },
            normalizeUnicode: false
          }
        ]
      },
      canPrint: true
    }),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'Webpack Build',
      logo: path.resolve('./img/favicon.png'),
      suppressSuccess: true
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  mode: 'production'
});

module.exports = webpackConfig;

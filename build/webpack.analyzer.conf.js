const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildWebpackConfig = require('./webpack.prod.conf');

const webpackConfig = merge(buildWebpackConfig, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});

module.exports = webpackConfig;

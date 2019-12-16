const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const portfinder = require('portfinder');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

process.env.NODE_ENV = 'development';
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
	entry: {
		app: './examples/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		proxy: config.dev.proxyTable,
		compress: true,
		inline: true,
		hot: true,
		overlay: true,
		open: true,
		noInfo: true,
		historyApiFallback: true
	},
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html',
			inject: true
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			// filename: devMode ? '[name].css' : '[name].[hash].css',
			// chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			filename: 'index.css',
			chunkFilename: '[id].css'
		}),
		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.build.assetsSubDirectory,
				ignore: [ '.*' ]
			}
		])
	],
	mode: 'development'
});

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port;
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err);
		} else {
			// publish the new Port, necessary for e2e tests
			process.env.PORT = port;
			// add port to devServer config
			devWebpackConfig.devServer.port = port;

			// Add FriendlyErrorsPlugin
			devWebpackConfig.plugins.push(
				new FriendlyErrorsPlugin({
					compilationSuccessInfo: {
						messages: [
							`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`
						]
					},
					onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
				})
			);

			resolve(devWebpackConfig);
		}
	});
});

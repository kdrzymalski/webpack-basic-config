const path = require('path');
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					'sass-loader'
				],
			}
		],
	},
	devtool: 'source-map',
	devServer: {
		port: 3001,
		hot: true,
	},
});

const path = require('path');
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash:8].js',
		chunkFilename: '[id].[hash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					'sass-loader'
				],
			},
		],
	},
	devtool: 'inline-source-map',
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
		],
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
});

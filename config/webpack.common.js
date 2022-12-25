const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', 'jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack Instytut Fullstack",
			template: path.resolve(__dirname, "../public/index.html")
		})
	],
};

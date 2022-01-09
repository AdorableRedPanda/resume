const common = require("./common");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	...common,

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../deploy')
	},

	mode: 'development',
	devtool: 'eval-source-map',

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './404.html',
		})
	]
}
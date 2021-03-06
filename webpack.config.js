const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	target: 'node',
	devtool: 'inline-source-map',
	entry: './index.js',
	output: {
		path: 'dist',
		filename: 'macos_tabs.lib.js',
		library: 'macOSTabs',
		libraryTarget: 'commonjs2'
	},
	externals: [nodeExternals()],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules',
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	]
}

const webpack = require('webpack')

const devtool = (process.env.NODE_ENV === 'production') ? 'cheap-module-source-map' : 'eval'

module.exports = {
	devtool,
	entry: './index.js',
	output: {
		path: 'dist',
		filename: 'macos_tabs.lib.js',
		library: 'macOSTabs',
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
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
		extensions: ['', '.js', '.jsx', '.json'],
		packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
}

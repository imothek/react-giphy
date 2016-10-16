const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		'path': './public/js',
		'filename': 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /masonry|imagesloaded/,
				loader: 'imports?define=>false&this=>window'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    })
	]
}
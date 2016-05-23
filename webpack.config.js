var webpack = require('webpack');

module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: 'style-loader!css-loader'
		}]
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	devtool: 'eval',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
		publicPath: '/assets/',
		historyApiFallback: true,
		sourceMapFilename: 'bundle.js.map'
	},
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress: { warnings: false }
	// 	})
	// ]
};
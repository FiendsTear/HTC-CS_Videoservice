const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			},
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
	},
	entry: './src/index.js',
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 3000
	},
	output: {
		path: __dirname + '/build'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Videoservice',
			template: 'src/index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/assets', to: './assets' }
			]
		})
	]
};
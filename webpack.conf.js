const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist/assets')
	},
    plugins: [
        new ExtractTextPlugin("app.css")
    ],
    externals: {
        angular: 'angular'
    },
    module: {
        loaders: [
            { 
                test: /\.html$/,
                loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html-loader'
            },
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                }),
            },
            {
				test: /\.(eot|png|jpg|jpeg|gif|woff|woff2|svg|ttf)$/, 
				loader: 'url-loader?limit=10000'
			}
        ]
    }
};

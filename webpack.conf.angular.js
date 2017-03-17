const path = require('path');

module.exports = {
	entry: './src/angular.js',
	output: {
		filename: 'angular.js',
		path: path.resolve(__dirname, 'dist/assets')
	},
	resolve: {
		alias: {
			'node_modules': path.join(__dirname, 'node_modules'),
			'bower_modules': path.join(__dirname, 'bower_modules'),
		}
	}	
};

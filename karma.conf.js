var webpack = require('webpack');
var webpackConfig = require(__dirname+'/webpack.config');
webpackConfig.devtool = 'inline-source-map';
module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['tests.webpack.js'],
		plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
		preprocessors: { 'tests.webpack.js': ['webpack','sourcemap']},
		reporters: ['dots'],
		singleRun: true,
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
}
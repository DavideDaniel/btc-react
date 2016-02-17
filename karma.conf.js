var webpackConfig = require('./webpack.config');

module.exports = function(config){
	config.set({
		basePath: '',
    browsers: [ 'PhantomJS' ],
    files: [
      'test/testLoader.js'
    ],
		port: 8080,
		captureTimeout: 30000,
		frameworks: ['mocha', 'chai'],
		client: {
			mocha: {}
		},
		singleRun: true,
		reporters: [ 'mocha', 'dots' ],
		preprocessors: {
      'test/testLoader.js': [ 'webpack', 'sourcemap' ]
    },
		webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
	})
}
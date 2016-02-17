'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const allowedEnvs = ['dev', 'dist', 'test'];
var env;
if(args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

const configs = {
  base: require(path.join(__dirname, 'config/base')),
  dev: require(path.join(__dirname, 'config/dev')),
  dist: require(path.join(__dirname, 'config/dist')),
  test: require(path.join(__dirname, 'config/test'))
};

function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  return configs[validEnv];
}

module.exports = buildConfig(env);
//
// module.exports = {
// 	entry: "./app/App.js",
// 	output: {
// 		filename: "public/bundle.js"
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.jsx?$/,
// 			exclude: /(node_modules|bower_components)/,
// 			loader: "babel",
// 			query: {
// 				presets: ['react','es2015']
// 			}
// 		}]
// 	}
// }

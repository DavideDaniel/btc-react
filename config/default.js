'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const defaultPort = 8000;
const autoprefixer = require('autoprefixer');
const precss = require('precss');

function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: defaultPort,
  postcss: function(){
    return {
        defaults: [autoprefixer,precss]
    }
  },
  getDefaultModules: getDefaultModules
};

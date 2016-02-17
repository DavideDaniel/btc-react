/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), config.devServer).listen(config.port,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log('Dev server listening at http://127.0.0.1:'+config.port+'/webpack-dev-server/');
});

// import express from 'express';
// import React from 'react';
// import {renderToString} from 'react-dom/server';
// import {match,RouterContext} from 'react-router';
// import routes from './app/config/routes';
//
// const app = express();
//
// app.use((req,res)=>{
//
// 	match({routes, location: req.url}, (error, redirectLocation, renderProps)=>{
// 		if(error){
// 			res.status(500).send(error.message);
// 		} else if (redirectLocation) {
// 			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
// 		} else if (renderProps) {
// 			res.status(200).send(renderToString(<RouterContext {...renderProps}/>))
// 		} else {
// 			res.status(404).send('Not Found')
// 		}
//
// 	});
//
// });
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, () => {
// 	console.log('Server listening on port ', PORT);
// });

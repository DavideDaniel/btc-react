// home, search, OR, About, FAQ

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import {Router, Route, IndexRoute, NotFoundRoute, DefaultRoute, Link, hashHistory} from 'react-router';


export default (
  <Route path="/" component={Main}>
    <Route path="about/" component={About} />
    <IndexRoute component={Home} />
  </Route>
);

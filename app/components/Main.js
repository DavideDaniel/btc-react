import React from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Search from './Search';
import {Router, Route, NotFoundRoute, DefaultRoute, Link, browserHistory} from 'react-router';


const Main = ({children, history}) => {
	return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						<Menu items={[
        			< Link to = "/" > Home < /Link>,
        			< Link to = "about/" > About < /Link>
      			]}/>
          </div>
        </nav>
        <div className="container">
					< Search />
          {children}
        </div>
      </div>
    );
}

export default Main;

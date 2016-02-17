import React from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import SearchForm from './SearchForm';
import Footer from './Footer';
import {Router, Route, NotFoundRoute, DefaultRoute, Link, hashHistory} from 'react-router';


const Main = ({children, history}) => {
	return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
						<Menu items={[
        			< Link to = "/" > Home < /Link>,
        			< Link to = "about/" > About < /Link>
      			]}/>
          </div>
        </nav>
        <div className="container">
					< SearchForm placeholder={"Search for candidate, measure or PAC name"}/>
          {children}
        </div>
				<Footer />
      </div>
    );
}

export default Main;

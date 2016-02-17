import React from 'react';
import Menu from './Menu';
import SearchForm from './SearchForm';
import Footer from './Footer';
import {Link} from 'react-router';


const Main = ({children}) => {
	return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
						<Menu items={[
        			<Link to = "/" activeClass="active"> Home </Link>,
        			<Link to = "about/" activeClass="active"> About </Link>
      			]}/>
          </div>
        </nav>
        <div className="container">
					<SearchForm placeholder={"Search for candidate, measure or PAC name"}/>
          {children}
        </div>
				<Footer />
      </div>
    );
}

export default Main;

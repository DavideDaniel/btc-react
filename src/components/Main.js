import React from 'react';
import Menu from './Menu';
import SearchForm from './SearchForm';
import Footer from './Footer';
import {Link} from 'react-router';


const Main = ({children}) => {
	return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
					<div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navLinks" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
			<Link to = "/" className="navbar-brand"> Behind <span>the</span> Curtain </Link>
    </div>

			<div className="collapse navbar-collapse id="navLinks"">
						<Menu className="navbar-left"items={[
        			<Link to = "search" activeStyle={{text-decoration:'underline'}}> Search </Link>,
        			<Link to = "oregon" activeStyle={{text-decoration:'underline'}}> Oregon </Link>,
							<Link to = "campaigns" activeStyle={{text-decoration:'underline'}}> Campaigns </Link>,
							<Link to = "donors" activeStyle={{text-decoration:'underline'}}> Donors </Link>,
							<Link to = "candidates" activeStyle={{text-decoration:'underline'}}> Candidates </Link>,
        			<Link to = "about" activeStyle={{text-decoration:'underline'}}> About </Link>,
							<Link to = "faq" activeStyle={{text-decoration:'underline'}}> FAQ </Link>
      			]}/>
          </div>
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

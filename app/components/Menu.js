import React from 'react';
import {Router, Route, NotFoundRoute, DefaultRoute, Link, browserHistory} from 'react-router';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: 0
		}
	}

	clicked(index){
		this.setState({
			focused: index
		});
	}

	render(){
		var self = this;
		return (
      <ul className="Menu-bar nav navbar-nav navbar-right">{this.props.items.map((item, index) => {
          var style = '';
          if (self.state.focused == index) {
            style = 'focused';
          }
          return (<li className={style} onClick={self.clicked.bind(self, index)}>{item} < /li>
          );
        })
      }
    	<	/ul>
		);
	}
}

export default Menu;

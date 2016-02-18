import React, {PropTypes} from 'react';

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
      <ul className="nav navbar-nav navbar-right">{this.props.items.map((item, index) => {
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

Menu.PropTypes = {
	items: PropTypes.element.isRequired
}
export default Menu;

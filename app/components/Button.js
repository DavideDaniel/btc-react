// not being used yet.. need more info if needed
import React, { PropTypes } from 'react'

class Button extends React.Component {
  constructor(){
    super()
    this.state = {
      name : '',
      type: '',
      value: '',
      className: 'btn'
    }
  }

  componentWillMount() {
    console.log(this.props.params);
  }

  render () {
    return(
      <button className={this.props.params.className} type={this.props.params.type}>${this.props.params.name}</button>
    );
  }
}

export default Button;

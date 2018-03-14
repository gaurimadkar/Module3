import React from 'react';
import { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <button type="button" className="btn btn-primary">{this.props.ButtonName}</button>        
      </div>
    );
  }
}

export default Button;

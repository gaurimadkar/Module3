import React from 'react';
import { Component } from 'react';

class Button extends Component {

  render() {   
    return (
      <div className="inlineDiv">
         <button type="button" className="btn btn-primary">{this.props.ButtonName}</button>
      </div>
    );
  }
}

export default Button;

import React from 'react';
import { Component } from 'react';

class Button extends Component {

  render() {   
    return (
      <div class="inlineDiv">
         <button type="button" classname="btn btn-primary">{this.props.ButtonName}</button>
      </div>
    );
  }
}

export default Button;

import React from 'react';
import { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    alert("1");
    //this.props.GetData();
  };
 
  render() {   
    return (
      <div class="inlineDiv">
         <button type="button" className="btn btn-primary" onClick={this.handleClick}>{this.props.ButtonName}</button>
      </div>
    );
  }
}

export default Button;

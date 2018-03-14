import React from 'react';
import { Component } from 'react';


class Gkeval extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div className="header">
        Gkeval
        </div>
      </form>

    );
  }
}

export default Gkeval;

import React from 'react';
import { Component } from 'react';


class L1eval extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div className="header">
        L1
        </div>
      </form>

    );
  }
}

export default L1eval;

import React from 'react';
import { Component } from 'react';


class Dashboard extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div className="header">
        Dashboard
        </div>
      </form>

    );
  }
}

export default Dashboard;

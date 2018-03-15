import React from 'react';
import { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </div>


    );
  }
}

export default DropDown;

import React from 'react';
import { Component } from 'react';


class Label extends Component {
  constructor(props) {
    super(props);

  } 

  render() {
    const {LabelName} = this.props;
    return (
      <form>
        <div>
          <label>{LabelName}</label>
        </div>
      </form>

    );
  }
}

export default Label;

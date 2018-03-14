import React from 'react';
import { Component } from 'react';

class InputNumber extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <input type="number" className="form-control" />
      </div>
    );
  }
}

export default InputNumber;

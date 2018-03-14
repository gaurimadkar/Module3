import React from 'react';
import { Component } from 'react';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className,placeholder} = this.props;
    return (
      <div>
        <input type="text"
          className={"col-" + className}
          placeholder={placeholder} />      
      </div>
    );
  }
}

export default TextBox;

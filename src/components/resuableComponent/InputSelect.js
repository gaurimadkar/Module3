import React from 'react';
import { Component } from 'react';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    let data = this.props.selectedOption;
    return (
        <div>
          <select className="dropdown-header form-control"  name={this.props.name}
          onChange={this.props.onNameChange} >
            {data.map(option => {
              return <option value={option} key={option} >{option}</option>
            })}
          </select>
        </div>
    )
  }
}

export default InputSelect;

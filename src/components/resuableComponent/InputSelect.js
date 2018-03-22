import React from 'react';

class InputSelect extends React.Component {
   onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let data = this.props.selectedOption;
    return (
        <div>
          <select className="dropdown-header form-control input-select-custom"  name={this.props.name}
          onChange={this.props.onNameChange} required>
            {data.map(option => {
              return <option value={option} key={option} >{option}</option>
            })}
          </select>
        </div>
    )
  }
}

export default InputSelect;

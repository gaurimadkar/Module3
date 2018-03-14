import React from 'react';
import { Component } from 'react';


const InputSelect = (props) => (  
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <select
      name={props.name}
      value={props.selectedOption}
      className="dropdown-header">
      <option value="">{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option
            key={opt}
            value={opt}>{opt}</option>
        );
      })}
    </select>
  </div>
);

export default InputSelect;

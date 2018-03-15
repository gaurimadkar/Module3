import React from 'react';
import { Component } from 'react';


const InputSelect = (props) => (
  <div>   
    <select
      name={props.name}
      value={props.selectedOption}
      className="dropdown-header form-control">
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

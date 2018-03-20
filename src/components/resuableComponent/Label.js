import React from 'react';

const Label = (props) => (
  <div>
    <label name={props.name}
          onChange={props.onNameChange}>{props.LabelName}</label>
  </div>
);


export default Label;

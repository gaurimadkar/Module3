import React from 'react';

const InputText = (props) => (
  <div className="form-group">
    <input className="form-control" 
    type={'text'} 
    name={props.name}
    onChange={props.onNameChange} 
    value={props.value}
    placeholder={props.PlaceHolder} required/>
  </div>
);

export default InputText;

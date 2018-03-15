import React from 'react';
import { Component } from 'react';


const InputText = (props) => (
  <div className="form-group">
    <input className="form-control" 
    type={'text'} 
    name={props.name}
    onChange={props.onNameChange} 
    placeholder={props.PlaceHolder} />
  </div>
);

export default InputText;

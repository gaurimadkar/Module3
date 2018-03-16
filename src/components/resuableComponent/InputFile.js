import React from 'react';
import { Component } from 'react';


const InputFile = (props) => (
  <div className="form-group">
    <input className="form-control" 
    type={'file'} 
    name={props.name}
    onChange={props.onNameChange} 
    placeholder={props.PlaceHolder} required/>
  </div>
);

export default InputFile;

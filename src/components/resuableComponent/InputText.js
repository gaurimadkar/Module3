import React from 'react';
import { Component } from 'react';


const InputText = (props) => (
  <div className="form-group">
    <input className="form-control" type={'text'} placeholder={props.placeholder} />
  </div>
);

export default InputText;

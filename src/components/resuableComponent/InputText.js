import React from 'react';
import { Component } from 'react';


const InputText = (props) => (
  <div className="form-group">
    <input
      className={"col-sm-"+props.className}
      type={'text'}
      placeholder={props.placeholder} />
  </div>
);

export default InputText;

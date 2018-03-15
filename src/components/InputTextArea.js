import React from 'react';
import { Component } from 'react';


const InputTextArea = (props) => (
  <div className="inlineDiv"> 
    <textarea
      className="form-input form-control"
      rows={props.rows}
      placeholder={props.placeholder} />
  </div>
);

export default InputTextArea;

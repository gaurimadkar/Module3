import React from 'react';
import { Component } from 'react';


const InputTextArea = (props) => (  
  <div className="form-group">
  <label className="form-label">{props.title}</label>
  <textarea
    className="form-input"
    rows={props.rows}
    placeholder={props.placeholder} />
</div>
);

export default InputTextArea;

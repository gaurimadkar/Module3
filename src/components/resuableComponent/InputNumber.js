import React from 'react';
import { Component } from 'react';

const InputNumber = (props) => (
  <div>  
     <input type="number" className="form-control" placeholder={props.placeholder}/>   
  </div>
);
export default InputNumber;

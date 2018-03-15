import React from 'react';
import { Component } from 'react';

const TextBox = (props) => (
  <div>
    <input  className="form-control"  type="text" placeholder={props.placeholder} />
  </div>
);


export default TextBox;

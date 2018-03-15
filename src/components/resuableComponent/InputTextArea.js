import React from 'react';
import { Component } from 'react';


const InputTextArea = (props) => (
  <div>
  <textarea className="form-control" rows={props.rows} placeholder={props.placeholder} />
</div>
);

export default InputTextArea;

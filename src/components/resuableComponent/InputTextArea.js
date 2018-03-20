import React from 'react';

const InputTextArea = (props) => (
  <div>
  <textarea className="form-control" rows={props.rows} 
  placeholder={props.placeholder} name={props.name}
  onChange={props.onNameChange}/>
</div>
);

export default InputTextArea;

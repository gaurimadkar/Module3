import React from 'react';
import { Component } from 'react';

// class InputNumber extends Component {

//   render() {
//     return (
//       <div>
//         <input type="number" className="form-control" />
//       </div>
//     );
//   }
// }
const InputNumber = (props) => (
  <div>  
     <input type="number" className="form-control" placeholder={props.placeholder}/>   
  </div>
);
export default InputNumber;

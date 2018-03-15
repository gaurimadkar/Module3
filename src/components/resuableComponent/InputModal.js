import React from 'react';
import { Component } from 'react';
import Modal from 'react-modal';
import Gkeval from '../Gkeval';
import L1eval from '../L1eval';



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '68%',
    border                : 'none'
  }
};

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
       modalIsOpen: false,
       comp: props.compName
    };

    this.handleopenModal = this.handleopenModal.bind(this);   
    this.handlecloseModal = this.handlecloseModal.bind(this);
  }

  handleopenModal() {
    this.setState({showModal: true});   
  }
  
  handlecloseModal() {
    this.setState({showModal: false});  
  }

  render() {
      let data = (this.state.comp == 'Gkeval') ? <Gkeval/>:<L1eval/>;
    return (
      <div>
         <button onClick={this.handleopenModal} id='btnopenModel' >Gk Evaluation</button>
         <Modal
          isOpen={this.state.showModal}         
          onRequestClose={this.handlecloseModal}
          style={customStyles}
          contentLabel="Modal">    
          {data}                
        </Modal>
      </div>
    
    );
  }
}

export default InputModal;

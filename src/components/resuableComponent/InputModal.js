import React from "react";
import { Component } from "react";
import Modal from "react-modal";
import Gkeval from "../Gkeval/Gkeval";
import L1eval from "../L1eval/L1eval";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    border: "none",
    padding:"0",
    margin:"0"
  }
};

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {    
    };
    this.handleModalState = this.handleModalState.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  dataToInputModal = (obj) => {   
    this.props.transferDataToDashboard(obj);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.modalIsOpen !== nextProps.modalIsOpen) {
      this.handleModalState(nextProps);
    }
  }
  handleModalState(nextProps) {
    this.setState({ showModal: !this.state.showModal, compName: nextProps.compName, data: nextProps.data });
  }
  render() {
    let data = this.state.compName === "GK" ? <Gkeval data={this.state.data} handleCloseModal={this.props.handleCloseModal}/> : <L1eval data={this.state.data} handleCloseModal={this.props.handleCloseModal} transferDataToInputModal={this.dataToInputModal.bind(this)} />;
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.props.handleCloseModal}        
          style={customStyles}
          contentLabel="Modal"
        >
          {data}
        </Modal>
      </div>
    );
  }
}

export default InputModal;

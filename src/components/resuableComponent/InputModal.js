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
    width: "68%",
    border: "none"
  }
};

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      compName: props.compName,
      data : null
    };

    this.handleModalState = this.handleModalState.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.modalIsOpen !== nextProps.modalIsOpen) {
      this.handleModalState(nextProps);
    }
  }

  handleModalState(nextProps) {
    this.setState({ showModal: !this.state.showModal, compName  : nextProps.compName, data : nextProps.data });
  }

  render() {
    let data = this.state.compName === "GK" ? <Gkeval data={this.state.data}/> : <L1eval data={this.state.data} />;
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

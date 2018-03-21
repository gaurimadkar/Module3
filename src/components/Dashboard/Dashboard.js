import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from "../resuableComponent/InputModal";
import Constants from "../../common/Constants";
import L1eval from "../L1eval/L1eval";
import Gkeval from "../Gkeval/Gkeval";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.cellButtonForL1 = this.cellButtonForL1.bind(this);
    this.cellButtonForGK = this.cellButtonForGK.bind(this);
    this.state = {
      list: [],
      isOpenModal: false,
      selectedCandidate: {},
      compName: null
    };
  }

  handleopenModal(row, buttonName) {
    this.setState({ isOpenModal: true, selectedCandidate: row, compName: buttonName });
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false, selectedCandidate: {}, compName: null });
  }

  cellButtonForL1(cell, row) {
    if(row.l1evaluate === "Rejected" || row.l1evaluate === "Selected"){
      return <label>{row.l1evaluate}</label>;
    }else{
      return <button onClick={() => this.handleopenModal(row, 'L1')}>Fill L1 Form</button>;
    }
  }

  cellButtonForGK(cell, row) {
    if(row.l1evaluate === "Selected"){
      return <button onClick={() => this.handleopenModal(row, 'GK')}>Fill GK Form</button>;
    }
  }

  dataToDashboard = (recivedObjData) => {   
    let updateRowData = this.state.list.find(filterData => filterData.id === recivedObjData.id);
    updateRowData.evaluateresult = recivedObjData.evaluateresult;
    updateRowData.seniority =  recivedObjData.seniority;
    updateRowData.feedback= recivedObjData.feedback;
    updateRowData.l1result= recivedObjData.l1result;
    updateRowData.evaluate= recivedObjData.evaluate;
  }

  componentDidMount = () => {
    let URL = Constants.URL;
    var self = this;
    fetch(URL)
      .then(function (response) {
        let myData = response.json();
        return myData;
      })
      .then(function (json) {
        self.setState({ list: json });
      });
  };

  render() {
    return (
      <div className="col-md-12 demo-div heading-section">
        <BootstrapTable ref="table" data={this.state.list} striped={true}hover={true}search searchPlaceholder="Search" pagination>
          <TableHeaderColumn hidden={true} dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="experience" dataSort>Yrs of Experience</TableHeaderColumn>
          <TableHeaderColumn dataField="cvlink" dataSort>CV Link</TableHeaderColumn>
          <TableHeaderColumn dataField="evallink" dataSort>Evaluation Link</TableHeaderColumn>
          <TableHeaderColumn dataField="l1result" dataFormat={this.cellButtonForL1} dataSort>L1 Result</TableHeaderColumn>
          <TableHeaderColumn dataField="evaluate" dataFormat={this.cellButtonForGK} dataSort>Evaluate</TableHeaderColumn>
        </BootstrapTable>
        <InputModal modalIsOpen={this.state.isOpenModal} compName={this.state.compName} data={this.state.selectedCandidate} handleCloseModal={this.handleCloseModal.bind(this)}
          transferDataToDashboard={this.dataToDashboard.bind(this)}
        />     
        
      </div>
    );
  }
}

export default Dashboard;

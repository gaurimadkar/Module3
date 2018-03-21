import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from "../resuableComponent/InputModal";
import Constants from "../../common/Constants";

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
    let a = this.setState;
  }

  handleopenModal(row, buttonName) {
    this.setState({ isOpenModal: true, selectedCandidate: row, compName: buttonName });
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false, selectedCandidate: {}, compName: null });
  }

  cellButtonForL1(cell, row) {
    return (
      <button className="btn" onClick={() => this.handleopenModal(row, 'L1')} id="btnopenModelL1">
        L1
      </button>
    );
  }

  cellButtonForGK(cell, row) {
    return (
      <button className="btn" onClick={() => this.handleopenModal(row, 'GK')} id="btnopenModelGK">
        GK
      </button>
    );
  }

  dataToDashboard = (recivedObjData) => {
    this.setState({
      formdata: [...this.state.list, recivedObjData]
    });
    let updateRowData = this.state.list.find(filterData => filterData.id === recivedObjData.id);
    updateRowData.evaluateresult = recivedObjData.evaluateresult;
    updateRowData.seniority =  recivedObjData.seniority;
    updateRowData.feedback= recivedObjData.feedback;
    updateRowData.l1result= recivedObjData.l1result;
    updateRowData.evaluate= recivedObjData.evaluate;
    let elementL1 = document.getElementById('btnopenModelL1');
    let elementGK = document.getElementById('btnopenModelGK');

    if(updateRowData.evaluateresult=="Selected"){
      elementL1.className= 'btnGreen';
    }else{
      elementL1.className= 'btnRed';
      elementGK.className= 'btnRed';
    }
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
    var self = this;
    const options = {
      onRowClick: function(row) {
        // if(row.l1result && !row.evaluate){
        //   self.handleopenModal(row, 'L1');
        // }else if(row.l1result && row.evaluate){
        //   self.handleopenModal(row, 'GK');
        // }
      }
    };
    return (
      <div className="col-md-12 demo-div heading-section">
        <BootstrapTable ref="table" data={this.state.list} striped={true}hover={true}search searchPlaceholder="Search" pagination options={options}>
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

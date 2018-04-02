import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from '../components/resuableComponent/InputModal';
import Const from '../common/Constants';
import L1eval from '../components/L1eval/L1eval';
import Gkeval from '../components/Gkeval/Gkeval';
import { fetchCandidate,updateDashboard } from '../states/actions/fetchCandidateAction';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.cellButtonForL1 = this.cellButtonForL1.bind(this);
    this.cellButtonForGK = this.cellButtonForGK.bind(this);

    this.state = {
      isOpenModal: false,
      selectedCandidate: {},
      compName: null
    };
  }
  componentDidMount() {
    this.props.fetchCandidate();
  }
  handleopenModal(row, buttonName) {
    this.setState({ isOpenModal: true, selectedCandidate: row, compName: buttonName });
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false, selectedCandidate: {}, compName: null });
  }

  cellButtonForL1(cell, row) {
    if (row.l1evaluate === "Rejected" || row.l1evaluate === "Selected") {
      return <span>{row.l1evaluate}</span>;
    } else {
      return <button className="btn btn-info" onClick={() => this.handleopenModal(row, 'L1')}>Fill L1 Form</button>;
    }
  }

  cellButtonForGK(cell, row) {
    if (row.gkevaluate === "Selected") {
      return <label>{row.l1evaluate}</label>;
    } else if (row.gkevaluate === "Rejected") {
      return <span>{row.gkevaluate}</span>;;
    } else if (row.l1evaluate === "Rejected" || row.l1evaluate === "") {
      return '';
    } else {
      return <button className="btn btn-info" onClick={() => this.handleopenModal(row, 'GK')}>Fill GK Form</button>;
    }
  }

  dataToDashboard = (recivedObjData) => {
    this.props.updateDashboard(recivedObjData);
  }

  setL1EvaluateClass = (fieldValue, row, rowIdx, colIdx) => {
    if (row.l1evaluate === "Selected") {
      return 'selected';
    } else if (row.l1evaluate === "Rejected") {
      return 'rejected';
    }
  }

  setGKEvaluateClass = (fieldValue, row, rowIdx, colIdx) => {
    if (row.gkevaluate === "Selected") {
      return 'selected';
    } else if (row.gkevaluate === "Rejected") {
      return 'rejected';
    }
  }

  render() {
    return (
      <div className="col-md-12 demo-div heading-section App">
        <h3>Module 3</h3>
        <BootstrapTable ref="table" headerStyle={{ background: '#515050', color: 'white' }} data={this.props.list} striped={true} hover={true} search searchPlaceholder="Search" pagination>
          <TableHeaderColumn hidden={true} dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataAlign="center" headerAlign='center' width='250' dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="experience" dataAlign="center" headerAlign='center' width='150' dataSort>Yrs of Experience</TableHeaderColumn>
          <TableHeaderColumn dataField="cvlink" headerAlign='center' width='250' dataSort>CV Link</TableHeaderColumn>
          <TableHeaderColumn dataField="evallink" headerAlign='center' width='250' dataSort>Evaluation Link</TableHeaderColumn>
          <TableHeaderColumn dataField="l1result" dataAlign="center" headerAlign='center' width='150' columnClassName={this.setL1EvaluateClass} dataFormat={this.cellButtonForL1} dataSort>L1 Result</TableHeaderColumn>
          <TableHeaderColumn dataField="evaluate" dataAlign="center" headerAlign='center' width='150' columnClassName={this.setGKEvaluateClass} dataFormat={this.cellButtonForGK} dataSort>GK Result</TableHeaderColumn>
        </BootstrapTable>
        <InputModal modalIsOpen={this.state.isOpenModal} compName={this.state.compName} data={this.state.selectedCandidate}
          handleCloseModal={this.handleCloseModal.bind(this)} transferDataToDashboard={this.dataToDashboard.bind(this)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.fetchCandidateReducer.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCandidate: () => {
      dispatch(fetchCandidate())
    },
    updateDashboard: (name) => {
      dispatch(updateDashboard(name))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

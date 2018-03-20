import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from "../resuableComponent/InputModal";
import Constants from "../../common/Constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.cellButton = this.cellButton.bind(this);
    this.state = {
      list: [],
      isOpenModal: false,
      selectedCandidate: {},
      compName : null
    };
  }

  handleopenModal(row,buttonName) {
    this.setState({ isOpenModal: true, selectedCandidate: row , compName : buttonName});
  }

  handleCloseModal(row) {
    this.setState({ isOpenModal: false, selectedCandidate: {} , compName : null});
  }

  cellButton(cell, row, coloumindex, rowIndex) {
    const buttonName = row.l1result === "pass" ? "GK" : "L1";
    return (
      <button onClick={() => this.handleopenModal(row,buttonName)} id="btnopenModel">
        {buttonName}
      </button>
    );
  }

  componentDidMount = () => {
    let URL = Constants.URL;
    var self = this;
    fetch(URL)
      .then(function(response) {
        let myData = response.json();
        return myData;
      })
      .then(function(json) {
        self.setState({ list: json });
      });
  };

  render() {
     return (
      <div className="col-md-12 demo-div heading-section">
        <BootstrapTable
          ref="table"
          data={this.state.list}
          striped={true}
          hover={true}
          search
          searchPlaceholder="Search"
          pagination
        >
          <TableHeaderColumn
            hidden={true}
            dataField="id"
            isKey
            dataAlign="center"
            dataSort
          >
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="experience" dataSort>
            Yrs of Experience
          </TableHeaderColumn>
          <TableHeaderColumn dataField="cvlink" dataSort>
            CV Link
          </TableHeaderColumn>
          <TableHeaderColumn dataField="evallink" dataSort>
            Evaluation Link
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="l1result"
            dataFormat={this.cellButton}
            dataSort
          >
            L1 Result
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="evaluate"
            dataFormat={this.cellButton}
            dataSort
          >
            Evaluate
          </TableHeaderColumn>
        </BootstrapTable>
        <InputModal
          modalIsOpen={this.state.isOpenModal}
          compName={this.state.compName}
          data={this.state.selectedCandidate}
          handleCloseModal={this.handleCloseModal.bind(this)}
        />
      </div>
    );
  }
}

export default Dashboard;

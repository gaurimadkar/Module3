import React from 'react';
import { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Constants from '../../common/Constants';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount = () => {
    let URL = Constants.URL;
    var self = this;
    fetch(URL)
      .then(function (response) {
        let myData = response.json()
        return myData;
      })
      .then(function (json) {
         self.setState({list : json});
      });
  }
  
  
  render() {
    //var list = [];
    return (
      <div className="col-md-12 demo-div heading-section">
        <BootstrapTable ref="table" data={this.state.list} striped={true} hover={true} search searchPlaceholder='Search' pagination>
          <TableHeaderColumn hidden={true} dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="experience" dataSort>Yrs of Experience</TableHeaderColumn>
          <TableHeaderColumn dataField="cvlink" dataSort>CV Link</TableHeaderColumn>
          <TableHeaderColumn dataField="evallink" dataSort>Evaluation Link</TableHeaderColumn>
          <TableHeaderColumn dataField="l1result" dataSort>L1 Result</TableHeaderColumn>
          <TableHeaderColumn dataField="evaluate" dataSort>Evaluate</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Dashboard;

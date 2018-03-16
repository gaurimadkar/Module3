import React from 'react';
import { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = [{
      id: 1,
      name: "Amit Jadav",
      experience: 2,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },{
      id: 2,
      name: "Pradeep",
      experience: 7,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 3,
      name: "Yash",
      experience: 3,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 4,
      name: "Minal",
      experience: 5,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 5,
      name: "Harshad",
      experience: 3,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },{
      id: 6,
      name: "Kiran",
      experience: 4,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },{
      id: 7,
      name: "Kirti",
      experience: 6,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'fail',
      evaluate:'pass'
    },
    {
      id: 8,
      name: "Sumit",
      experience: 7,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 9,
      name: "Kiran",
      experience: 5,
      cvlink:'www.googledrive.com/aaa',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 10,
      name: "Shruti",
      experience: 6,
      cvlink:'www.googledrive.com/sss',
      evallink:'www.googledrive.com/bb',
      l1result:'pass',
      evaluate:'pass'
    },
    {
      id: 11,
      name: "Amar",
      experience: 3,
      cvlink:'www.googledrive.com/sss',
      evallink:'www.googledrive.com/aaa',
      l1result:'pass',
      evaluate:'fail'
    }];
    return (
      <div className= "col-md-12 demo-div heading-section">
        <BootstrapTable ref="table" data={list} striped={true} hover={true} search searchPlaceholder='Search' pagination>
          <TableHeaderColumn  hidden={true} dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
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

import React from 'react';
import { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
    },{
      id: 2,
      name: "Item name 2",
      price: 100
    },
    {
      id: 3,
      name: "Item name 3",
      price: 100
    },
    {
      id: 4,
      name: "Item name 4",
      price: 100
    },
    {
      id: 5,
      name: "Item name 5",
      price: 100
    },{
      id: 6,
      name: "Item name 6",
      price: 100
    },{
      id: 7,
      name: "Item name 7",
      price: 100
    },
    {
      id: 8,
      name: "Item name 8",
      price: 100
    },
    {
      id: 9,
      name: "Item name 9",
      price: 100
    },
    {
      id: 10,
      name: "Item name 10",
      price: 100
    },
    {
      id: 11,
      name: "Item name 11",
      price: 100
    },{
      id: 12,
      name: "Item name 12",
      price: 100
    },
    {
      id: 13,
      name: "Item name 13",
      price: 100
    },
    {
      id: 14,
      name: "Item name 14",
      price: 100
    },
    {
      id: 15,
      name: "Item name 15",
      price: 100
    }];
    // It's a data format example.
    function priceFormatter(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }
    return (
      <BootstrapTable ref='table' data={products} striped={true} hover={true} search searchPlaceholder='input something...' pagination>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
    </BootstrapTable>

    );
  }
}

export default Dashboard;

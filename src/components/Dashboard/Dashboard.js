import React from 'react';
import { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import InputModal from '../resuableComponent/InputModal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.cellButtonL1 = this.cellButtonL1.bind(this);
    this.cellButtonEval = this.cellButtonEval.bind(this);
    this.showL1Results= false ;
    this.showGkResults= false ;
    
  }

  
  cellButtonL1(cell, row,coloumindex, rowIndex) {
    let theButton
      theButton = <button style={{ backgroundColor: "none", border:"none" }}
                       type="button"
                       onClick={() => this.selectL1Eval(cell, row, rowIndex)}>
                       <InputModal compName='Gkeval' />
                   </button>     
    return theButton
  }

  cellButtonEval(cell, row,coloumindex, rowIndex) {
    let theButton 
      theButton = <button style={{ backgroundColor: "none", border:"none" }}
      type="button"
      onClick={() => this.selectL1Eval(cell, row, rowIndex)}>
          <InputModal />
      </button>     
   
    return theButton
  }
  

  selectL1Eval(cell, row, rowIndex) {
    this.setState({ showL1Results: true });
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
        <BootstrapTable ref="table" data={list} striped={true} hover={true} search searchPlaceholder='Search' 
        options={ this.options }  pagination>
          <TableHeaderColumn  hidden={true} dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="experience" dataSort>Yrs of Experience</TableHeaderColumn>
          <TableHeaderColumn dataField="cvlink" dataSort>CV Link</TableHeaderColumn>
          <TableHeaderColumn dataField="evallink" dataSort>Evaluation Link</TableHeaderColumn>
          <TableHeaderColumn dataField="l1result" dataFormat={this.cellButtonL1} dataSort>L1 Result</TableHeaderColumn>
          <TableHeaderColumn dataField="evaluate" dataFormat={this.cellButtonEval} dataSort>Evaluate</TableHeaderColumn>
        </BootstrapTable>
          
        {/* { this.state.showL1Results && <InputModal/>  }  
        { this.state.showGkResults ? <InputModal compname='Gkeval' /> : null }   */}

      </div>
    );
  }
}

export default Dashboard;

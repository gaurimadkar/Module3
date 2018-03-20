import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Dashboard from '../src/components/Dashboard/Dashboard'


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;

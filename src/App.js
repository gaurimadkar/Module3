import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import L1eval from '../src/components/L1eval';
import Dashboard from '../src/components/Dashboard';
import Gkeval from '../src/components/Gkeval';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Dashboard />
        <L1eval/>
        <Gkeval />

      </div>

    );
  }
}

export default App;

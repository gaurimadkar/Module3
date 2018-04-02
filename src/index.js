import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Dashboard from '../src/containers/Dashboard';
import store from './states/store';


ReactDOM.render(
    <Provider>
        <Dashboard store={store}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

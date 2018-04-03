import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard';
import store from './states/store';

it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render( < Dashboard store = { store }
                / > , div);
                ReactDOM.unmountComponentAtNode(div);
            });
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider >
      <Router>
        <App />
      </Router>
    </MockedProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

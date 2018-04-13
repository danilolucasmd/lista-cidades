import React from 'react';
import ReactDOM from 'react-dom';
import ListControls from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListControls />, div);
  ReactDOM.unmountComponentAtNode(div);
});
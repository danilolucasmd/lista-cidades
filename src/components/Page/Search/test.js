import React from 'react';
import ReactDOM from 'react-dom';
import Search from './index';

import configureStore from 'configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
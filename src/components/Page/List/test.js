import React from 'react';
import ReactDOM from 'react-dom';
import List from './index';

import configureStore from 'configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
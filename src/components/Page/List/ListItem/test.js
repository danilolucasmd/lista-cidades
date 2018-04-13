import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './index';

import configureStore from 'configureStore';

const store = configureStore();
const data = {
  Nome: '',
  Estado: '',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem data={data} store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Page from './index';
import configureStore from 'configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = (
    <Provider store={store}>
      <Page />
    </Provider>
  );

  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import { Provider } from 'react-redux';
import Page from './Page';

const Root = ({ store }) => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default Root;
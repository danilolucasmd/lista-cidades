import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';

const configureStore = () =>
  createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

export default configureStore;

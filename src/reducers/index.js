import { combineReducers } from 'redux';
import cities from './cities';

const app = combineReducers({
  cities,
});

export default app;
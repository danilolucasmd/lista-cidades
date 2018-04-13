import { combineReducers } from 'redux';
import cities from './cities';
import filters from './filters';

const app = combineReducers({
  cities,
  filters,
});

export default app;

export const getVisibleCities = (cities, filters) => {
  return cities.filter(city =>
    city.Nome.toLowerCase().includes(filters.city.toLowerCase()) && city.Estado.toLowerCase().includes(filters.state.toLowerCase())
  );
};
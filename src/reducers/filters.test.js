import reducer from './filters';
import { changeFilters } from 'actionCreators/filters';

const initialState = {
  city: '',
  state: '',
};

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_FILTERS', () => {
    const filters = {
      city: '',
      state: '',
    };

    expect(reducer(initialState, changeFilters(filters))).toEqual(filters);
  });
});
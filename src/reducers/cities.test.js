import reducer from './cities';
import { receiveCities } from 'actionCreators/cities';

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle RECEIVE_CITIES', () => {
    const cities = [
      {
        Nome: '',
        Estado: '',
      },
    ];

    expect(reducer([], receiveCities(cities))).toEqual(cities);
  });
});
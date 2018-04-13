const initialState = {
  city: '',
  state: '',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTERS':
      return {
        ...action.filters,
      };
    default:
      return state;
  }
};

export default filters;
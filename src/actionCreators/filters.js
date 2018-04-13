export const changeFilters = (filters) =>
  dispatch =>
    dispatch({
      type: 'CHANGE_FILTERS',
      filters,
    });
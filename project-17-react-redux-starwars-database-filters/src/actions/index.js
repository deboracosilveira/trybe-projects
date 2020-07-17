import getPlanets from '../services/planetsAPI';
import * as types from './actionTypes';

// Actions for planetsReducer
const requestPlanets = () => ({
  type: types.REQUEST_PLANETS,
});

const requestPlanetsSuccess = (planets) => ({
  type: types.REQUEST_PLANETS_SUCCESS,
  planets,
});

const requestPlanetsFailure = (error) => ({
  type: types.REQUEST_PLANETS_FAILURE,
  error,
});

export const fetchPlanetsAPI = () => (dispatch) => {
  dispatch(requestPlanets());
  return getPlanets().then(
    (planets) => dispatch(requestPlanetsSuccess(planets.results)),
    (error) => dispatch(requestPlanetsFailure(error.message)),
  );
};

// Actions from filtersReducer
export const filterByName = (event) => ({
  type: types.FILTER_BY_NAME,
  event,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: types.FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const deleteFilterByNumericValues = (column) => ({
  type: types.DELETE_FILTER_BY_NUMERIC_VALUES,
  column,
});

export const filterByOrder = (column, sort) => ({
  type: types.FILTER_BY_ORDER,
  column,
  sort,
});

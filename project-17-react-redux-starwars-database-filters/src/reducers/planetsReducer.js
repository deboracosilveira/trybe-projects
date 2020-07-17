import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: true,
  data: [],
};

function planetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_PLANETS:
      return {
        ...state,
        isLoading: true,
      };
    case types.REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.planets,
      };
    case types.REQUEST_PLANETS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default planetsReducer;

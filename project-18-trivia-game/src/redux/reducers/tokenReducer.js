import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_FAILURE,
} from '../actions';

const incialState = {
  isFetchingToken: false,
  token: '',
};

const tokenReducer = (state = incialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        isFetchingToken: true,
      };
    case REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        isFetchingToken: false,
        token: action.token,
      };
    case REQUEST_TOKEN_FAILURE:
      return {
        ...state,
        isFetchingToken: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default tokenReducer;

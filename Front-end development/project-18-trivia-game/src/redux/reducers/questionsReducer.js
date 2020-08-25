import {
  REQUEST_QUESTIONS,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_FAILURE,
} from '../actions';

const incialState = {
  isFetching: false,
  questions: [],
  error: '',
};

const questionsReducer = (state = incialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case REQUEST_QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        questions: action.data,
      };
    case REQUEST_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default questionsReducer;

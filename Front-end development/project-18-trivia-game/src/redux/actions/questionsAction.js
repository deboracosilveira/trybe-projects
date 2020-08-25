import { getQuestions } from '../../services/api';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
const sucessQuestions = ({ results }) => ({
  type: REQUEST_QUESTIONS_SUCCESS,
  data: results,
});

export const REQUEST_QUESTIONS_FAILURE = 'REQUEST_QUESTIONS_FAILURE';
const failureQuestions = (error) => ({
  type: REQUEST_QUESTIONS_FAILURE,
  error,
});

export function dispatchQuestions(token) {
  return (dispatch) => {
    dispatch(requestQuestions());
    return getQuestions(token).then(
      (questions) => dispatch(sucessQuestions(questions)),
      (error) => dispatch(failureQuestions(error)),
    );
  };
}

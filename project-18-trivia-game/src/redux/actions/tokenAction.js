import { getToken } from '../../services/api';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
const requestToken = () => ({ type: REQUEST_TOKEN });

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
const successToken = ({ token }) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

export const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE';
const failureToken = (error) => ({
  type: REQUEST_TOKEN_FAILURE,
  error,
});

export function gettingToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then(
      (token) => dispatch(successToken(token)),
      (error) => dispatch(failureToken(error)),
    );
  };
}

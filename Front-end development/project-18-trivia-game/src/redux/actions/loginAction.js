import HashMail from '../../services/md5';

export const LOGIN_INFO = 'LOGIN_INFO';
export const infoLogin = (name, email) => ({
  type: LOGIN_INFO,
  name,
  gravatar: HashMail(email),
});

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const updateScore = (assertions, score) => ({
  type: UPDATE_SCORE,
  assertions,
  score,
});

export const RESET_SCORE = 'RESET_SCORE';
export const resetScore = () => ({ type: RESET_SCORE });

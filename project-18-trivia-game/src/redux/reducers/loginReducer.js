import { LOGIN_INFO, UPDATE_SCORE, RESET_SCORE } from '../actions/index';

const inicialState = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const loginReducer = (state = inicialState, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        name: action.name,
        gravatarEmail: `https://www.gravatar.com/avatar/${action.gravatar}`,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        assertions: state.assertions + action.assertions,
        score: state.score + action.score,
      };
    case RESET_SCORE:
      return { ...inicialState };
    default:
      return state;
  }
};

export default loginReducer;

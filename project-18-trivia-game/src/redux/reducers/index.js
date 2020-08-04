import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import loginReducer from './loginReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({ tokenReducer, loginReducer, questionsReducer });

export default rootReducer;

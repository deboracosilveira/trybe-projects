import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducer;

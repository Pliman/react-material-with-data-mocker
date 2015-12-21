import { combineReducers } from 'redux';
import counter from './counter-store';

const rootReducer = combineReducers({
  counter
});

export default rootReducer
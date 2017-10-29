import { combineReducers } from 'redux';
import appReducer from './App';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;

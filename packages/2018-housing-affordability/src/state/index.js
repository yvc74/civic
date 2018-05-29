import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import housing from './reducers/app';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    housing,
    ...asyncReducers,
  });
}

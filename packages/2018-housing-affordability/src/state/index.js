import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './reducers/app';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    app,
    ...asyncReducers,
  });
}

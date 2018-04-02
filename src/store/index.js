import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import { middleware } from '../utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);
export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './redusers';

const store = createStore(
  rootReduser,
  applyMiddleware(thunk)
);

export default store;

import { createStore, combineReducers } from 'redux';
import countdownReducer from './reducers/countdown';
import appReducer from './reducers/app';

const rootReducer = combineReducers({ countdownReducer, appReducer });
const store = createStore(
  rootReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

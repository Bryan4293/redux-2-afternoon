import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './redux/budgetReducer';
import userReducer from './redux/userReducer';

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;

const rootReducer = combineReducers({
    budget: budgetReducer,
    user :userReducer
  })

  export default createStore(rootReducer, compose(applyMiddleware(promiseMiddleware), devTools))
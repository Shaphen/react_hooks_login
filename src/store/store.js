import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from '../reducers/session_reducer';

const middleware = [thunk];

export const configureStore = (preloadedState={}) => (
  createStore(
    sessionReducer, 
    preloadedState, 
    applyMiddleware(...middleware)
  )
)
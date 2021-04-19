import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import shoppingReducer from './reducers/shopping-reducer'
const store = createStore(shoppingReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
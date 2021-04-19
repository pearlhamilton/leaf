import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import itemsReducer from './reducers/itemsReducer'
const store = createStore(itemsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
import { useReducer } from 'react';
import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import thunk from 'redux-thunk';
import CarDetailReducer from './reducers/CarDetailReducer';
import CategoryReducer from './reducers/CategoryReducer';
import userReducer from './reducers/UserReducer';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    categories:CategoryReducer,	
    carDetail:CarDetailReducer,
	user: userReducer
});

//const store = createStore(rootReducers);

export const store = createStore(reducers,  composeEnhancers(middleware));

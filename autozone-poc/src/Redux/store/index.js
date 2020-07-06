import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../middlewares/saga';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

//list of middlewares
const middlewares = [sagaMiddleware];

//apply middleware on store
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//run saga generator function
sagaMiddleware.run(rootSaga);

export default store;
import {createStore, applyMiddleware} from 'redux';
import {default as createSagaMiddleware} from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

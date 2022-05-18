//Vamos configurar todos os nossos reducers e a partir deles vamos configurar o nosso store

import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './sagas/rootSaga';
import courseReducer from './reducers/courseReducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const reducers = combineReducers({
    cursos: courseReducer,
})

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
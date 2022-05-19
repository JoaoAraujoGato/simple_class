//Vamos configurar todos os nossos reducers e a partir deles vamos configurar o nosso store

import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootSaga from './sagas/rootSaga';
import courseReducer from './reducers/courseReducer';
import userReducer from './reducers/userReducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const reducers = combineReducers({
    cursos: courseReducer,
    usuarios: userReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
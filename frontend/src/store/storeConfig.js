//Vamos configurar todos os nossos reducers e a partir deles vamos configurar o nosso store

import {createStore, combineReducers} from 'redux';
import courseReducer from './reducers/courseReducer';

const reducers = combineReducers({
    cursos: courseReducer,
})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;
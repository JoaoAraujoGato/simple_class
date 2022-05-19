import { call, put, all, takeLatest } from 'redux-saga/effects';

import { 
    getAllUsersSuccess, 
    cadastrarNovoUsuarioSuccess, 
    logInUserSuccess,
    logOutUserSuccess 
} from "../actions/userActions";

import { 
    ADD_NEW_USER_REQUEST, 
    GET_ALL_USER_REQUEST, 
    LOGIN_USER_REQUEST, 
    LOGOUT_USER_REQUEST 
} from "../actions/actionsTypes";

import api from "../../services/api";
import { logIn, userId, logOut } from "../../services/auth";

function* getAllUsers(){
    try{
        const response = yield call(api.get, '/user');
        yield put(getAllUsersSuccess(response.data.Data))
    }catch(err){
        console.warn(err);
    }
}

function* addNewUser(action){
    try{
        const response = yield call(api.post, '/user', action.payload);
        yield put(cadastrarNovoUsuarioSuccess(response.data.Data))
    }catch(err){
        console.warn(err)
    }
}

function* logInNewUser(action){
    try{
        const response = yield call(api.post, "/user/login", action.payload);

        logIn(response.data.accessToken);
        userId(response.data.user._id);
        alert(`Bem vindo ${response.data.user.name}`);

        yield put(logInUserSuccess(response.data))
    }catch(err){
        console.warn(err)
    }
}

function* logOutUser(){
    try{
        logOut();
        yield put(logOutUserSuccess())
    }catch(err){
        console.warn(err)
    }
}

export default all([
    takeLatest(GET_ALL_USER_REQUEST, getAllUsers),
    takeLatest(ADD_NEW_USER_REQUEST, addNewUser),
    takeLatest(LOGIN_USER_REQUEST, logInNewUser),
    takeLatest(LOGOUT_USER_REQUEST, logOutUser),
]);

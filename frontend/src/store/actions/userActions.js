import {
    ADD_NEW_USER_REQUEST,
    ADD_NEW_USER_SUCCESS,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS
} from "./actionsTypes";

//Action Creator
export function cadastrarNovoUsuarioRequest(novoUsuario){
    return {
        type: ADD_NEW_USER_REQUEST,
        payload: novoUsuario
    }
}
export function cadastrarNovoUsuarioSuccess(novoUsuario){
    return {
        type: ADD_NEW_USER_SUCCESS,
        payload: novoUsuario
    }
}

export function getAllUsersRequest(){
    return{
        type: GET_ALL_USER_REQUEST,
    }
}

export function getAllUsersSuccess(usuarios){
    return{
        type: GET_ALL_USER_SUCCESS,
        payload: usuarios
    }
}

export function logInUserRequest(usuario){
    return{
        type: LOGIN_USER_REQUEST,
        payload: usuario
    }
}

export function logInUserSuccess(usuario){
    return{
        type: LOGIN_USER_SUCCESS,
        payload: usuario
    }
}

export function logOutUserRequest(){
    return{
        type: LOGOUT_USER_REQUEST,
    }
}

export function logOutUserSuccess(){
    return{
        type: LOGOUT_USER_SUCCESS,
    }
}
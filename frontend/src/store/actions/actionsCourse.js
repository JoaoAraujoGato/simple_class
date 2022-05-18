import {
    ADD_NEW_COURSE_REQUEST,
    ADD_NEW_COURSE_SUCCESS,
    REMOVE_COURSE_REQUEST,
    REMOVE_COURSE_SUCCESS,
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_SUCCESS
} from "./actionsTypes";

//Action Creator
export function adicionarNovoCursoRequest(novoCurso){
    return {
        type: ADD_NEW_COURSE_REQUEST,
        payload: novoCurso
    }
}
export function adicionarNovoCursoSuccess(novoCurso){
    return {
        type: ADD_NEW_COURSE_SUCCESS,
        payload: novoCurso
    }
}

export function removerCursoRequest(curso){
    return {
        type: REMOVE_COURSE_REQUEST,
        payload: curso
    }
}
export function removerCursoSuccess(curso){
    return {
        type: REMOVE_COURSE_SUCCESS,
        payload: curso
    }
}

export function getAllCoursesRequest(){
    return{
        type: GET_ALL_COURSE_REQUEST,
    }
}

export function getAllCoursesSuccess(cursos){
    return{
        type: GET_ALL_COURSE_SUCCESS,
        payload: [...cursos]
    }
}
import { call, put, all, takeLatest } from 'redux-saga/effects';
//Com o sagas nao podemos fazer uma requisição como faziamos normalmente (api.get("/..."))

import { getAllCoursesSuccess } from "../actions/actionsCourse";
import { GET_ALL_COURSE_REQUEST } from "../actions/actionsTypes";

import api from "../../services/api";
// Este * depois do function tambem funciona como o async/await - substituimos o async por * e o await por yield

function* getAllCourses(){
    // aqui nos passamos a rota depois da virgula
    const response = yield call(api.get, 'course');
    // o put vai ser usado para disparar actions
    yield put(getAllCoursesSuccess(response.data.Data))
}

export default all([
    takeLatest(GET_ALL_COURSE_REQUEST, getAllCourses)
])
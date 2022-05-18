import { all } from "redux-saga/effects";

import courseSagas from "./courseSagas";

export default function* rootSaga(){
    return yield all([
        courseSagas,
    ])
}
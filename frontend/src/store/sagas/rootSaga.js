import { all } from "redux-saga/effects";

import courseSagas from "./courseSagas";
import userSagas from "./userSagas";

export default function* rootSaga(){
    return yield all([
        courseSagas,
        userSagas,
    ])
}
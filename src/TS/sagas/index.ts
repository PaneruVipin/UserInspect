import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { USERS_FETCH, USER_FETCH } from "../actions/users";
import { getUserSaga, getUsersSaga } from "./users";

export const sagaMiddleware=createSagaMiddleware()

export function* rootSaga():Generator{
yield takeEvery(USERS_FETCH,getUsersSaga)
yield takeLatest(USER_FETCH,getUserSaga)
}
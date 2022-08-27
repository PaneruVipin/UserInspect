import { AnyAction } from 'redux'
import {call, put} from 'redux-saga/effects'
import { userFetchedAction, usersFetchedAction } from '../actions/users'
import { getUser, getUsers } from '../apis/users'
import { user } from '../modeles/users'

export function* getUsersSaga(action:AnyAction):Generator{
  const data=yield call(getUsers, action.payload)
  yield put(usersFetchedAction(data as user[]))
}
export function* getUserSaga(action:AnyAction):Generator{
    const data=yield call(getUser, action.payload)
  yield put(userFetchedAction(data as user))
}
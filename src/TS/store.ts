import { applyMiddleware, combineReducers, createStore } from "redux"
import { usersReducers } from "./reducers/users";
import { rootSaga, sagaMiddleware } from "./sagas";


const reducer= combineReducers({
   users:usersReducers
})

export type State=ReturnType<typeof store.getState>;

export const store=createStore(
      reducer,applyMiddleware(sagaMiddleware)
     )
     sagaMiddleware.run(rootSaga)
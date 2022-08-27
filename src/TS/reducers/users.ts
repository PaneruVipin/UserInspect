import { Reducer } from "redux";
import { USERS_FETCHED, USER_FETCH, USER_FETCHED } from "../actions/users";
import { useArrayToObject } from "../hooks/array";
import { user } from "../modeles/users";
type state={
   entities:{
    [id:number]:user
   }
   id:number,
   userLoading:boolean
}
const initialState:state={
  entities:{},
  id:NaN,
  userLoading:false
}
export const usersReducers:Reducer<state>=(state=initialState,action)=>{
   switch (action.type) {
    case USER_FETCH:{
        return {...state, userLoading:true, id:action.payload}
    }
     case USER_FETCHED :{
        const user=action.payload
        const userId=user.id
        return {...state, userLoading:false, entities:{...state.entities,[userId]:user}}
     }  
     case USERS_FETCHED:{
        const users=useArrayToObject(action.payload)
        return {...state,entities:{...state.entities,...users}}
     }
    default:{
        return {...state}
    }
       
   }
}
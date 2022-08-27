import { user } from "../modeles/users"

export const USER_FETCH='USER_FETCH'
export const USERS_FETCH='USERS_FETCH'
export const USER_FETCHED='USER_FETCHED'
export const USERS_FETCHED='USERS_FETCHED'

export const userFetchAction=(id:number)=>{
 return {type:USER_FETCH, payload:id}
}
export const userFetchedAction=(user:user)=>{
    return {type:USER_FETCHED, payload:user}
}
export const usersFetchAction=(page:number=1)=>{
    return {type:USERS_FETCH, payload:page}
}
export const usersFetchedAction=(users:user[])=>{
    return {type:USERS_FETCHED, payload:users}
}
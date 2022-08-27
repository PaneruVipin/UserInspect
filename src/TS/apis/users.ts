import axios from "axios"
import { user } from "../modeles/users"

const USERS_BASE_API ='https://reqres.in/api/'

export const getUsers= async(page:number=1)=>{
 const response= await axios.get<{data:user[]}>(USERS_BASE_API+`users?page=${page}`)
 return response.data.data
}
export const getUser= async(id:number)=>{
    const response= await axios.get<{data:user}>(USERS_BASE_API+`users/${id}`)
    return response.data.data
   }

import { State } from "../store";

export const idSelector=(s:State)=>s.users.id
export const usersSelector=(s:State)=>Object.keys(s.users.entities).map((id)=>s.users.entities[id as any])
export const userSelector=(s:State)=>s.users.entities[s.users.id]
export const userLoadingSelector=(s:State)=>s.users.userLoading
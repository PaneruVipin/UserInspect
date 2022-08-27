import { useEffect } from "react"

export const useCleanupEffect=(code:()=>void,dependiensies:any[]=[])=>{
    useEffect(()=>{
        return code
       },dependiensies)
}
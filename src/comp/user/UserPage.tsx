import { FC, memo } from "react";
import { connect } from "react-redux";
import { user } from "../../TS/modeles/users";
import { State } from "../../TS/store";
import Button from "../basic/Button";
import UserCard from "./UserCard";
import {userLoadingSelector, userSelector, usersSelector} from '../../TS/selectors/users'
import { userFetchAction, usersFetchAction } from "../../TS/actions/users";
import { useCleanupEffect } from "../../TS/hooks/modifiedReactHooks";

type UserPageProps = {
    user:user
    users:user[]
    fetchUser:(id:number)=>void
    fetchUsers:(page:number)=>void
    userLoading:boolean
};

const UserPage: FC<UserPageProps> = ({user,users,fetchUser,fetchUsers,userLoading,...props}) => {
    const handleClick=(id:number)=>{
       fetchUser(id)
    }
    useCleanupEffect(()=>{
        fetchUsers(1)
        fetchUsers(2)
    })
    console.log(userLoading)
  return <div className="flex flex-col items-center justify-between px-6 gap-y-6 bg-gray-100">
    <UserCard userLoading={userLoading} user={user}/>
    <div className="flex flex-wrap gap-x-2 gap-y-2 justify-between md:w-1/3 ">
       {
        users.map((u)=><div key={u.id} className="w-10"><Button onClick={()=>{handleClick(u.id)}} >{u.id}</Button></div>)
       }
       <span className="w-10"></span>
       <span className="w-10"></span>
       <span className="w-10"></span>
       <span className="w-10"></span>
       <span className="w-10"></span>
       <span className="w-10"></span>
       <span className="w-10"></span>
       </div>
  </div>
};

UserPage.defaultProps = {};
const mapStateToProps=(s:State)=>{
   return {
    user:userSelector(s),
    users:usersSelector(s),
    userLoading:userLoadingSelector(s),
   }
}
const mapDispatchToProps={
    fetchUser:userFetchAction,
    fetchUsers:usersFetchAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserPage));
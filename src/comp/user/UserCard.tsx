import { FC, memo } from "react";
import { user } from "../../TS/modeles/users";
import {ImPointDown} from 'react-icons/im'
import Loader from "../../loader/Loader";
type UserCardProps = {
    user:user,
    userLoading:boolean
};

const UserCard: FC<UserCardProps> = ({user,userLoading,...props}) => {
  return <div className="md:w-3/5 md:h-60 rounded-md  shadow-md bg-yellow-200">
   {user&& <p className="flex justify-center items-center rounded-full bg-gray-300 w-8 h-8 font-bold ">{user?.id}</p>}
 {
    userLoading?<Loader/>: <div className="  p-4 flex md:flex-row flex-col items-center gap-y-4 gap-x-6">
 <img 
 src={
    user?user.avatar:'https://ceris-gratton-jones.com/wp-content/uploads/2018/10/profile-picture-placeholder.png'}
 className="w-44 h-44 rounded-full  object-cover "/>
 {user?<div className="space-y-4 text-indigo-400 text-xl">
    <div className="flex ">
        <p className="w-20 font-bold">Name</p>
        <p>{': '+user?.first_name+' '+user?.last_name}</p>
    </div>
    <div className="flex ">
        <p className="w-20 font-bold">email</p>
        <p>{': '}<a className='animate-pulse' target='blank' href={`mailto:${user?.email}`}>{user?.email}</a></p>
    </div>
 </div>:<div>
    <p>Please click on the button below to get user related data</p>
    <ImPointDown className="mt-10 w-20 h-20 text-yellow-500 animate-bounce"/>
    </div>
 }
</div>}
</div>
};

UserCard.defaultProps = {};

export default memo(UserCard);
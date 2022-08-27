import { FC, memo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

type HelloProps = {};

const Hello: FC<HelloProps> = ({}) => {
    const navigate=useNavigate()
    const handleClick=()=>{
       navigate({
        search:'hi=hello'
       })
    }
    console.log(useSearchParams()[0].get('hi'))
  return <div onClick={handleClick}>hello world</div>
};

Hello.defaultProps = {};

export default memo(Hello);
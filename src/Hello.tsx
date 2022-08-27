import { FC, memo } from "react";

type HelloProps = {};

const Hello: FC<HelloProps> = ({}) => {

  return <div >hello world</div>
};

Hello.defaultProps = {};

export default memo(Hello);
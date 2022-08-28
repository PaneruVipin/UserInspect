import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react';
type ButtonProps = { 
  theme?:'primary' | 'secondry' 
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({theme,children,...rest}) => {

 return(
    <button  
    {...rest}
    className={cn('block border   px-2 font-medium text-xl shadow-md  rounded-md w-full',
    {'bg-indigo-500 hover:bg-yellow-500 text-white border-indigo-500 ':theme==='primary'},
    {'bg-white border-gray-300 text-black hover:bg-yellow-500':theme==='secondry'},
    )}>{children}</button>
  );
}
Button.defaultProps = {
theme:'primary'
}
export default Button;
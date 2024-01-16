import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import style from "./Button.module.css";

const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    <button 
    {...rest}
    className={isOutline ? style.outline_btn:style.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button

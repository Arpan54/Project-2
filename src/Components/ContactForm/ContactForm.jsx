import React from 'react'
import style from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("Arpan");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Done");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <div className={style.container}>
      <div className={style.contactFrom}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
          <Button text="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
        </div>
        <Button 
          isOutline={true} 
          text="VIA EMAIL FORM" 
          icon={<HiMail fontSize="24px"/>}
        />
        
        <form onSubmit={onSubmit}>
          <div className={style.from_control}>
            <label htmlFor="name">Name</label>
            <input type="text"  name="name"/>
          </div>
          <div className={style.from_control}>
            <label htmlFor="email">Email</label>
            <input type="email"  name="email"/>
          </div>
          <div className={style.from_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows={8}/>
          </div>
          <div className={style.submit_btn}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={style.contactImg}>
        <img src="../public/bg.jpg" alt="" />
      </div>
    </div>
  )
}

export default ContactForm

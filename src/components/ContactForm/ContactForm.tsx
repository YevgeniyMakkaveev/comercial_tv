import React, { useState, useEffect } from "react";
import IMainScreenComponent from "../../types/types";
import KeyBoard from "./Keyboard/Keyboard";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import "./ContactForm.scss";
import windowEnum from "../../types/enum";
import image from "../../assets/promo.jpg";

interface IContactForm extends IMainScreenComponent{
  setIsContacted:React.Dispatch<React.SetStateAction<boolean>>
};

const ContactForm: React.FC<IContactForm> = ({ setActiveWindow,setIsContacted }) => {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
     if(number.length===10){
       setIsValid(true);
    }

  },[number]);

  const confirmNumber=()=>{
    if(number.length===10&&isValid){
      setActiveWindow(windowEnum.slider)
      setIsContacted(true)
    }
  }
  return (
    <div className="contact-form">
      <div>
        <h2 className="keyboard__label">Введите ваш номер мобильного телефона</h2>
        <PhoneNumber phone={number} isValid={isValid}/>
        <h4 className="keyboard__underlabel">И с вами свяжется наш рекрутер для дальнейшей консультации</h4>
      <KeyBoard
        setActiveWindow={setActiveWindow}
        phone={number}
        setNumber={setNumber}
        confirmNumber={confirmNumber}
        isValid={isValid}
      />
      </div>
      <img className="contactImg" alt="promo" src={image}/>
    </div>
  );
};
export default ContactForm;

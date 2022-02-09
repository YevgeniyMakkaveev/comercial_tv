import React, { useState, useEffect } from "react";
import IMainScreenComponent from "../../types/types";
import KeyBoard from "./Keyboard/Keyboard";
import getData from "../../units/callApi";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import "./ContactForm.scss";
import windowEnum from "../../types/enum";
import image from "../../assets/promo.jpg";

const ContactForm: React.FC<IMainScreenComponent> = ({ setActiveWindow }) => {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(true);
  const [needLoading, setNeedLoading] = useState(false);

  useEffect(() => {
    if(number.length<10){
      setNeedLoading(false)
    }
    if(number.length===10){
      setNeedLoading(false)
    }
    if (number.length===10&&needLoading) {
      setNeedLoading(false);
      getData(number).then(data=>setIsValid(data)
      );
    }
  },[number,needLoading,setNeedLoading]);

  const confirmNumber=()=>{
    if(number.length===10&&isValid){
      setActiveWindow(windowEnum.slider)
    }
  }
  return (
    <div className="contact-form">
      <div>
        <h2 className="keyboard__label">Введите ваш номер мобильного телефона</h2>
        <PhoneNumber phone={number}/>
        <h4 className="keyboard__underlabel">И с вами свяжется наш рекрутер для дальнейшей консультации</h4>
      <KeyBoard
        setActiveWindow={setActiveWindow}
        number={number}
        setNumber={setNumber}
        confirmNumber={confirmNumber}
      />
      </div>
      <img className="contactImg" alt="promo" src={image}/>
    </div>
  );
};
export default ContactForm;

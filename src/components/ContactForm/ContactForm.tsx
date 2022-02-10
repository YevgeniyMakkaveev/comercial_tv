import React, { useState, useEffect } from "react";
import IMainScreenComponent from "../../types/types";
import KeyBoard from "./Keyboard/Keyboard";
import getData from "../../units/callApi";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import "./ContactForm.scss";
import windowEnum from "../../types/enum";
import image from "../../assets/promo.jpg";

interface IContactForm extends IMainScreenComponent {
  setIsContacted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<IContactForm> = ({
  setActiveWindow,
  setIsContacted,
}) => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (phone.length === 10) {
      setLoading(true);
      getData(phone)
        .then((data) => setIsValid(data))
        .finally(() => setLoading(false));
    }
  }, [phone]);

  const confirmNumber = () => {
    if (phone.length === 10 && isValid) {
      setActiveWindow(windowEnum.slider);
      setIsContacted(true);
    }
  };
  return (
    <div className="contact-form">
      <div>
        <h2 className="keyboard__label">
          Введите ваш номер мобильного телефона
        </h2>
        <PhoneNumber phone={phone} isValid={isValid} loading={loading} />
        <h4 className="keyboard__underlabel">
          И с вами свяжется наш рекрутер для дальнейшей консультации
        </h4>
        <KeyBoard
          setActiveWindow={setActiveWindow}
          phone={phone}
          setPhone={setPhone}
          confirmNumber={confirmNumber}
          isValid={isValid}
        />
      </div>
      <img className="contactImg" alt="promo" src={image} />
    </div>
  );
};
export default ContactForm;

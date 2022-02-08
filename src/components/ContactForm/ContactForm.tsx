import React, { useState} from "react";
import IMainScreenComponent from "../../types/types";
import KeyBoard from "./KeyBoard/Keyboard";


const ContactForm:React.FC<IMainScreenComponent> = ({showContactForm})=>{

  const [number, setNumber] = useState("");

  return (
    <div className="Keyboard">
     <input value={number} />
    <KeyBoard showContactForm={showContactForm} number={number} setNumber={setNumber} />
    </div>
  );
}
export default ContactForm
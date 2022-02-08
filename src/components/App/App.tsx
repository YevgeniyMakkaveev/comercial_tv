import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm"
import StartScreen from "../StartScreen/StartScreen";
import "./App.css";

function App() {
  const [contactForm, showContactForm]=useState(true)
  return (
    <div className="">
    {!contactForm&&<StartScreen  showContactForm={showContactForm} />}
    {contactForm&&<ContactForm showContactForm={showContactForm} />}
    </div>
  );
}
//0f23e5b223da40210f052ab3be97ebaa
export default App;

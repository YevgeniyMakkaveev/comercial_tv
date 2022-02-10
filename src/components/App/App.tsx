import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import StartScreen from "../StartScreen/StartScreen";
import Slider from "../Slider/Slider";
import windowEnum from "../../types/enum";
import "./App.scss";

function App() {
  const [activeWindow, setActiveWindow]=useState(windowEnum.video)
  const [isContacted, setIsContacted]=useState(false);
  return (
    <div className="App">
    {activeWindow===windowEnum.video&&<StartScreen isContacted={isContacted}  setActiveWindow={setActiveWindow} />}
    {activeWindow===windowEnum.contact&&<ContactForm setIsContacted={setIsContacted} setActiveWindow={setActiveWindow} />}
    {activeWindow===windowEnum.slider&&<Slider setActiveWindow={setActiveWindow} />}
    </div>
  );
}

export default App;

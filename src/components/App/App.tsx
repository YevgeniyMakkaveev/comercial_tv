import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import StartScreen from "../StartScreen/StartScreen";
import Slider from "../Slider/Slider";
import windowEnum from "../../types/enum";
import "./App.scss";

function App() {
  const [activeWindow, setActiveWindow]=useState(windowEnum.slider)
  return (
    <div className="App">
    {activeWindow===windowEnum.video&&<StartScreen  setActiveWindow={setActiveWindow} />}
    {activeWindow===windowEnum.contact&&<ContactForm setActiveWindow={setActiveWindow} />}
    {activeWindow===windowEnum.slider&&<Slider setActiveWindow={setActiveWindow} />}
    </div>
  );
}
//0f23e5b223da40210f052ab3be97ebaa
export default App;

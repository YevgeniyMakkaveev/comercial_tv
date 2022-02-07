import React from "react";
import { numBtns } from "./units/buttonHelpers";
import "./Keyboard.scss"
interface IKeyBoard {
  onBtnPress: (val: string) => void;
  onDelPress: () => void;
  currentValue: string;
}

const KeyBoard: React.FC<IKeyBoard> = ({
  onBtnPress,
  onDelPress,
  currentValue,
}) => {
  const CreateNumBtn = (num: string) => {
    return (
      <button
        key={num}
        className={currentValue === num ? "active" : ""}
        onClick={() => onBtnPress(num)}
      >
        {num}
      </button>
    );
  };

  return <><div className="numKeyboard"> {numBtns.map((x) => CreateNumBtn(x))}</div>
  <div className="extraKeyboard">
   {CreateNumBtn("0")}
   <button className={currentValue === "D" ? "active" : ""} onClick={()=>onDelPress()}>Del</button>
    </div>
  </>;
};

export default KeyBoard;

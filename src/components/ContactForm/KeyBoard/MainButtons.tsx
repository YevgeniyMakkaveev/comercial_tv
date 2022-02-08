import React from "react";
import { numBtns } from "../../../units/matrixBtns";
import "./Keyboard.scss"
interface IMainBtns {
  onBtnPress: (val: string, needCoordinates: boolean) => void;
  onDelPress: (needCoordinates: boolean) => void;
  currentValue: string;
}

const MainButtons: React.FC<IMainBtns> = ({
  onBtnPress,
  onDelPress,
  currentValue,
}) => {
  const CreateNumBtn = (num: string) => {
    return (
      <button
        key={num}
        className={currentValue === num ? "active" : ""}
        onClick={() => onBtnPress(num, true)}
      >
        {num}
      </button>
    );
  };

  return <><div className="numKeyboard"> {numBtns.map((x) => CreateNumBtn(x))}</div>
  <div className="extraKeyboard">
   {CreateNumBtn("0")}
   <button className={currentValue === "D" ? "active" : ""} onClick={()=>onDelPress(true)}>Del</button>
    </div>
  </>;
};

export default MainButtons;

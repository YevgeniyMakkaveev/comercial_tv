import React from "react";
import { numBtns } from "../../../units/matrixBtns";
import "./Keyboard.scss";
interface IMainBtns {
  onBtnPress: (val: string, needCoordinates: boolean) => void;
  onDelPress: (needCoordinates: boolean) => void;
  isActive: (val: string) => string;
}

const MainButtons: React.FC<IMainBtns> = ({
  onBtnPress,
  onDelPress,
  isActive,
}) => {
  const CreateNumBtn = (num: string) => {
    return (
      <button
        key={num}
        className={"keyboard__btn " + isActive(num)}
        onClick={() => onBtnPress(num, true)}
      >
        {num}
      </button>
    );
  };

  return (
    <>
      <div className="numKeyboard"> {numBtns.map((x) => CreateNumBtn(x))}</div>
      <div className="extraKeyboard">
        <button
          className={"keyboard__btn " + isActive("D")}
          onClick={() => onDelPress(true)}
        >
          СТЕРЕТЬ
        </button>
        {CreateNumBtn("0")}
      </div>
    </>
  );
};

export default MainButtons;

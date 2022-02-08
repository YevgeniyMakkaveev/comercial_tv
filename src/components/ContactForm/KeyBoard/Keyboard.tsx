import React, { useState, useEffect, useCallback } from "react";
import buttonNavHelper from "../../../units/buttonNavHelpers";
import MainButtons from "./MainButtons";
import {
  findBtnCoordinate,
  getBtnByCoordinate,
} from "../../../units/findButtonHelper";
import "./Keyboard.scss";

interface IKeyboard {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  showContactForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Keyboard: React.FC<IKeyboard> = ({
  number,
  setNumber,
  showContactForm,
}) => {
  const [coordinates, setCoordinates] = useState<number[]>([2, 1]);
  const [coordinatesRes, setCoordinatesRes] = useState<string>("5");
  const [isAgreed, setIsAgreed] = useState(false);

  const addNum = useCallback(
    (val: string, needCoordinates: boolean) => {
      if (needCoordinates) {
        const crd = findBtnCoordinate(val);
        setCoordinates(crd);
        setCoordinatesRes(val);
      }

      setNumber(number + val);
    },
    [number, setNumber]
  );

  const delNum = useCallback(
    (needCoordinates: boolean) => {
      if (needCoordinates) {
        const crd = findBtnCoordinate("D");
        setCoordinates(crd);
        setCoordinatesRes("D");
      }
      if (number.length > 0) setNumber(number.substring(0, number.length - 1));
    },
    [number, setNumber]
  );
  const toggleIsAgreed:React.ChangeEventHandler<HTMLInputElement> = () => {
    const crd = findBtnCoordinate("agreed");
    setCoordinates(crd);
    setCoordinatesRes("agreed");
    setIsAgreed(!isAgreed);
  };
  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log(e);
      const { keyCode, key } = e;
      if (keyCode === 8 && number.length > 0) {
        delNum(false);
        return;
      }
      if (keyCode >= 37 && keyCode <= 40) {
        const crd = buttonNavHelper(key, coordinates);
        setCoordinates(crd);
        setCoordinatesRes(getBtnByCoordinate(crd));
        return;
      }
      if (
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 96 && keyCode <= 105)
      ) {
        addNum(key, false);
        return;
      }
      if (keyCode === 13) {
        switch (coordinatesRes) {
          case "D":
            delNum(false);
            break;
          case "x":
            showContactForm(false);
            break;
          case "agreed":
            setIsAgreed(!isAgreed);
            break;
          default:
            addNum(coordinatesRes, false);
        }
      }
    },
    [
      number,
      coordinates,
      setCoordinates,
      coordinatesRes,
      showContactForm,
      addNum,
      delNum,
      setIsAgreed,
      isAgreed,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [keyDown, setCoordinates]);

  return (
    <div className="App">
      <button
        onClick={() => showContactForm(false)}
        className={coordinatesRes === "x" ? "active" : ""}
      >
        X
      </button>
      <MainButtons
        onBtnPress={addNum}
        onDelPress={delNum}
        currentValue={coordinatesRes}
      />
      <div className={coordinatesRes === "agreed" ? "active" : ""}>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={toggleIsAgreed}
        />
        Я согласен с условиями
      </div>
      <button className={coordinatesRes === "confirm" ? "active" : ""}>
        confirm
      </button>
    </div>
  );
};
export default Keyboard;

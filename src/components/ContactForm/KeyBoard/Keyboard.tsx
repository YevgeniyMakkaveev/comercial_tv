import React, { useState, useEffect, useCallback } from "react";
import buttonNavHelper from "../../../units/buttonNavHelpers";
import MainButtons from "./MainButtons";
import {
  findBtnCoordinate,
  getBtnByCoordinate,
} from "../../../units/findButtonHelper";
import "./Keyboard.scss";
import windowEnum from "../../../types/enum";

interface IKeyboard {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setActiveWindow: React.Dispatch<React.SetStateAction<windowEnum>>;
  isValid: boolean|null;
  confirmNumber: () => void;
}

const Keyboard: React.FC<IKeyboard> = ({
  number,
  setNumber,
  setActiveWindow,
  confirmNumber,
  isValid
}) => {
  const [coordinates, setCoordinates] = useState<number[]>(findBtnCoordinate("5"));
  const [coordinatesRes, setCoordinatesRes] = useState<string>("5");
  const [isAgreed, setIsAgreed] = useState(false);

  const coordinateSetter = (val: string) => {
    const crd = findBtnCoordinate(val);
    setCoordinates(crd);
    setCoordinatesRes(val);
  };

  const addNum = useCallback(
    (val: string, needCoordinates: boolean) => {
      if (needCoordinates) {
        coordinateSetter(val);
      }
      if (number.length <= 10) {
        setNumber(number + val);
      }
    },
    [number, setNumber]
  );

  const confirmNumberCheck = useCallback(() => {
    if (number.length === 10 && isAgreed&&isValid) {
      confirmNumber();
    }
  }, [number, isAgreed, confirmNumber,isValid]);

  const delNum = useCallback(
    (needCoordinates: boolean) => {
      if (needCoordinates) {
        coordinateSetter("D");
      }
      if (number.length > 0) setNumber(number.substring(0, number.length - 1));
    },
    [number, setNumber]
  );

  const toggleIsAgreed: React.ChangeEventHandler<HTMLInputElement> = () => {
    coordinateSetter("agreed");
    setIsAgreed(!isAgreed);
  };

  const keyDown = useCallback(
    (e: KeyboardEvent) => {
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
      if (keyCode === 27) {
        e.preventDefault();
        setActiveWindow(windowEnum.video);
      }
      if (keyCode === 13) {
        switch (coordinatesRes) {
          case "D":
            delNum(false);
            break;
          case "confirm":
            confirmNumberCheck();
            break;
          case "x":
            setActiveWindow(windowEnum.video);
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
      coordinatesRes,
      setActiveWindow,
      addNum,
      delNum,
      isAgreed,
      confirmNumberCheck,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [keyDown, setCoordinates]);

  const isButtonActive = (val: string): string => {
    return coordinatesRes === val ? "active" : "";
  };

  const confirmButtonDisabled = () => {
    if (number.length === 10 && isAgreed) {
      return "keyboard__confirm_enabled ";
    }
    return "keyboard__confirm_disabled ";
  };

  const confirmButtonActive = () => {
    if (coordinatesRes !== "confirm") return "";
    if (number.length === 10 && isAgreed) return "active";
    return "confirm_disabled-active";
  };

  return (
    <>
      <button
        onClick={() => setActiveWindow(windowEnum.video)}
        className={"keyboard__cross " + isButtonActive("x")}>
        X
      </button>
      <MainButtons
        onBtnPress={addNum}
        onDelPress={delNum}
        isActive={isButtonActive}
      />
      <div className={isButtonActive("agreed")}>
        <input
          className="keyboard__checkbox "
          type="checkbox"
          checked={isAgreed}
          onChange={toggleIsAgreed}
        />
        Я согласен с условиями
      </div>
      <button
        onClick={confirmNumberCheck}
        className={confirmButtonDisabled() + confirmButtonActive()}
      >
        confirm
      </button>
    </>
  );
};
export default Keyboard;

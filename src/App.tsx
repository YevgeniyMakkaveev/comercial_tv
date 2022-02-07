import React, { useState, useEffect, useCallback } from "react";
import buttonNavHelper, { btnMatrix } from "./units/buttonHelpers";
import KeyBoard from "./Keyboard";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [coordinates, setCoordinates] = useState<number[]>([2, 1]);
  const [coordinatesRes, setCoordinatesRes] = useState<string>("5");

  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log(e);
      const { keyCode, key } = e;
      const { length: len } = number;
      if (keyCode === 8 && number.length > 0) {
        setNumber(number.substring(0, len - 1));
        return;
      } else if (keyCode >= 37 && keyCode <= 40) {
        const crd = buttonNavHelper(key, coordinates);
        setCoordinates(crd);
        setCoordinatesRes(getCrd(crd));
        return;
      } else if (
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 96 && keyCode <= 105)
      ) {
        const newNum = number + key;
        setNumber(newNum);
        return;
      }
    },
    [number, coordinates, setCoordinates]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [keyDown, setCoordinates]);

  const addNum = (val: string) => {
    setNumber(number + val);
  };
  const delNum = () => {
    if(number.length > 0)
    setNumber(number.substring(0, number.length - 1));
  };

  const getCrd = (crd: number[] | string): string => {
    if (typeof crd === "string") return crd;
    const res = btnMatrix[crd[0]][crd[1]];
    return res;
  };
  return (
    <div className="App">
      <input value={number} />
      <button className={coordinatesRes === "x" ? "active" : ""}>X</button>
      <KeyBoard onBtnPress={addNum} onDelPress={delNum} currentValue={coordinatesRes}/>
      <button className={coordinatesRes === "confirm"? "active" : ""}>
        confirm
      </button>
    </div>
  );
}

export default App;

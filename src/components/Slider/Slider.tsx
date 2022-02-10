import React, { useState, useEffect, useCallback } from "react";
import { sliderData } from "./sliderData";
import IMainScreenComponent from "../../types/types";
import windowEnum from "../../types/enum";
import "./Slider.scss";

const Slider: React.FC<IMainScreenComponent> = ({ setActiveWindow }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = useCallback(() => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  const prevSlide = useCallback(() => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  }, [slideIndex]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { keyCode } = e;
      switch (keyCode) {
        case 37:
          prevSlide();
          break;
        case 39:
          nextSlide();
          break;
        case 13:
          setActiveWindow(windowEnum.video);
          break;
        case 27:
          e.preventDefault();
          setActiveWindow(windowEnum.video);
      }
    },
    [nextSlide, prevSlide, setActiveWindow]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className="slider">
      <button
        onClick={() => setActiveWindow(windowEnum.video)}
        className="slider__close"
      >
        X
      </button>
      {sliderData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.img} alt={obj.title} />
          </div>
        );
      })}
      <div className="slider__btns">
        <button className="btn__left" onClick={prevSlide} />
        <button className="btn__right" onClick={nextSlide} />
      </div>
    </div>
  );
};
export default Slider;

import React, { useState, useEffect, useCallback } from "react";
import "./StartScreen.scss";
import qrCode from "../../assets/qrCode.png";
import IMainScreenComponent from "../../types/types";
import windowEnum from "../../types/enum";

interface IStartScreen extends IMainScreenComponent{
  isContacted: boolean;
}

const StartScreen: React.FC<IStartScreen> = ({ setActiveWindow,isContacted }) => {
  const [showPromo, setShowPromo] = useState(false);

  !isContacted&&setTimeout(() => {
    setShowPromo(true);
  }, 5000);

  const close: React.MouseEventHandler<HTMLButtonElement> = () => {
    setActiveWindow(windowEnum.contact);
  };
  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const { keyCode} = e;
      if (keyCode === 13&&showPromo) {
        setActiveWindow(windowEnum.contact);
      }
    },
    [setActiveWindow,showPromo]
  );
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);
  const promoPopup = (
    <div className="popup">
      <span className="popup__text">
        Cтать acтрорфермером прямо сейчас и озелени красную планету!
      </span>

      <img className="qr-code" src={qrCode} alt="qrCode" />
      <button className="popup__btn" onClick={close}>
        Я ГОТОВ!
      </button>
    </div>
  );

  return (
    <div className="video">
      <iframe
        width="1240"
        height="780"
        src="https://www.youtube.com/embed/8HZ4DnVfWYQ?wmode=transparent&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      />
      {showPromo ? promoPopup : null}
    </div>
  );
};

export default StartScreen;

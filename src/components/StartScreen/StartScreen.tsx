import React,{useState} from "react";
import "./StartScreen.scss"
import IMainScreenComponent from "../../types/types";

const StartScreen: React.FC<IMainScreenComponent> = ({showContactForm}) => {
 const [showPromo, setShowPromo] = useState(true)

 setTimeout(() => {setShowPromo(true)}, 5000);

const close:React.MouseEventHandler<HTMLDivElement>=()=>{
 showContactForm(true)
}

const promoPopup = <div className="popup" onClick={close}>
 Кликни на меня. 
</div>



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
      {showPromo? promoPopup:null}
    </div>
  );
};

export default StartScreen;

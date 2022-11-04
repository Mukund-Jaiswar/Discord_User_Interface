import React from "react";
import Chiling from "../assets/just_chiling_landing.svg";
import "./abovebottom.css"

function Abovebottom() {
  return (
    <div className="abovebottom">
        <div className="divhead">
            <div className="divhead1">RELIABLE TECH FOR STAYING CLOSE</div>
            <div className="divhead2">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
        </div>
        <img className="chillimage" src={Chiling}/>
        <div className="belowdiv">
            <div className="tinystar">
                <div>Ready to start your journey?</div>
            </div>
            <div className="download">
                <svg viewBox="0 0 490 490">
                    <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                    c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                    C262.1,7.6,254.5,0,245,0z"/>
                    <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                    s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z"/>
                </svg>
                <div>Download for Windows</div>
            </div>
        </div>
    </div>
  );
}
export default Abovebottom;
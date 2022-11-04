import React from "react";
import Fandom from "../assets/fandom_landing.svg";
import "./centerbottom.css"

function Centerbottom() {
  return (
    <div className="centerbottom">
        <img className="cbimage" src={Fandom}/>
        <div className="cb">
            <div className="cb1">From few to a fandom</div>
            <div className="cb2">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
        </div>
    </div>
  );
}
export default Centerbottom;
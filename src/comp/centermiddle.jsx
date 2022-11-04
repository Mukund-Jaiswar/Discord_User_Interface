import React from "react";
import Hanging from "../assets/hanging_out_easy_landing.svg";
import "./centermiddle.css"

function Centermiddle() {
  return (
    <div className="centermiddle">
        <div className="cm">
            <div className="cm1">Where hanging out is easy</div>
            <div className="cm2">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</div>
        </div>
        <img className="cmimage" src={Hanging}/>
    </div>
  );
}
export default Centermiddle;
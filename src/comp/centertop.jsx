import React from "react";
import Inviteonly from "../assets/invite_only_landing.svg";
import "./centertop.css"

function Centertop() {
  return (
    <div className="centertop">
        <img className="ctimage" src={Inviteonly}/>
        <div className="ct">
            <div className="ct1">Create an invite-only place where you belong</div>
            <div className="ct2">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</div>
        </div>
    </div>
  );
}
export default Centertop;
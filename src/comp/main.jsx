import React, { useState } from "react";
import "./main.css"
import discordLogo from "../assets/discord_main_logo.svg";
import Download from "../assets/download.svg";
import Windowsize from "./windowsize.jsx";
import Sidebar from "./sidebar.jsx"
import {Link} from 'react-router-dom'

function Main() {

  const [sidebar,setSidebar]  = useState(false);

  const toggleSidebar = () =>{
      setSidebar((prev) => !prev)
  }

  return (
    <>   
    {sidebar?<Sidebar sidebar={sidebar} closesidebar={toggleSidebar}/>:null}
    <div className="main">
        <div className="nav">
            <div className="leftnav sm:flex-none">
                <img src={discordLogo}/>
            </div>

            {Windowsize()==='lg'?<><div className="centernav">
                <div className="navelem" id="elem1">Download</div>
                <div className="navelem" id="elem2">Nitro</div>
                <div className="navelem" id="elem3">Discover</div>
                <div className="navelem" id="elem4">Safety</div>
                <div className="navelem" id="elem5">Support</div>
                <div className="navelem" id="elem6">Blog</div>
                <div className="navelem" id="elem7">Careers</div>
            </div>
            <Link className="rightnav" to="/Login">
                <p>Login</p>
            </Link>
            </>
            :
            <>
            <div className="grow"></div>
            <div className="w-36 grid grid-cols-[60%_40%]">
                <Link className="grid grid-cols-1 bg-white rounded-full mx-[10%] my-[24%] text-sm hover:cursor-pointer" to="/Login">
                    <p className="self-center justify-self-center">Login</p>
                </Link>
                <div onClick={toggleSidebar} className="self-center justify-self-center hover:cursor-pointer">
                    <svg width="40" height="40" viewBox="0 0 40 40"><path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path></svg>
                </div>
            </div>
            </>}
        </div>


        <div className="maincontent">
            <div className="maincontent1">
                IMAGINE A PLACE...
            </div>
            <div className="maincontent2">
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            </div>
            <div className="maincontent3">                
                <div className="maincontent31">
                    <img src={Download}/>
                    <div>Download for Windows</div>
                </div>               
                <div className="maincontent32">
                    Open Discord in your browser
                </div>               
            </div>
        </div>
    </div>
    </>
  );
}

export default Main;
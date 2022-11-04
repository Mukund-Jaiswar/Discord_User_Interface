import React from "react";
import "./sidebar.css"
import discordLogo from "../assets/discord_main_logo_black.svg";

function Sidebar({sidebar,closesidebar}){
    return(
        <div className={sidebar?"sidebar sidebar-open":"sidebar"}>
            <div className="grid grid-cols-[53%_30%_17%] place-items-center border-b-2 border-zinc-200">
                <img className="" src={discordLogo}/>
                <div></div>
                <svg onClick={closesidebar} className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24"><path  d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
            </div>
            <div className="grow grid grid-rows-9 list-none pl-[38px] pt-[17px] pb-[105px] text-[0.92rem] items-center">
                <li className="text-[#5865f2]">Home</li>
                <li>Download</li>
                <li>Nitro</li>
                <li>Discover</li>
                <li>Safety</li>
                <li>Mod Academy</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Careers</li>
            </div>

            <div className="grid grid-cols-[10%_90%] bg-[#5865f2] place-items-center mx-[6%] px-[15%] my-[12.8%] text-[0.92rem] rounded-full text-white hover:cursor-pointer">
                <svg className="fill-white h-5 w-5 font-medium " viewBox="0 0 490 490">
                    <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1
                    c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1
                    C262.1,7.6,254.5,0,245,0z"/>
                    <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2
                    s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z"/>
                </svg>
                <div>Download for Windows</div>
            </div>

        </div>
    )
} 

export default Sidebar;
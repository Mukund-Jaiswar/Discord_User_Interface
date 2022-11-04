import React from "react";
import {Link} from 'react-router-dom'
import BBG from "../assets/login_bg.svg";
import BG from "../assets/qr_code.png";
import MiniDiscord from "../assets/discord_mini_icon.svg";

function Login() {
  return (
    <div style={{backgroundImage:`url(${BBG})`}} className="h-[100vh] bg-no-repeat bg-cover grid place-items-center">  
        <div className="h-[408px] w-[784px] bg-[#36393f] rounded p-[32px] grid grid-cols-[414px_66px_240px]">
            <div className="grid grid-rows-[18%_4%_78%]">
                <div>
                    <div className="px-[10px] text-[1.6rem] font-extrabold text-white text-center justify-self-center self-end">Welcome back!</div>
                    <div className="text-[0.95rem] text-gray-400 text-center justify-self-center self-center">We're so excited to see you again!</div>
                </div>

                <div></div>

                <div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="username">
                            EMAIL OR PHONE NUMBER*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="password">
                            PASSWORD<>*</>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="******************"/>
                        <p className="text-[#00aff4] text-sm hover:underline cursor-pointer">Forgot your password?</p>
                    </div>

                    <div>
                        <button class="bg-[#5865f2] w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4  mb-2 rounded focus:outline-none" type="button">
        Log In
                        </button>
                        <p className="text-sm text-gray-400">Need an account <Link to="/Register" className="text-[#00aff4] hover:underline cursor-pointer">Register</Link></p>
                    </div>

                </div>

            </div>


            <div></div>
            <div className="grid py-[10px]">
                <div className="rounded-md justify-self-center bg-white p-[7px] h-[172px] w-[172px]">
                    <div style={{backgroundImage:`url(${BG})`}} className="justify-self-center h-[158px] w-[158px] grid place-items-center">
                        <img className="bg-white rounded-full p-[8px]" src={MiniDiscord}/>
                    </div> 
                </div>
                <div className="px-[10px] text-[1.6rem] leading-7 font-extrabold text-white text-center justify-self-center self-end">Log in with QR Code</div>
                <div className="text-[0.95rem] text-gray-400 text-center justify-self-center self-center">Scan this with the <b>Discord mobile app</b> to log in instantly.</div>
            </div>
        </div>
    </div>
  );
}
export default Login;
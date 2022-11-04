import React from "react";
import {Link} from 'react-router-dom'
import BBG from "../assets/login_bg.svg";

function Register() {
  return (
    <div style={{backgroundImage:`url(${BBG})`}} className="h-[100vh] bg-no-repeat bg-cover grid place-items-center">  
            <div className="h-[550px] w-[500px] bg-[#36393f] rounded p-[32px] grid grid-rows-[12%_88%]">
                <div>
                    <div className="px-[10px] text-[1.6rem] font-extrabold text-white text-center justify-self-center self-end">Create an account</div>
                </div>

                <div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="username">
                            EMAIL*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="username" type="text" placeholder="Email"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="username">
                            USERNAME*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="USERNAME" type="text" placeholder="Username"/>
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="password">
                            PASSWORD*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="******************"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" for="password">
                            CONFIRM PASSWORD*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="******************"/>
                    </div>

                    <div>
                        <button class="bg-[#5865f2] w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4  mb-2 rounded focus:outline-none" type="button">
        Register
                        </button>
                        <Link to="/Login" className="text-[#00aff4] text-sm pl-[5px] hover:underline cursor-pointer">Already have an account?</Link>
                    </div>

                </div>

            </div>

    </div>
  );
}
export default Register;
import React from "react";
import Mains from "./comp/main.jsx";
import Centertop from "./comp/centertop.jsx";
import Centermiddle from "./comp/centermiddle.jsx";
import Centerbottom from "./comp/centerbottom.jsx";
import Abovebottom from "./comp/abovebottom.jsx";
import Bottom from "./comp/bottom.jsx";
import Login from "./comp/login.jsx";
import Register from "./comp/register.jsx";
import {BrowserRouter,Routes,Route,HashRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
        <Route path="/" exact={true} element={
            <>
                <Mains/>
                <Centertop/>
                <Centermiddle/>
                <Centerbottom/>
                <Abovebottom/>
                <Bottom/>
            </>} 
        />    
        <Route path="/Login" exact={true} element={<Login />} />
        <Route path="Register" exact={true} element={<Register />} />
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
}
export default App;

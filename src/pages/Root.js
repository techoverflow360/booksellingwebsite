import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader/TopHeader";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Signup from "../components/signup/Signup";

const Root = ({loginMode, loginModelOpen, loginModelClose, signupMode, signupModelOpen, signupModelClose}) => {
    return (
        <>
            {loginMode && <Login loginClose ={loginModelClose} />}
            {signupMode && <Signup signupClose={signupModelClose} />}
            {!loginMode && !signupMode && <>  
            <TopHeader loginOpen={loginModelOpen} signupOpen={signupModelOpen} />
            <NavBar />
            <Outlet />
            <Footer />
            </>}
            
        </>
    )
}

export default Root;
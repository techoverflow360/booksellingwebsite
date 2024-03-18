import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader/TopHeader";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <>
            <TopHeader />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;
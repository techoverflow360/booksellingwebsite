import React from "react";
import classes from './NavBar.module.css';
import { Categories } from '../../data';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={classes.navbar}>
            <Link><div className={classes.navdata}>Fiction</div></Link>
        </div>
    )
};

export default NavBar;

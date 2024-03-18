import React from "react";
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.navbar}>
            <p className={classes.navdata}>Fiction</p>
            <p className={classes.navdata}>Non-Fiction</p>
            <p className={classes.navdata}>Suspense</p>
            <p className={classes.navdata}>Thrill</p>
            <p className={classes.navdata}>Action</p>
            <p className={classes.navdata}>Fantasy</p>
            <p className={classes.navdata}>Romance</p>
            <p className={classes.navdata}>Adventure</p>
        </div>
    )
};

export default NavBar;

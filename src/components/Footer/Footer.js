import React from "react";
import classes from './Footer.module.css';
import companylogo from '../../assets/companyname.png';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footername}>
                <img src={companylogo} alt="companyname"/>
                <p>Blue Bag</p>
            </div>
            <hr />
            <div className={classes.footerdata}>
                <div className={classes.left}>
                    <p className={classes.data}>Get to know us</p>
                    <p className={classes.data}>About us</p>
                </div>
                <div className={classes.right}>
                    <p className={classes.data}>Connect With Us</p>
                    <p className={classes.data}>Facebook</p>
                    <p className={classes.data}>Twitter</p>
                    <p className={classes.data}>Instagram</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;

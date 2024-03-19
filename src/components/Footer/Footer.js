import React from "react";
import classes from './Footer.module.css';
import companylogo from '../../assets/companyname.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footername}>
                <Link to='/'><img src={companylogo} alt="companyname"/>
                <p>Blue Bag</p></Link>
            </div>
            <hr />
            <div className={classes.footerdata}>
                <div className={classes.left}>
                    <p className={classes.data}>Get to know us</p>
                    <Link><p className={classes.data}>About us</p></Link>
                </div>
                <div className={classes.right}>
                    <p className={classes.data}>Connect With Us</p>
                    <p className={classes.data}><a href="www.facebook.com">Facebook</a></p>
                    <p className={classes.data}><a href="www.twitter.com">Twitter</a></p>
                    <p className={classes.data}><a href="www.instagram.com">Instagram</a></p>
                </div>
            </div>
        </div>
    )
};

export default Footer;

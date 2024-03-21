import React from "react";
import { Link } from "react-router-dom";
import classes from './TopHeader.module.css';
import SearchBar from '../SearchBar/SearchBar';
import companyimage from '../../assets/companyname.png';
import cart from '../../assets/cart.png';
import sell from '../../assets/sell.png';
import profile from '../../assets/user.png';

const TopHeader = () => {
    let element = <div className={classes.header3}>
        <Link to='/sell'><div className={classes.headerbuttons}>
            <div className={classes.buttonicon}><img src={sell} alt="sell"/></div>
            <div className={classes.buttontext}><p>Sell</p></div>
        </div></Link>
        <div className={classes.headerbuttons}>
            <div className={classes.buttonicon}><img src={cart} alt="cart"/></div>
            <div className={classes.buttontext}><p>Cart</p></div>
        </div>
        <div className={classes.headerbuttons}>
            <div className={classes.buttonicon}><img src={profile} alt="profile"/></div>
            <div className={classes.buttontext}><p>User</p></div>
        </div>
    </div>

    element = <div className={classes.altheader3}>
        <button className={classes.signup}>Sign up</button>
        <button className={classes.signin}>Sign in</button>
    </div>
    return (
        <div className={classes.header}>
            <Link to='/'><div className={classes.header1}>
                <div className={classes.companyimage}><img src={companyimage} alt="company name"/></div>
                <div className={classes.companyname}><p>Blue Bag</p></div>
            </div></Link>
                <SearchBar />
            {element}
        </div>
    )
};

export default TopHeader;

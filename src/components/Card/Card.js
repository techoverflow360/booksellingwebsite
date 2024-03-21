import React from "react";
import classes from './Card.module.css';
import cardimage from '../../assets/slideshow1.jpg';
import cardcart from '../../assets/cardcart.jpg';
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className={classes.card}>
            <Link to='/'><div className={classes.cardimage}><img src={cardimage} alt="image not found"/></div>
            <p className={classes.title}>
                One More Lie    
            </p></Link>
            <div className={classes.parent}>
                <div className={classes.left}>
                    <p className={classes.price}>MRP : Rs. 450</p>
                    <div className={classes.leftbottom}><p className={classes.sellingprice}>Rs. 200</p><p className={classes.discount}>20% off</p></div>
                </div>
                <div className={classes.right}>
                    <button className={classes.cartbutton}><img src={cardcart} alt="cart icon not found"/></button>
                </div>
            </div>
        </div>
    )
};

export default Card
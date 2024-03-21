import React from "react";
import classes from './Home.module.css';
import Courosel from '../Courosel/Courosel';
import Card from "../Card/Card";

const Home = () => {
    return (
        <div className={classes.home}>
            {/* <div className={classes.coursoselcontainer}>
                <Courosel />
            </div> */}
            <div className={classes.homecontent}>
                <Card  />     
            </div>
        </div>
    )
};

export default Home;

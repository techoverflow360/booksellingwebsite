import React from "react";
import classes from './Login.module.css';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.avif';
import { useState } from "react";
const Login = (props) => {
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const idChangeHandler = (event) => {
        setUserId(event.target.value);
    } 
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit" , {
            userid: userid, 
            password: password, 
        });
    }
    return (
        <div className={classes.loginform}>
            <button onClick={props.loginClose}>X </button>
            <h1 className={classes.companyname}>Blue Bag</h1>
            <div className={classes.loginoptions}><img src={facebook} alt="facebook logo"/><button>Login with facebook</button></div>
            <div className={classes.loginoptions}><img src={twitter} alt="twitter logo"/><button>Login with twitter</button> </div>
            <div className={classes.loginoptions}><img src={google} alt="google logo"/><button>Login with google</button></div>
            <hr />
            <form method="POSt" onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <div><label className={classes.label}>User Id :</label></div>
                    <div><input type="text" name="userid" className={classes.inp} placeholder="Phone number, username, or email" onChange={idChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label className={classes.label}>Password :</label></div>
                    <div><input type="password" name="password" className={classes.inp} placeholder="Password" onChange={passwordChangeHandler}/></div>
                </div>
                <button type="submit" className={classes.loginbutton}>Log in</button>
            </form>
            <p className={classes.dhaa}>Don't have an account ? <button className={classes.signupbutton}>Sign up</button></p>
        </div>
    )
};

export default Login;

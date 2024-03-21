import React, { useState } from "react";
import classes from './Signup.module.css';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.avif';

const Signup = (props) => {
    const [userid, setUserId] = useState("");
    const [fullname, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const idChangeHandler = (event) => {
        setUserId(event.target.value);
    } 
    const fullnameChangeHandler = (event) => {
        setFullName(event.target.value);
    }
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit" , {
            userid: userid, 
            password: password, 
            fullname: fullname, 
            username: username,
        });
    }
    return (
        <div className={classes.signupform}>
            <button onClick={props.signupClose}>X </button>
            <h1 className={classes.companyname}>Blue Bag</h1>
            <div className={classes.signupoptions}><img src={facebook} alt="facebook logo"/><button>Login with facebook</button></div>
            <div className={classes.signupoptions}><img src={twitter} alt="twitter logo"/><button>Login with twitter</button> </div>
            <div className={classes.signupoptions}><img src={google} alt="google logo"/><button>Login with google</button></div>
            <hr />
            <form method="POSt" onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <div><label className={classes.label}>User Id :</label></div>
                    <div><input type="text" name="userid" className={classes.inp} placeholder="Mobile Number or email" onChange={idChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label className={classes.label}>Full Name :</label></div>
                    <div><input type="text" name="fullname" className={classes.inp} placeholder="Full Name" onChange={fullnameChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label className={classes.label}>Username :</label></div>
                    <div><input type="text" name="username" className={classes.inp} placeholder="Username" onChange={usernameChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label className={classes.label}>Password :</label></div>
                    <div><input type="password" name="password" className={classes.inp} placeholder="Password" onChange={passwordChangeHandler}/></div>
                </div>

                <button type="submit" className={classes.loginbutton}>Sign up</button>
            </form>
            <p className={classes.dhaa}>Already have an account ? <button className={classes.loginbutton}>Log in</button></p>
        </div>
    )
};

export default Signup;

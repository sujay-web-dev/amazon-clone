import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"

function Login() {
    const history = useHistory();
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message));
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {

        })
        .catch(e => alert(e.message));
    }


  return (
    <div className="login">
      <Link to="/">
        <img src="blacklogo.png" alt="Login_Logo" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input value={email} onChange={event => setemail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setpassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signinbutton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to Sujayzon's Conditions of Use & Site. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerbutton">Create Your Sujayzon Account</button>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./Login.css";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useStateValue } from "../providers/StateProviders";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: "SET_USER",
        user: user,
      });
      history.push("/");
      window.alert(email  + " is now signed in!");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch({
        type: "SET_USER",
        user: user,
      });
      history.push("/");
      window.alert(email  + ", Welcome to our store!");
    
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInBtn" onClick={signIn}>
            Signin
          </button>
          <p>By signing up you agree to the privacy terms and conditions</p>

          <button className="login__registerBtn" onClick={register}>
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

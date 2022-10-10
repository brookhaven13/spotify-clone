import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";

const logo = require("./../assets/img/spotify-logo-white.png");

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

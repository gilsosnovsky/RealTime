import React from "react";
import "./Login.css";
import facebook from "./facebook.png";
import google from "./google.png";

const Login = (props) => {
  return (
    <div id="Login">
      <div id="wellcome">ברוכים הבאים</div>

      <div id="loginCenter">
        <fieldset>
          <input
            class="field"
            id="username"
            placeholder="Username"
            type="text"
            tabindex="4"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            id="fname"
            placeholder="Password"
            type="password"
            tabindex="5"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <div id="login">Login</div>
        </fieldset>

        <div class="loginWith">
          <a href="#">
            <img src={google} class="loginWithButton"></img>
          </a>

          <a href="#">
            <img src={facebook} class="loginWithButton"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;

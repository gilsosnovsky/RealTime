import React from "react";
import "./Login.css";

const Login = (props) => {
  return (
    <div id="Login">
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/bootstrap/css/bootstrap.min.css"
      ></link>
      <h1>ברוכים הבאים</h1>
      <div id="loginCenter">
        <fieldset>
          <input
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
            id="fname"
            placeholder="Password"
            type="password"
            tabindex="5"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>

        <div class="flex-c-m">
          <a href="#" class="login100-social-item bg1">
            <i class="fa fa-facebook"></i>
          </a>

          <a href="#" class="login100-social-item bg2">
            <i class="fa fa-twitter"></i>
          </a>

          <a href="#" class="login100-social-item bg3">
            <i class="fa fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;

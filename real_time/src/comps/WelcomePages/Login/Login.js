import React, { Component } from "react";
import "./Login.css";
import facebook from "./facebook.png";
import google from "./google.png";


class Login extends Component{

  constructor(props) {
    super(props);
  }


  onClickConnect=()=>{
    if(this.props.pageBodyState==="EmloyeeLogin"){
      //check fields

      //if correct
      this.props.clickConnectEmployee();
    }
    else{
      //check files

      //if correct
      this.props.clickConnectBusiness();
    }
    
    
  
  };
  render(){
  return (
    <div id="Login">
      <div id="loginContainer">
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
            <div id="login" onClick={this.onClickConnect}>התחבר</div>
          </fieldset>

          <fieldset>
            <div id="SignUponLogin" onClick={this.props.clickSignUp}>
              הרשמה
            </div>
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
    </div>
  );
  }
};
export default Login;

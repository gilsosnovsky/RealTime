import React, { Component } from "react";
import "./Login.css";
import facebook from "./facebook.png";
import google from "./google.png";
import fire from "../../../firebaseConfig"




class Login extends Component{

  constructor(props) {
    super(props);
    this.login=this.login.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
    this.state={
      user: {},
      email: '',
      password: ''
    }
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      //console.log(user);
      if(user)
      {
        this.setState({user});
      }
      else
      {
        this.setState({user:null});
      }
    });
  }
  componentDidMount(){
    this.authListener();
  }
  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  handleChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      //callback
      console.log('successful sign in');
      this.onClickConnect();
    }).catch((error)=>{
      console.log(error);
    });
  }

  onClickConnect=()=>{
    if(this.props.pageBodyState==="EmloyeeLogin")
      this.props.clickConnectEmployee();
      //this.props.clickConnectAdmin();
    else
      this.props.clickConnectBusiness();
  };


  render(){
  return (
    <div id="Login">
      <div id="loginContainer">
        
        <div id="wellcome">ברוכים הבאים</div>

        <div id="loginCenter">
          <fieldset>
            <input
              className="field"
              id="email"
              placeholder="Username"
              type="text"
              tabIndex="4"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              required
              autoFocus
            />
          </fieldset>

          <fieldset>
            <input
              className="field"
              id="password"
              placeholder="Password"
              type="password"
              tabIndex="5"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </fieldset>

          <fieldset>
            <div id="login" onClick={this.login}>התחבר</div>
          </fieldset>

          <fieldset>
            <div id="forgotPassword" onClick={this.props.clickForgotPassword}>
              שכחתי סיסמא
            </div>
          </fieldset>

          <fieldset>
            <div id="SignUponLogin" onClick={this.props.clickSignUp}>
              הרשמה
            </div>
          </fieldset>

          <div class="loginWith">
            {/* <a href="#"> */}
              <img src={google} class="loginWithButton" alt ="google_img"></img>
            {/* </a> */}

            {/* <a href="#"> */}
              <img src={facebook} class="loginWithButton" alt ="facebook_img"></img>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
  }
};
export default Login;

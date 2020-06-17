import React, { Component } from "react";
import "./Login.css";
import facebook from "./facebook.png";
import google from "./google.png";
import fire from "../../../firebaseConfig"

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      user: {},
      email: '',
      password: '',
      error_msg: ''
    }
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null });
      }
    });
  }
  componentDidMount() {
    this.authListener();
  }
  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      //callback
      console.log('successful sign in');
      console.log(user.user.email);
      console.log(user);
      // this.onClickConnect();
      const db = fire.database();
      var userEmail = user.user.email;
      if (this.props.pageBodyState === "EmloyeeLogin") {

        db.ref("/employees/employees_list").on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            if (snap.val().email === userEmail) {
              this.props.clickConnectEmployee(snap.val(), snap.ref.key);
              return;
            }
          });
        });

        db.ref("/admins/admins_list").on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            if (snap.val().email === userEmail) {
              this.props.clickConnectAdmin(snap.val(), snap.ref.key);
              return;
            }
          });
          this.setState({error_msg: "המשתמש לא קיים במערכת העובדים"});
        });
      }
      else if (this.props.pageBodyState === 'BusinessLogin') {
        db.ref("/business/business_list").on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            if (snap.val().email === userEmail) {
              this.props.clickConnectBusiness(snap.val(), snap.ref.key);
              return;
            }
          });
        });
        this.setState({error_msg: "המשתמש לא קיים במערכת העסקים"});
      }
    }).catch((error) => {
      this.setState({error_msg: "שם משתמש או סיסמה שגויים"});
      console.log(error);
    });
  }

  render() {
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
            <h6>{this.state.error_msg}</h6>
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

            <div className="loginWith">
              {/* <a href="#"> */}
              <img src={google} className="loginWithButton" alt="google_img"></img>
              {/* </a> */}
              {/* <a href="#"> */}
              <img src={facebook} className="loginWithButton" alt="facebook_img"></img>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Login;

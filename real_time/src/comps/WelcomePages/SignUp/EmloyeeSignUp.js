
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import fire from '../../../firebaseConfig';

class EmployeeSignUp extends Component{

  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      secondPassword: '',  // compare between the two passwords before sign up
      firstName: '',
      lastName: '',
      phoneNumber: '',
      birthdate: '',
      address: '',
      favoriteJobs: '',
      aboutMe: ''
    }
  }
  render(){
    return (
      <div class="SignUp">
        <div id="signUpContainer">
          <div id="signUpTitle">הרשמה</div>
          <fieldset>
            <input
              class="field"
              placeholder="אימייל"
              type="email"
              tabindex="2"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="סיסמא"
              type="password"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="חזור על הסיסמא"
              type="password"
              tabindex="2"
              required
            />
          </fieldset>
          <br/>
          <fieldset>
            <input
              class="field"
              id="Sfirstname"
              placeholder="שם פרטי"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              id="Slastname"
              placeholder="שם משפחה"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="טלפון"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <label id="birthdate_title">תאריך לידה:</label>
          <fieldset>
            <input
              class="field"
              placeholder="תאריך לידה"
              type="date"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="כתובת מלאה"
              type="text"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              class="field"
              placeholder="תחומי עבודה מועדפים"
              type="text"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              class="field"
              placeholder="קצת על עצמי"
              tabindex="4"
            ></textarea>
          </fieldset>

          <fieldset>
            <div id="signUpButton">הרשם</div>
          </fieldset>
        </div>
      </div>
    );
  }
}
export default EmployeeSignUp;

import React, { Component } from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import fire from "../../../firebaseConfig";


class BusinessSignUp extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      email: '',
      password: '',
      secondPassword: '',  // compare between the two passwords before sign up
      company_name: '',
      first_Name: '',
      full_name: '',
      phone_number: '',
      jobs_length: ''
    }
  }

  onSignUpBusiness=(e)=>{
    e.preventDefault();
    this.setState({
      email: this.email.value,
      password: this.password.value,
      secondPassword: this.secondPassword.value,  // compare between the two passwords before sign up
      company_name: this.business_name.value,
      first_Name: this.first_Name.value,
      full_name: this.last_name.value,
      phone_number: this.phone_number.value,
    }, () => {
      const db = fire.database();
      db.ref("/business/business_list").push(this.state);
    });
  }

  onOfferJobsChanged = (e) => {
    this.setState({
      jobs_length: e.currentTarget.value
    });
  }
  

  render() {
    return (
      <div class="SignUp">
        <div id="signUpContainer">
          <div id="signUpTitle">הרשמה</div>
          <fieldset>
            <input
              class="field"
              placeholder="אימייל"
              ref={(c) => this.email = c}
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
              ref={(c) => this.password = c}
              type="password"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="חזור על הסיסמא"
              ref={(c) => this.secondPassword = c}
              type="password"
              tabindex="2"
              required
            />
          </fieldset>
          <br/>
          <fieldset>
            <input
              class="field"
              id="Sfirst_name"
              placeholder="שם פרטי"
              ref={(c) => this.first_Name = c}
              type="text"
              tabindex="1"
              required
            />
          </fieldset>
          
          <fieldset>
            <input
              class="field"
              id="Slast_name"
              placeholder="שם משפחה"
              ref={(c) => this.last_name = c}
              type="text"
              tabindex="1"
              required
            />
          </fieldset>

          <fieldset>
            <input
              class="field"
              placeholder="שם העסק"
              ref={(c) => this.business_name = c}
              type="text"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              class="field"
              placeholder="טלפון"
              ref={(c) => this.phone_number = c}
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>

          <fieldset>
            <label id="radio_button_container">
              המשרות המוצעות:
              <br />
              <label className="radio_button">
                <input
                  type="radio"
                  id="short_term"
                  name="radAnswer"
                  value="טווח קצר"
                  onChange={this.onOfferJobsChanged}
                />
                טווח קצר
              </label>
              <label className="radio_button">
                <input 
                type="radio" 
                id="long_term" 
                name="radAnswer" 
                value="עבודה קבועה"
                onChange={this.onOfferJobsChanged}/>
                עבודה קבועה
              </label>
              <label className="radio_button">
                <input type="radio"
                 id="both"
                 name="radAnswer"
                 value="גם וגם"
                 onChange={this.onOfferJobsChanged}
                  />
                גם וגם
              </label>
            </label>
          </fieldset>

          <fieldset>
            <div id="signUpButton" onClick={this.onSignUpBusiness}>הרשם</div>
          </fieldset>
        </div>
      </div>
    );
  };
}
export default BusinessSignUp;

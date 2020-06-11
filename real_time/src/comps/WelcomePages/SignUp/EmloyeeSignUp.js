
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import fire from "../../../firebaseConfig";

class EmployeeSignUp extends Component{

  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      secondPassword: '',  // compare between the two passwords before sign up
      first_name: '',
      last_name: '',
      phone_number: '',
      birth_date: '',
      address: '',
      favorite_jobs: '',
      about_me: ''
    }
  }

  

  onSignUpEmployee=(e)=>{
    e.preventDefault();
    this.setState({
      email: this.email.value,
      password: this.password.value,
      secondPassword: this.secondPassword.value,  // compare between the two passwords before sign up
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      phone_number: this.phone_number.value,
      birth_date: this.birth_date.value,
      address: this.full_adress.value,
      favorite_jobs: this.favorite_job.value,
      about_me: this.about_me.value
    }, () => {
      const db = fire.database();
      db.ref("/employees/employees_list").push(this.state);
    });
  }


  render(){
    return (
      <div class="SignUp">
        <form action="" method="post" onSubmit={this.onSignUpEmployee}>
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
              id="Sfirstname"
              placeholder="שם פרטי"
              ref={(c) => this.first_name = c}
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
              ref={(c) => this.last_name = c}
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
              ref={(c) => this.phone_number = c}
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
              ref={(c) => this.birth_date = c}
              type="date"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="כתובת מלאה"
              ref={(c) => this.full_adress = c}
              type="text"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              class="field"
              placeholder="תחומי עבודה מועדפים"
              ref={(c) => this.favorite_job = c}
              type="text"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              class="field"
              placeholder="קצת על עצמי"
              ref={(c) => this.about_me = c}
              tabindex="4"
            ></textarea>
          </fieldset>

          <fieldset>
            <button
             id="signUpButton" 
             name="submit"
            type="submit"
            data-submit="...Sending">הרשם
            </button>
          </fieldset>
        </div>
        </form>
      </div>
    );
  }
}
export default EmployeeSignUp;

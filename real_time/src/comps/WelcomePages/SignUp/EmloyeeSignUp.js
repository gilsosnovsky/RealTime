import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import fire from "../../../firebaseConfig";

class EmployeeSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      birth_date: "",
      address: "",
      favorite_jobs: "",
      type: "",
      about_me: "",
      password: "",
      secondPassword: "", // compare between the two passwords before sign up
      error_msg: "",
    };
  }

  onSignUpEmployee = (e) => {
    e.preventDefault();
    if (this.password.value !== this.secondPassword.value) {
      this.setState({ error_msg: "second password wrong" }); // need more checks for the input
      return;
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then((user) => {
        const db = fire.database();
        var to_db = {
          email: this.email.value.toLocaleLowerCase(),
          first_name: this.first_name.value,
          last_name: this.last_name.value,
          phone_number: this.phone_number.value,
          birth_date: this.birth_date.value,
          address: this.adress.value,
          favorite_jobs: this.favorite_job.value,
          type: "employee",
          about_me: this.about_me.value,
          status:"approved",
          jobs: ["no jobs yet"],
        };
        db.ref("/employees/employees_list").push(to_db);
        this.props.clickLoginEmployee();
      })
      .catch((error) => {
        console.log(error.message); //posting the error from firebase in english
        this.setState({ error_msg: error.message });
      });
  };

  render() {
    return (
      <div class="SignUp">
        <form action="" method="post" onSubmit={this.onSignUpEmployee}>
          <div id="signUpContainer">
            <div id="signUpTitle">הרשמה</div>
            <fieldset>
              <input
                className="field"
                placeholder="אימייל"
                ref={(c) => (this.email = c)}
                type="email"
                tabIndex="2"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input
                className="field"
                placeholder="סיסמא"
                ref={(c) => (this.password = c)}
                type="password"
                tabIndex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                className="field"
                placeholder="חזור על הסיסמא"
                ref={(c) => (this.secondPassword = c)}
                type="password"
                tabIndex="2"
                required
              />
            </fieldset>
            <br />
            <fieldset>
              <input
                className="field"
                id="Sfirstname"
                placeholder="שם פרטי"
                ref={(c) => (this.first_name = c)}
                type="text"
                tabIndex="1"
                required
              />
            </fieldset>
            <fieldset>
              <input
                className="field"
                id="Slastname"
                placeholder="שם משפחה"
                ref={(c) => (this.last_name = c)}
                type="text"
                tabIndex="1"
                required
              />
            </fieldset>
            <fieldset>
              <input
                className="field"
                placeholder="טלפון"
                ref={(c) => (this.phone_number = c)}
                type="tel"
                tabIndex="3"
                required
              />
            </fieldset>
            <label id="birthdate_title">תאריך לידה:</label>
            <fieldset>
              <input
                className="field"
                placeholder="תאריך לידה"
                ref={(c) => (this.birth_date = c)}
                type="date"
                tabIndex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input
                className="field"
                placeholder="כתובת מלאה"
                ref={(c) => (this.adress = c)}
                type="text"
                tabIndex="2"
                required
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                placeholder="תחומי עבודה מועדפים"
                ref={(c) => (this.favorite_job = c)}
                type="text"
                tabIndex="2"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                className="field"
                placeholder="קצת על עצמי"
                ref={(c) => (this.about_me = c)}
                tabIndex="4"
              ></textarea>
            </fieldset>

            <fieldset>
              <button
                id="signUpButton"
                name="submit"
                type="submit"
                data-submit="...Sending"
              >
                הרשם
              </button>
            </fieldset>
            <h5>{this.state.error_msg}</h5>
          </div>
        </form>
      </div>
    );
  }
}
export default EmployeeSignUp;

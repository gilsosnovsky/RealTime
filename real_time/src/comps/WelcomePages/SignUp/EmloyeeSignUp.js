import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";

const EmployeeSignUp = (props) => {
  return (
    <div class="SignUp">
      <div id="signUpContainer">
        <div id="signUpTitle">הרשמה</div>
        <fieldset>
          <input
            class="field"
            id="Sname"
            placeholder="שם מלא"
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

        <fieldset>
          <input
            class="field"
            placeholder="אימייל"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>

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
};
export default EmployeeSignUp;

import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";

const BusinessSignUp = (props) => {
  return (
    <div class="SignUp">
      <div id="signUpContainer">
        <div id="signUpTitle">הרשמה</div>

        <fieldset>
          <input
            class="field"
            id="Sname"
            placeholder="שם המעסיק"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            placeholder="שם העסק"
            type="text"
            tabindex="2"
            required
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
          <label id="radio_button_container">
            המשרות המוצעות:
            <br />
            <label className="radio_button">
              <input
                type="radio"
                id="short_term"
                name="radAnswer"
                checked="checked"
              />
              טווח קצר
            </label>
            <label className="radio_button">
              <input type="radio" id="long_term" name="radAnswer" />
              עבודה קבועה
            </label>
            <label className="radio_button">
              <input type="radio" id="both" name="radAnswer" />
              גם וגם
            </label>
          </label>
        </fieldset>

        <fieldset>
          <div id="signUpButton">הרשם</div>
        </fieldset>
      </div>
    </div>
  );
};
export default BusinessSignUp;

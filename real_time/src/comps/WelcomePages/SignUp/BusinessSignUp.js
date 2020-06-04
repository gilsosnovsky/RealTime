import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const BusinessSignUp = (props) => {
    return (
        <div class="sign_up_business">
          <form id="sign_up_Business" action="" method="post">
          <div id="signup">
            הרשמה
            </div>
            <fieldset>
              <input
                id="Sname"
                placeholder="שם המעסיק"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            
            <fieldset>
              <input placeholder="שם העסק" type="text" tabindex="2" required />
            </fieldset>

            <fieldset>
              <input placeholder="טלפון" type="tel" tabindex="3" required />
            </fieldset>

            <fieldset>
              <input placeholder="אימייל" type="email" tabindex="2" required />
            </fieldset>

            <fieldset>
              <label id="radio_button_container">המשרות המוצעות:
              <br />
                <label className="radio_button">
                  <input type="radio" id="short_term" name="radAnswer" checked="checked" />
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
          </form>
        </div> 
    );
};
export default BusinessSignUp;
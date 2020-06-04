import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const EmployeeSignUp = (props) => {
    return (
        <div class="sign_up_employee">
          <form id="sign_up_employee" action="" method="post">
          <div id="signup">
            הרשמה
            </div>
            <fieldset>
              <input
                id="Sname"
                placeholder="שם מלא"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>

            <fieldset>
              <input placeholder="טלפון" type="tel" tabindex="3" required />
            </fieldset>

            <fieldset>
              <input placeholder="אימייל" type="email" tabindex="2" required />
            </fieldset>

            <fieldset>
              <input placeholder="date" type="date" tabindex="3" required />
            </fieldset>

            <fieldset>
              <input placeholder="כתובת מלאה" type="text" tabindex="2" required />
            </fieldset>

            <fieldset>
              <input placeholder="תחומי עבודה מועדפים" type="text" tabindex="2" required />
            </fieldset>

            <fieldset>
                <textarea
                placeholder="קצת על עצמי"
                tabindex="4"
                ></textarea>
               
            </fieldset>

            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div> 
    );
};
export default EmployeeSignUp;
import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = (props) => {
    return (
        <div class="contactPageContainer">
          <form id="contactPage" action="" method="post">
          <div id="contactPage_p1">
            דברו איתנו
            </div>
            <fieldset>
              <input
                id="fname"
                placeholder="שם מלא"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>

            <fieldset>
              <input placeholder="אימייל" type="email" tabindex="2" required />
            </fieldset>

            <fieldset>
              <input placeholder="טלפון" type="tel" tabindex="3" required />
            </fieldset>

            <fieldset>
                <textarea
                placeholder="תוכן ההודעה"
                tabindex="4"
                required
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
export default Contact;
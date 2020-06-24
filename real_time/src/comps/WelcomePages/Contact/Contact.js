import React, { Component } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.css";
import fire from "../../../firebaseConfig";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      phone_number: "",
      message: "",
    };
  }

  onClickContact = (e) => {
    e.preventDefault();
    this.setState(
      {
        full_name: this.full_name.value,
        email: this.email.value,
        phone_number: this.tel.value,
        message: this.message.value,
      },
      () => {
        const db = fire.database();
        db.ref("/messages/messages_contact").push(this.state);
      }
    );
  };

  render() {
    return (
      <div class="contactPageContainer">
        <form
          id="contactPage"
          action=""
          method="post"
          onSubmit={this.onClickContact}
        >
          <div id="contactPage_p1">צור קשר</div>
          <fieldset>
            <input
              id="fname"
              placeholder="שם מלא"
              ref={(c) => (this.full_name = c)}
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>

          <fieldset>
            <input
              placeholder="אימייל"
              ref={(c) => (this.email = c)}
              type="email"
              tabindex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              placeholder="טלפון"
              type="tel"
              ref={(c) => (this.tel = c)}
              tabindex="3"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="תוכן ההודעה"
              ref={(c) => (this.message = c)}
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
  }
}
export default Contact;

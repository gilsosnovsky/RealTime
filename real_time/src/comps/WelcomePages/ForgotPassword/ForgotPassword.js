import React, { Component } from "react";
import fire from "../../../firebaseConfig";
import "./ForgotPassword.css";
import "./EmailSent"

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.onForgotPassword = this.onForgotPassword.bind(this);
    this.passwordSent = this.passwordSent.bind(this);
    this.state = {
      email: '',
      error_msg: ''
    }
  }

  onForgotPassword = (e) => {
    e.preventDefault();
    this.setState({
      email: this.email.value
    },
      () => {
        var auth = fire.auth();
        var emailAddress = this.email.value;

        auth.sendPasswordResetEmail(emailAddress).then(() => {
          this.passwordSent();
        }).catch((error) => {
          this.handleError(error.message);
        });
      });
  }
  handleError = (error) => {
    this.setState({ error_msg: error });
  }

  passwordSent = (e) => {
    this.props.passwordChange(this.state.email);

  }
  render() {
    return (
      <div id="SignUp">
        <form action="" method="post" onSubmit={this.onForgotPassword}>
          <div id="signUpContainer">
            <div id="signUpTitle">שחזור סיסמא</div>
            <fieldset>
              <input
                className="field"
                placeholder="אימייל"
                ref={(c) => this.email = c}
                type="email"
                tabIndex="2"
                required
                autoFocus
              />
            </fieldset>

            <fieldset>
              <button
                id="signUpButton"
                name="submit"
                type="submit"
                data-submit="...Sending">שחזר סיסמא
            </button>
            </fieldset>
            <h5>{this.state.error_msg}</h5>
          </div>
        </form>
      </div>
    );
  };
}

export default ForgotPassword;

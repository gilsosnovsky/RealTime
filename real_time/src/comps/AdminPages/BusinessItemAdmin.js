import React from "react";
import "./BusinessItemAdmin.css";
// import fire from "../../firebaseConfig";

class BusinessItemAdmin extends React.Component {
  state = {
    email: this.props.email,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    phone_number: this.props.phone_number,
    company_name: this.props.company_name,
    job_length: this.props.job_length,
    business_index: this.props.business_index,
    onClickFunc: this.props.onClickFunc,
    user_pic: this.props.user_pic,
    text_in_button: this.props.text_in_button,
  };

  render() {
    return (
      <div id="business_deatils_container">
        <div id="business_deatils_item">
          <div id="business_item_logo_container">
            <img
              id="business_item_logo"
              src={this.state.user_pic}
              alt="user_pic"
            />
          </div>
          <div id="business_item_info">
            <div className="business_full_info">
              <b>שם פרטי: </b>
              {this.state.first_name}
              <br />
              <b> שם משפחה: </b>
              {this.state.last_name}
              <br />
              <b> אימייל: </b>
              {this.state.email}
              <br />
              <b> טלפון: </b>
              {this.state.phone_number}
              <br />
              <b>שם העסק:</b>
              {this.state.company_name}
              <br />
              <b>המשרות המוצעות: </b>
              {this.state.job_length}
              <br />
            </div>
          </div>
          <div id="business_deatils_buttons">
            <div
              id="business_deatils_buttons_delete_employee"
              onClick={() => {
                {
                  this.state.onClickFunc(
                    this.state.business_index,
                    this.state.email
                  );
                }
              }}
            >
              {this.state.text_in_button}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessItemAdmin;

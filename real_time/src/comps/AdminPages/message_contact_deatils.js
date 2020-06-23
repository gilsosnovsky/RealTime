import React from "react";
import "./message_contact_deatils.css";

class MessageContactDeatils extends React.Component {
  state = {
    full_name: this.props.full_name,
    email: this.props.email,
    phone_number: this.props.phone_number,
    message: this.props.message,
  };

  render() {
    return (
      <div id="message_container">
        <div className="message_contact_full_info">
          <b>שם מלא: </b>
          {this.state.full_name}
          <br />
          <b>כתובת מייל: </b>
          {this.state.email}
          <br />
          <b>מספר טלפון: </b>
          {this.state.phone_number}
          <br />

          <div className="messqge_contact_content">
            <b>הודעה: </b>
            <br />
            {this.state.message} <br />
          </div>
        </div>
        <div id="message_contact_deatils_button">
          <div
            id="message_contact_deatils_button_delete_message"
            onClick={() => {
              alert("delete message");
            }}
          >
            מחק הודעה
          </div>
        </div>
      </div>
    );
  }
}
export default MessageContactDeatils;

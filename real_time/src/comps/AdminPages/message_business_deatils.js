import React from "react";
import "./message_business_deatils.css";

class MessagebusinessDeatils extends React.Component {
  state = {
    index: this.props.index,
    business_name: this.props.business_name,
    email: this.props.email,
    full_name: this.props.full_name,
    how_got_us: this.props.how_got_us,
    message: this.props.message,
    offer_jobs: this.props.offer_jobs, 
    phone_number: this.props.phone_number,
  };

  render() {
    return (
      <div id="message_container">
        <div className="message_business_full_info">
          <b>שם מלא: </b>
          {this.state.full_name}
          <br />
          <b>שם העסק: </b>
          {this.state.business_name}
          <br />
          <b>כתובת מייל: </b>
          {this.state.email}
          <br />
          <b>מספר טלפון: </b>
          {this.state.phone_number}
          <br />
          <b>איך הגיע אלינו: </b>
          {this.state.phone_number}
          <br />
          <b>סוג המשרה: </b>
          {this.state.offer_jobs}
          <br />

          <div className="messqge_business_content">
            <b>תוכן ההודעה: </b>
            <br />
            {this.state.message} <br />
          </div>
        </div>
        <div id="message_business_deatils_button">
          <div
            id="message_business_deatils_button_delete_message"
            onClick = {() => this.props.onClickDeleteMessage(this.props.index)}
          >
            מחק הודעה
          </div>
        </div>
      </div>
    );
  }
}
export default MessagebusinessDeatils;

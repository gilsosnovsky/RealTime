import React from "react";
import "./employee_deatils.css";

class MessageContactDeatils extends React.Component {

    state = {
        full_name: this.props.full_name,
        email: this.props.email,
        phone_number: this.props.phone_number,
        message: this.props.message
    };

    render() {
        return (
            <div id="message_contact_deatils_container">
                <div id="message_contact_deatils_item" >
                    <div id="message_contact_item_info">
                        <div className="message_contact_full_info">
                            <b>הודעה מאת: </b><br />
                            <b>שם מלא: </b>{this.state.full_name}<br />
                            <b>כתובת מייל: </b>{this.state.email}<br />
                            <b>מספר טלפון: </b>{this.state.phone_number}<br />
                        </div>
                        <div className="messqge_contact_content">
                            {this.state.message} <br />
                        </div>
                        <div id="message_contact_deatils_button">
                            <div
                                id="message_contact_deatils_button_delete_message"
                                onClick={() => {
                                    alert("delete message");
                                }}>
                                מחק הודעה
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
export default MessageContactDeatils;

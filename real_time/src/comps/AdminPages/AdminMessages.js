import React from "react";
import "./AdminMessages.css";
import fire from "../../firebaseConfig";
import MessageContactDeatils from "./message_contact_deatils";

class AdminMessages extends React.Component {
  state = {
    messages: [],
    loading: "visible",
    index: this.props.index,
    msg: "",
  };

  componentDidMount() {
    const db = fire.database();
    let messages_list = [];
    db.ref("/messages/messages_contact/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        messages_list.push(snap.val());
        if (messages_list.length === 0)
          this.setState({ msg: "אין הודעות כרגע" });
      });
      this.setState({ messages: messages_list, loading: "hidden" });
    });
  }

  render() {
    return (
      <div id="admin_messages">
        <div id="messages">הודעות </div>
        <div
          id="admin_messages_contact_loading_messages_container"
          style={{ visibility: `${this.state.loading}` }}
        >
          טוען...
          <br />
          <div
            id="admin_messages_contact_loading_messages"
            className="spinner-border"
            role="status"
            style={{}}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <ul>
          {this.state.messages.map((message, index) => {
            return (
              <MessageContactDeatils
                full_name={message.full_name}
                email={message.email}
                phone_number={message.phone_number}
                message={message.message}
              />
            );
          })}
        </ul>
        <div id="msg">{this.state.msg}</div>
      </div>
    );
  }
}
export default AdminMessages;

import React from "react";
import "./AdminMessages.css";
import fire from "../../firebaseConfig";
import MessageContactDeatils from "./message_contact_deatils";
import MessagebusinessDeatils from "./message_business_deatils";

class AdminMessages extends React.Component {
  constructor(props) {
    super(props);
    this.onClickMarkAsRead = this.onClickMarkAsRead.bind(this);
  }
  state = {
    bodyType: "contact_messages",
    messages_unread: [],
    messages_read: [],
    business_messages_unread: [],
    business_messages_read: [],
    loading: "visible",
    msg_contact: "",
    msg_business: "",
    status: ""
  };

  componentDidMount() {
    const db = fire.database();
    let messages_list_unread = [];
    let messages_list_read = [];

    db.ref("/messages/messages_contact/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        if (snap.val().status === "unread")
          messages_list_unread.push(snap);
        else 
          messages_list_read.push(snap);
      });
      this.setState({ messages_unread: messages_list_unread.reverse(), messages_read: messages_list_read.reverse(), loading: "hidden" });
      if (messages_list_read.length === 0 && messages_list_unread.length === 0)
        this.setState({ msg_contact: "אין הודעות מצור קשר כרגע" });
    });

    let bMessages_list_unread = [];
    let bMessages_list_read = [];
    db.ref("/messages/messages_toBusiness/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        if (snap.val().status === "unread")
          bMessages_list_unread.push(snap);
        else 
          bMessages_list_read.push(snap);
        if (bMessages_list_read.length === 0 && bMessages_list_unread.length === 0)
          this.setState({ msg_business: "אין הודעות מעסקים כרגע" });
      });
      this.setState({ business_messages_unread: bMessages_list_unread.reverse(), business_messages_read: bMessages_list_read.reverse()});
    });
  }

  onClickMarkAsRead(message_index){
    const db = fire.database();
    let path = "";
    if (this.state.bodyType === "contact_messages")
      path = "/messages/messages_contact/" + message_index;
    else
      path = "/messages/messages_toBusiness/" + message_index;
    db.ref(path).update({status: "read"}).then(this.forceUpdate());
    this.props.clickAdminMessages();
  }

  render() {
    if (this.state.bodyType === "contact_messages")
      return (
        <div id="admin_messages">
          <div id="messages"> הודעות מ'צור קשר' </div>
          <div id="switch_message_button">
          <div
            id="switch_message_type_button"
            onClick={() => {
              this.setState ({bodyType: "business_messages"});
            }}
          >
            עבור להודעות מעסקים
          </div>
        </div>
          <div
            id="admin_messages_contact_loading_messages_container"
            style={{ visibility: `${this.state.loading}` }}>
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
            {this.state.messages_unread.map((message, index) => {
              return (
                <MessageContactDeatils
                  index={message.ref.key}
                  full_name={message.val().full_name}
                  email={message.val().email}
                  phone_number={message.val().phone_number}
                  message={message.val().message}
                  status={message.val().status}
                  onClickMarkAsRead={this.onClickMarkAsRead}
                />

              );
            })}
          </ul>
          <div id="messages"> הודעות שנקראו </div>
          <ul>
            {this.state.messages_read.map((message, index) => {
              return (
                <MessageContactDeatils
                  index={message.ref.key}
                  full_name={message.val().full_name}
                  email={message.val().email}
                  phone_number={message.val().phone_number}
                  message={message.val().message}
                  status={message.val().status}
                  onClickMarkAsRead={this.onClickMarkAsRead}
                />
              );
            })}
          </ul>
          <div id="msg">{this.state.msg_contact}</div>
        </div>
      );
    else
      return (
        <div id="admin_messages">
          <div id="messages"> הודעות מעסקים </div>
          <div id="switch_message_button">
            <div
              id="switch_message_type_button"
              onClick={() => {
                this.setState ({bodyType: "contact_messages"});
              }}
            >
              עבור להודעות מ'צור קשר'
            </div>
          </div>
          <div
            id="admin_messages_contact_loading_messages_container"
            style={{ visibility: `${this.state.loading}` }}>
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
            {this.state.business_messages_unread.map((message, index) => {
              return (
                <MessagebusinessDeatils
                  index={message.ref.key}
                  status={message.val().status}
                  business_name={message.val().business_name}
                  email={message.val().email}
                  full_name={message.val().full_name}
                  how_got_us={message.val().how_got_us}
                  message={message.val().message}
                  offer_jobs={message.val().offer_jobs}
                  phone_number={message.val().phone_number}
                  onClickMarkAsRead={this.onClickMarkAsRead}
                />
              );
            })}
          </ul>
          <div id="messages"> הודעות שנקראו </div>
          <ul>
            {this.state.business_messages_read.map((message, index) => {
              return (
                <MessagebusinessDeatils
                  index={message.ref.key}
                  status={message.val().status}
                  business_name={message.val().business_name}
                  email={message.val().email}
                  full_name={message.val().full_name}
                  how_got_us={message.val().how_got_us}
                  message={message.val().message}
                  offer_jobs={message.val().offer_jobs}
                  phone_number={message.val().phone_number}
                  onClickMarkAsRead={this.onClickMarkAsRead}
                />
              );
            })}
          </ul>
          <div id="msg">{this.state.msg_business}</div>
        </div>
      );  

  }
}
export default AdminMessages;

import React from "react";
import "./AdminMessages.css";
import fire from "../../firebaseConfig";
import MessageContactDeatils from "./message_contact_deatils";
import MessageBuisnessDeatils from "./message_business_deatils";

class AdminMessages extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDeleteMessage = this.onClickDeleteMessage.bind(this);
  }
  state = {
    bodyType: "contact_messages",
    messages: [],
    buisness_messages: [],
    loading: "visible",
    index: this.props.index,
    msg_contact: "",
    msg_buisness: ""
  };

  componentDidMount() {
    const db = fire.database();
    let messages_list = [];
    db.ref("/messages/messages_contact/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        messages_list.push(snap.val());
        if (messages_list.length === 0)
          this.setState({ msg_contact: "אין הודעות מצור קשר כרגע" });
      });
      this.setState({ messages: messages_list.reverse(), loading: "hidden" });
    });
    db.ref("/messages/messages_toBusiness/").on("value", (snapshot) => {
      messages_list = [];
      snapshot.forEach((snap) => {
        messages_list.push(snap.val());
        if (messages_list.length === 0)
          this.setState({ msg_buisness: "אין הודעות מעסקים כרגע" });
      });
      this.setState({ buisness_messages: messages_list.reverse()});
    });
  }

  onClickDeleteMessage(message_index){
    if (window.confirm("האם אתה בטוח שאתה רוצה למחוק את ההודעה ?")){
      const db = fire.database();
      let path = "";
      if (this.state.bodyType === "contact_messages")
        path = "/messages/messages_contact/" + message_index;
      else
        path = "/messages/messages_toBusiness/" + message_index;
      db.ref(path).remove(() =>{
        // this.forceUpdate();
        // this.props.clickAdminMessages();
        alert("ההודעה נמחקה");
      });
    }
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
              this.setState ({bodyType: "buisness_messages"});
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
            {this.state.messages.map((message, index) => {
              return (
                <MessageContactDeatils
                  index={index}
                  full_name={message.full_name}
                  email={message.email}
                  phone_number={message.phone_number}
                  message={message.message}
                  onClickDeleteMessage={this.onClickDeleteMessage}
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
            {this.state.buisness_messages.map((message, index) => {
              return (
                <MessageBuisnessDeatils
                  index={index}
                  business_name={message.business_name}
                  email={message.email}
                  full_name={message.full_name}
                  how_got_us={message.how_got_us}
                  message={message.message}
                  offer_jobs={message.offer_jobs}
                  phone_number={message.phone_number}
                  onClickDeleteMessage={this.onClickDeleteMessage}
                />
              );
            })}
          </ul>
          <div id="msg">{this.state.msg_buisness}</div>
        </div>
      );  

  }
}
export default AdminMessages;

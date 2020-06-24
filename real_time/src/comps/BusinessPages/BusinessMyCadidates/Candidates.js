import React from "react";
import "./candidates.css";
import fire from "../../../firebaseConfig"

class Candidates extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      email: this.props.email,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      phone_number: this.props.phone_number,
      birth_date: this.props.birth_date,
      address: this.props.address,
      favorite_jobs: this.props.favorite_jobs,
      about_me: this.props.about_me,
      user_pic: this.props.user_pic
    };
    this.getPicture();
  }
  getPicture()
  {
    var storage = fire.storage().ref('/'+this.props.email+'/profile_pic.jpg');
    console.log(storage);
    storage.getDownloadURL().then(url=>{
      this.setState({user_pic: url})
    }).catch(()=>{
      //return this.props.user_pic;
    });
  }
  render() {
    return (
      <div id="candidate_item_business_container">
        <div id="candidate_item_business">
          <div id="candidate_item_logo_business_container">
            <img
              id="candidate_item_business_logo"
              src={this.state.user_pic}
              alt="user_pic"
            />
          </div>

          <div id="candidate_item_info_business">
            <div class="candidate_full_info_business">
              <b>שם פרטי: </b>
              {this.state.first_name}
              <br />
              <b> שם משפחה: </b>
              {this.state.last_name} , {this.state.job_hours}
              <br />
              <b> אימייל: </b>
              {this.state.email}
              <br />
              <b> טלפון: </b>
              {this.state.phone_number}
              <br />
              <b>כתובת:</b>
              {this.state.address}
              <br />
              <b>תאריך לידה: </b>
              {this.state.birth_date}
              <br />
              <b>תחומי עבודה מועדפים : </b>
              {this.state.favorite_jobs}
              <br />
              <b>קצת על עצמי: </b>
              {this.state.about_me}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Candidates;

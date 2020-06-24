import React from "react";
import "./AdminBusiness.css"
import BusinessItemAdmin from "./BusinessItemAdmin";
import SingleJobItemBusiness from "../BusinessPages/BusinessMyCadidates/SingleJobItemBusiness";
import fire from "../../firebaseConfig";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";
import logo from "../EmployeePages/EmployeeJobOffers/symbol.gif";

class AdminBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.onClickApproved = this.onClickApproved.bind(this);
    this.onClickBlocked = this.onClickBlocked.bind(this);
    this.onClickWatchJobs=this.onClickWatchJobs.bind(this);
  }
    state = {
        business_approved: [],
        business_waiting: [],
        business_blocked: [],
        business_jobs: [],
        loading: "visible",
        bodyType: "business_deatils",
        msg: ""
      };
    
      componentDidMount() {
        const db = fire.database();
        let business_list_wating = [];
        let business_list_approved = [];
        let business_list_blocked = [];
        db.ref("/business/business_list").on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                if(snap.val().status==="wating")
                    business_list_wating.push(snap);
                else if(snap.val().status==="blocked")
                    business_list_blocked.push(snap);
                else
                    business_list_approved.push(snap);
            });
            this.setState({ business_approved: business_list_approved, 
                            business_waiting: business_list_wating,
                            business_blocked: business_list_blocked,  
                            loading: "hidden" });
        });
      }

      onClickApproved(business_index){
        alert("המעסיק אושר בהצלחה!")
        const db = fire.database();
        db.ref("/business/business_list/"+business_index).update({status: "approved"}).then(this.forceUpdate());
        this.props.clickAdminMessages();
      }

      onClickBlocked(business_index, business_status){
        if(business_status==="approved"){
          if (window.confirm("האם אתה בטוח שאתה רוצה לחסום מעסיק זה?")){
            const db = fire.database();
            db.ref("/business/business_list/"+business_index).update({status: "blocked"}).then(this.forceUpdate());
            this.props.clickAdminMessages();
            alert("המעסיק נחסם בהצלחה!");
          }
        }
        else{
          if (window.confirm("האם אתה בטוח שאתה רוצה לבטל חסימה של מעסיק זה?")){
            const db = fire.database();
            db.ref("/business/business_list/"+business_index).update({status: "approved"}).then(this.forceUpdate());
            this.props.clickAdminMessages();
            alert("החסימה הוסרה בהצלחה!");
          }
        }
      }

      onClickWatchJobs(business_index){
        if(this.state.bodyType==="business_deatils"){
          this.setState({bodyType: "watch_jobs"});
          let jobs=[];
          const db = fire.database();
          db.ref("/jobs/jobs_list").on("value",(snapshot) => {
            snapshot.forEach((snap) => {
              if (snap.val().employer_index === business_index) {
                jobs.push(snap);
              }
            });
            this.setState({business_jobs: jobs, loading: "hidden" });
          });  
        }
        else{
          this.setState({bodyType: "business_deatils"});
        }
      }
    
    
      render() {
        if (this.state.bodyType === "business_deatils"){
          return (
            <div id="admin_business">
              <div
                id="admin_business_loading_business_container"
                style={{ visibility: `${this.state.loading}` }}>
                טוען...
                    <br />
                <div
                  id="admin_business_loading_business"
                  className="spinner-border"
                  role="status"
                  style={{}}>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div id="business_admin_title">מעסיקים הממתינים לאישור </div>
              <ul>
                {this.state.business_waiting.map((business, index) => {
                  return (
                    <BusinessItemAdmin first_name={business.val().first_name}
                      last_name={business.val().last_name}
                      email={business.val().email}
                      phone_number={business.val().phone_number}
                      company_name={business.val().company_name}
                      job_length={business.val().jobs_length}
                      business_index={business.ref.key}
                      text_in_button="אשר מעסיק"
                      onClickFunc={this.onClickApproved}
                      user_pic={user_pic} />
                  );
                })}
              </ul>
              <div id="business_admin_title">מעסיקים רשומים </div>
              <ul>
                {this.state.business_approved.map((business, index) => {
                  return (
                    <BusinessItemAdmin first_name={business.val().first_name}
                      last_name={business.val().last_name}
                      email={business.val().email}
                      phone_number={business.val().phone_number}
                      company_name={business.val().company_name}
                      job_length={business.val().jobs_length}
                      status={business.val().status}
                      business_index={business.ref.key}
                      text_in_button="חסום מעסיק"
                      clickWatchJobs={this.onClickWatchJobs}
                      onClickFunc={this.onClickBlocked}
                      user_pic={user_pic} />
                  );
                })}
              </ul>
              <div id="business_admin_title">מעסיקים חסומים </div>
              <ul>
                {this.state.business_blocked.map((business, index) => {
                  return (
                    <BusinessItemAdmin first_name={business.val().first_name}
                      last_name={business.val().last_name}
                      email={business.val().email}
                      phone_number={business.val().phone_number}
                      company_name={business.val().company_name}
                      job_length={business.val().jobs_length}
                      status={business.val().status}
                      business_index={business.ref.key}
                      text_in_button="בטל חסימת מעסיק"
                      clickWatchJobs={this.onClickWatchJobs}
                      onClickFunc={this.onClickBlocked}
                      user_pic={user_pic} />
                  );
                })}
              </ul>
              <div id="msg">{this.state.msg}</div>
            </div>
          );
        }
        else{
          return (
            <div id="admin_business">
              <div
                id="admin_business_loading_business_container"
                style={{ visibility: `${this.state.loading}` }}>
                טוען...
                    <br />
                <div
                  id="admin_business_loading_business"
                  className="spinner-border"
                  role="status"
                  style={{}}>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div id="return_jobs" onClick={this.onClickWatchJobs}>
                  חזור
              </div>
              <ul>
                {this.state.business_jobs.map((job, index) => {
                  return (
                   <SingleJobItemBusiness 
                    type={job.val().type}
                    hours={job.val().hours}
                    date={job.val().date}
                    place={job.val().place}
                    salary={job.val().salary}
                    long_info={job.val().long_info}
                    logo={logo}
                    remarks={job.val().remarks}
                    clothing={job.val().clothing}
                    payment_time={job.val().payment_time}
                    status={job.val().status}
                    job_index={job.ref.key}
                    setBodyTypeState={this.setBodyTypeState}
                    button_status="invisible"
                    changeStatusJob={this.changeStatusJob}
                    show_fire = {false}
                   />
                  );
                })}
              </ul>
              <div id="msg">{this.state.msg}</div>
            </div>
          );  
        }
      }
      
};
export default AdminBusiness;

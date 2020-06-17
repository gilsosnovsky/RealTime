import React from "react";
import "./BusinessMyCadidates.css";
import SingleJobItemBusiness from "./SingleJobItemBusiness";
import Candidates from "./Candidates";
import fire from "../../../firebaseConfig";
import logo from "../../EmployeePages/EmployeeJobOffers/symbol.gif";
import user_pic from "../../EmployeePages/EmployeeSettings/person.png";

class BusinessMyCadidates extends React.Component {

  constructor(props) {
    super(props);
    this.setBodyTypeState = this.setBodyTypeState.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  state = {
    jobs_list: [],
    candidate_list: [],
    index: this.props.index,
    bodyType: "jobs",
    loading: "visible"
  }

  componentDidMount() {
    console.log("A");
    const db = fire.database();
    db.ref("/jobs/jobs_list").on("value", snapshot => {
      let allJobs = [];
      snapshot.forEach(snap => {
        if (snap.val().employer_index === this.state.index)
          allJobs.push(snap);
      });
      this.setState({ jobs_list: allJobs, loading: "hidden" });
    });
  }

  setBodyTypeState(job_index) {
    var allcandidates = [];
    console.log(job_index);
    if (this.state.bodyType === "jobs") {
      console.log("in if!");
      this.setState({
        bodyType: "candidates",
        loading: "visible"
      });
      const db = fire.database();
      db.ref("/jobs/jobs_list/" + job_index + "/candidates").on("value", snapshot => {
        console.log("in ref");
        snapshot.forEach((snap) => {
          if (snap.val() !== "no candidates yet") {
            db.ref("/employees/employees_list/" + snap.val()).on("value", snapshot => {
              allcandidates.push(snapshot.val());
              console.log("Push candidate: " + snapshot.val());
            });
          }
        });
        this.setState({ candidate_list: allcandidates, loading: "hidden" }, () => console.log("CANDIDATE: " + allcandidates.length));
      });
    }
    else {
      this.setState({
        bodyType: "jobs"
      });
    }
  }

  deleteJob(job_index){
    const db = fire.database();
    db.ref("/jobs/jobs_list/" + job_index).remove();
    //delete from employees
    db.ref("/employees/employees_list/").on("value", snapshot1 => {
      snapshot1.forEach((snap1) => {
        db.ref("/employees/employees_list/"+snap1.ref.key+ "/jobs").on("value", snapshot2 => {
          snapshot2.forEach((snap2) => {
            if(snap2.val()===job_index){
              let x=db.ref("/employees/employees_list/"+snap1.ref.key+ "/jobs/" +job_index).remove();
              console.log(x);
            }
          })
        })
      })
    });
    //this.props.clickWatchCandidates();
  }

  render() {
    if (this.state.bodyType === "jobs") {
      return (
        <div id="jobs_business">
          <div id="jobs_business_title">
            שלום אוראל
        </div>
          <div id="jobs_business_loading_jobs_container" style={{ visibility: `${this.state.loading}`, }}>
            טוען...<br />
            <div id="jobs_business_loading_jobs" className="spinner-border" role="status" style={{}}>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <ul>
            {this.state.jobs_list.map((job, index) => {
              return <SingleJobItemBusiness
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
                job_index={job.ref.key}
                setBodyTypeState={this.setBodyTypeState}
                deleteJob={this.deleteJob} />
            })
            }
          </ul>
        </div>
      );
    }
    else {
      return (
        <div id="jobs_business">
          <div id="jobs_business_loading_jobs_container" style={{ visibility: `${this.state.loading}`, }}>
            טוען...<br />
            <div id="jobs_business_loading_jobs" className="spinner-border" role="status" style={{}}>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div id="return_jobs" onClick={this.setBodyTypeState}>חזור</div>
          <ul>
            {
              this.state.candidate_list.map((candidate, index) => {
                return <Candidates first_name={candidate.first_name}
                  last_name={candidate.last_name}
                  email={candidate.email}
                  phone_number={candidate.phone_number}
                  address={candidate.address}
                  birth_date={candidate.birth_date}
                  user_pic={user_pic}
                  favorite_jobs={candidate.favorite_jobs}
                  about_me={candidate.about_me}
                  setBodyTypeState={this.setBodyTypeState}
                />
              })
            }
          </ul>
        </div>
      );
    }
  }
};
export default BusinessMyCadidates;

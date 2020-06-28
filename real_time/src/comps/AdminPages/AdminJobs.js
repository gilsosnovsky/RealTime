import React from "react";
import "./AdminJobs.css";
import SingleJobItemBusiness from "../BusinessPages/BusinessMyCadidates/SingleJobItemBusiness";
import Candidates from "../BusinessPages/BusinessMyCadidates/Candidates";
import fire from "../../firebaseConfig";
import logo from "../EmployeePages/EmployeeJobOffers/symbol.gif";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";

class AdminJobs extends React.Component {
  state = {
    jobs_list: [],
    candidate_list: [],
    bodyType: "jobs",
    loading: "visible",
  };

  componentDidMount() {
    const db = fire.database();
    db.ref("/jobs/jobs_list").on("value", (snapshot) => {
      let allJobs = [];
      snapshot.forEach((snap) => {
        allJobs.push(snap);
      });
      this.setState({ jobs_list: allJobs.reverse(), loading: "hidden" });
    });
  }

  setBodyTypeState = (job_index) => {
    var allcandidates = [];
    console.log(job_index);
    if (this.state.bodyType === "jobs") {
      console.log("in if!");
      this.setState({
        bodyType: "candidates",
        loading: "visible",
      });
      const db = fire.database();
      db.ref("/jobs/jobs_list/" + job_index + "/candidates").on(
        "value",
        (snapshot) => {
          console.log("in ref");
          snapshot.forEach((snap) => {
            console.log("in for!");
            if (snap.val() !== "no candidates yet") {
              db.ref("/employees/employees_list/" + snap.val()).on(
                "value",
                (snapshot) => {
                  allcandidates.push(snapshot.val());
                  console.log("Push candidate: " + snapshot.val());
                }
              );
            }
          });
          this.setState(
            { candidate_list: allcandidates, loading: "hidden" },
            () => console.log("CANDIDATE: " + allcandidates.length)
          );
        }
      );
    } else {
      this.setState({
        bodyType: "jobs",
      });
    }
  };

  onClickFire(job_index, is_fire) {
    const db = fire.database();
    if (is_fire)
      db.ref("/jobs/jobs_list/" + job_index).update({ is_fire: false });
    else db.ref("/jobs/jobs_list/" + job_index).update({ is_fire: true });
  }

  changeStatusJob(job_index, current_status) {
    const db = fire.database();
    if (current_status === "רלוונטי")
      db.ref("/jobs/jobs_list/" + job_index).update({ status: "לא רלוונטי" });
    else db.ref("/jobs/jobs_list/" + job_index).update({ status: "רלוונטי" });
  }

  render() {
    if (this.state.bodyType === "jobs") {
      return (
        <div id="jobs_admin">
          <div id="jobs_admin_title">משרות מוצעות</div>
          <div
            id="jobs_admin_loading_jobs_container"
            style={{ visibility: `${this.state.loading}` }}
          >
            טוען...
            <br />
            <div
              id="jobs_admin_loading_jobs"
              className="spinner-border"
              role="status"
              style={{}}
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <ul>
            {this.state.jobs_list.map((job, index) => {
              return (
                <SingleJobItemBusiness
                  key={index}
                  business_name={job.val().business_name}
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
                  button_status="visible"
                  setBodyTypeState={this.setBodyTypeState}
                  changeStatusJob={this.changeStatusJob}
                  onClickFire={this.onClickFire}
                  show_fire={true}
                  is_fire={job.val().is_fire}
                />
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div id="jobs_admin">
          <div
            id="jobs_admin_loading_jobs_container"
            style={{ visibility: `${this.state.loading}` }}
          >
            טוען...
            <br />
            <div
              id="jobs_admin_loading_jobs"
              className="spinner-border"
              role="status"
              style={{}}
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div id="return_jobs_admin" onClick={this.setBodyTypeState}>
            חזור
          </div>
          <ul>
            {this.state.candidate_list.map((candidate, index) => {
              return (
                <Candidates
                  first_name={candidate.first_name}
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
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
export default AdminJobs;

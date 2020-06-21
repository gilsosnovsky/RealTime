import React from "react";
import "./EmployeeJobOffers.css";
import SingleJobItem from "./SingleJobItem";
import fire from "../../../firebaseConfig";
import logo from "./symbol.gif";
class EmployeeJobOffers extends React.Component {
  state = {
    jobs_list: [],
    loading: "visible",
    user: this.props.user,
    index: this.props.index
  };

  componentDidMount() {
    const db = fire.database();
    db.ref("/jobs/jobs_list").on("value", (snapshot) => {
      let allJobs = [];
      let temp=0;
      snapshot.forEach((snap1) => {
        db.ref("/employees/employees_list/" + this.state.index + "/jobs").on("value", (snapshot) => {
          snapshot.forEach((snap2) => {
            if(snap1.ref.key===snap2.ref.key)
              temp=1;
          })
        })
        if(temp!==1){
          allJobs.push(snap1);
          temp=0;
        }
      });
      this.setState({ jobs_list: allJobs, loading: "hidden" });
    });
  }

  render() {
    return (
      <div id="jobs_employee">
        <div id="jobs_employee_title">משרות זמינות באתר</div>
        <div
          id="jobs_employee_loading_jobs_container"
          style={{ visibility: `${this.state.loading}` }}>
          טוען...
          <br />
          <div
            id="jobs_employee_loading_jobs"
            className="spinner-border"
            role="status"
            style={{}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <ul>
          {this.state.jobs_list.map((job, index) => {
            return (
              <SingleJobItem
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
                id={job.val().id}
                ref_job={job.ref.key}
                user={this.state.user}
                index={this.state.index}
                buttons_visibility="visible" />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default EmployeeJobOffers;

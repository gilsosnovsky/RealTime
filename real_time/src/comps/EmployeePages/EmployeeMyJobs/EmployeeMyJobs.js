import React from "react";
import "./EmployeeMyJobs.css";
import SingleJobItem from "../EmployeeJobOffers/SingleJobItem";
import fire from "../../../firebaseConfig";
import logo from "../EmployeeJobOffers/symbol.gif";

class EmployeeMyJobs extends React.Component {
  state = {
    jobs_list: [],
    loading: "visible",
    index: this.props.index,
    msg_jobs: ""
  };

  componentDidMount() {
    const db = fire.database();
    let allJobs = [];
    db.ref("/employees/employees_list/" + this.state.index + "/jobs").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        if (snap.val() !== "no jobs yet") {
          db.ref("/jobs/jobs_list/" + snap.val()).on("value", (snapshot) => {
            if(snapshot.val()!==null)
              allJobs.push(snapshot.val());
          });
        }
      });
      this.setState({ jobs_list: allJobs.reverse(), loading: "hidden" });
    })
    if (allJobs.length === 0)
      this.setState({ msg_jobs: "עדיין לא נרשמת לעבודה" });
  }

  render() {
    return (
      <div id="my_jobs_employee">
        <div id="my_jobs_employee_title">הצעות העבודה שלך</div>
        <div
          id="my_jobs_employee_loading_jobs_container"
          style={{ visibility: `${this.state.loading}` }}>
          טוען...
          <br />
          <div
            id="my_jobs_employee_loading_jobs"
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
                key={index}
                type={job.type}
                hours={job.hours}
                date={job.date}
                place={job.place}
                salary={job.salary}
                long_info={job.long_info}
                status={job.status}
                logo={logo}
                remarks={job.remarks}
                clothing={job.clothing}
                payment_time={job.payment_time}
                user={this.props.user}
                buttons_visibility="hidden" />
            );
          })}
        </ul>
        <div id="my_jobs_msg">{this.state.msg_jobs}</div>
      </div>
    );
  }
}
export default EmployeeMyJobs;

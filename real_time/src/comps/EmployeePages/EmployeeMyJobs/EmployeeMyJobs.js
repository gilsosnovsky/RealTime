import React from "react";
import "./EmployeeMyJobs.css"
import SingleJobItem from "../EmployeeJobOffers/SingleJobItem";
import fire from "../../../firebaseConfig";
import logo from "../EmployeeJobOffers/symbol.gif"
class EmployeeMyJobs extends React.Component {

  state = {
    jobs_list: [],
    loading: "visible"
  }

  componentDidMount() {
    const db = fire.database();
    db.ref("/jobs/jobs_list").on("value", snapshot => {
      let allJobs = [];
      snapshot.forEach(snap => {
        if(snap.val().is_my_job === true)
          allJobs.push(snap.val());
      });
      this.setState({ jobs_list: allJobs, loading: "hidden" });
    });
  }

  render() {
    return (
      <div id="my_jobs_employee">
        <div id="my_jobs_employee_title">
           שלום אוראל, הצעות העבודה שלך
        </div>
        <div id="my_jobs_employee_loading_jobs_container" style={{ visibility: `${this.state.loading}`, }}>
          טוען...<br />
          <div id="my_jobs_employee_loading_jobs" class="spinner-border" role="status" style={{}}>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ul>
          {
            this.state.jobs_list.map((job, index) => {
              return <SingleJobItem type={job.type}
                hours={job.hours}
                date={job.date}
                place={job.place}
                salary={job.salary}
                long_info={job.long_info}
                logo={logo}
                remarks={job.remarks}
                clothing={job.clothing}
                payment_time={job.payment_time}
                buttons_visibility="hidden" />
            })
          }
        </ul>
      </div>
    );
  }
}
export default EmployeeMyJobs;

import React from "react";
import "./AdminEmployees.css"
import EmployeeDeatils from "./employee_deatils";
// import EmployeeSettings from "../EmployeePages/EmployeeSettings/EmployeeSettings";
import fire from "../../firebaseConfig.js";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";

class AdminEmployees extends React.Component {
  state = {
    employees: [],
    loading: "visible",
    bodyType: "employees_deatils",
    index: this.props.index,
    msg: ""
  };

  componentDidMount() {
    const db = fire.database();
    let employees_list = [];
    db.ref("/employees/employees_list/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        employees_list.push(snap.val());
      });
    });
    this.setState({ employees: employees_list, loading: "hidden" });

    if (employees_list.length === 0)
      this.setState({ msg: "אין מחפשי עבודה רשומים לאתר כעת" });
  }

  render() {
    if (this.state.bodyType === "employees_deatils")
      return (
        <div id="admin_employees">
          <div id="registered_employees">עובדים רשומים </div>
          <div
            id="admin_employees_loading_employees_container"
            style={{ visibility: `${this.state.loading}` }}>
            טוען...
                <br />
            <div
              id="admin_employees_loading_employees"
              className="spinner-border"
              role="status"
              style={{}}>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <ul>
            {this.state.employees.map((employee, index) => {
              return (
                <EmployeeDeatils first_name={employee.first_name}
                  last_name={employee.last_name}
                  email={employee.email}
                  phone_number={employee.phone_number}
                  birth_date={employee.birth_date}
                  address={employee.address}
                  favorite_jobs={employee.favorite_jobs}
                  about_me={employee.about_me}
                  job_hours={employee.job_hours}
                  user_pic={user_pic} />
              );
            })}
          </ul>
          <div id="msg">{this.state.msg}</div>
        </div>
      );
  }
};
export default AdminEmployees;

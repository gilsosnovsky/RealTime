import React from "react";
import "./AdminEmployees.css"
import EmployeeDeatils from "./employee_deatils";
// import EmployeeSettings from "../EmployeePages/EmployeeSettings/EmployeeSettings";
import fire from "../../firebaseConfig.js";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";

class AdminEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.onClickBlocked = this.onClickBlocked.bind(this);
  }
  state = {
    employees_approved: [],
    employees_blocked: [],
    loading: "visible",
    bodyType: "employees_deatils",
    index: this.props.index,
    msg: ""
  };

  componentDidMount() {
    const db = fire.database();
    let employees_list_approved = [];
    let employees_list_blocked = [];
    db.ref("/employees/employees_list/").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        if(snap.val().status ==="approved")
          employees_list_approved.push(snap);
        else
          employees_list_blocked.push(snap);
      });
    });
    this.setState({ employees_approved: employees_list_approved,
                    employees_blocked: employees_list_blocked,
                     loading: "hidden" });

    if (employees_list_approved.length === 0)
      this.setState({ msg: "אין מחפשי עבודה רשומים לאתר כעת" });
  }

  onClickBlocked(employee_index, employee_status){
    if(employee_status==="approved"){
      if (window.confirm("האם אתה בטוח שאתה רוצה לחסום עובד זה?")){
        const db = fire.database();
        db.ref("/employees/employees_list/"+employee_index).update({status: "blocked"}).then(this.forceUpdate());
        this.props.clickAdminMessages();
        alert("העובד נחסם בהצלחה!");
      }
    }
    else{
      if (window.confirm("האם אתה בטוח שאתה רוצה לבטל חסימה של עובד זה?")){
        const db = fire.database();
        db.ref("/employees/employees_list/"+employee_index).update({status: "approved"}).then(this.forceUpdate());
        this.props.clickAdminMessages();
        alert("החסימה הוסרה בהצלחה!");
      }
    }
  }

  render() {
    if (this.state.bodyType === "employees_deatils")
      return (
        <div id="admin_employees">
          
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
          <div id="employee_admin_title">עובדים רשומים </div>
          <ul>
            {this.state.employees_approved.map((employee, index) => {
              return (
                <EmployeeDeatils first_name={employee.val().first_name}
                  last_name={employee.val().last_name}
                  email={employee.val().email}
                  phone_number={employee.val().phone_number}
                  birth_date={employee.val().birth_date}
                  address={employee.val().address}
                  favorite_jobs={employee.val().favorite_jobs}
                  about_me={employee.val().about_me}
                  job_hours={employee.val().job_hours}
                  job_index={employee.ref.key}
                  status={employee.val().status}
                  txt_button="חסום משתמש"
                  onClickBlocked={this.onClickBlocked}
                  user_pic={user_pic} />
              );
            })}
          </ul>
          <div id="employee_admin_title">עובדים חסומים </div>
          <ul>
            {this.state.employees_blocked.map((employee, index) => {
              return (
                <EmployeeDeatils first_name={employee.val().first_name}
                  last_name={employee.last_name}
                  email={employee.val().email}
                  phone_number={employee.val().phone_number}
                  birth_date={employee.val().birth_date}
                  address={employee.val().address}
                  favorite_jobs={employee.val().favorite_jobs}
                  about_me={employee.val().about_me}
                  job_hours={employee.val().job_hours}
                  job_index={employee.ref.key}
                  status={employee.val().status}
                  txt_button="בטל חסימת משתמש"
                  onClickBlocked={this.onClickBlocked}
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

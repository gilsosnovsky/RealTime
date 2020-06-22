import React from "react";
import "./AdminBusiness.css"
import BusinessItemAdmin from "./BusinessItemAdmin";
import fire from "../../firebaseConfig";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";

class AdminBusiness extends React.Component {

    state = {
        business: [],
        loading: "visible",
        bodyType: "business_deatils",
        msg: ""
      };
    
      componentDidMount() {
        const db = fire.database();
        let business_list = [];
        db.ref("/business/business_list").on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                business_list.push(snap);
            });
            this.setState({ business: business_list, loading: "hidden" });
        });
      }
    
      render() {
        if (this.state.bodyType === "business_deatils")
          return (
            <div id="admin_business">
              <div id="registered_business">מעסיקים רשומים </div>
              <div
                id="admin_business_loading_employees_container"
                style={{ visibility: `${this.state.loading}` }}>
                טוען...
                    <br />
                <div
                  id="admin_business_loading_employees"
                  className="spinner-border"
                  role="status"
                  style={{}}>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <ul>
                {this.state.business.map((business, index) => {
                  return (
                    <BusinessItemAdmin first_name={business.val().first_name}
                      last_name={business.val().last_name}
                      email={business.val().email}
                      phone_number={business.val().phone_number}
                      company_name={business.val().company_name}
                      job_length={business.val().jobs_length}
                      text_in_button="מחק מעסיק"
                      user_pic={user_pic} />
                  );
                })}
              </ul>
              <div id="msg">{this.state.msg}</div>
            </div>
          );
      }
};
export default AdminBusiness;

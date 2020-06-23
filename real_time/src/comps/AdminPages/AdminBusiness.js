import React from "react";
import "./AdminBusiness.css"
import BusinessItemAdmin from "./BusinessItemAdmin";
import fire from "../../firebaseConfig";
import user_pic from "../EmployeePages/EmployeeSettings/person.png";

class AdminBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.onClickApproved = this.onClickApproved.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
    state = {
        business_approved: [],
        business_waiting: [],
        loading: "visible",
        bodyType: "business_deatils",
        msg: ""
      };
    
      componentDidMount() {
        const db = fire.database();
        let business_list_wating = [];
        let business_list_approved = [];
        db.ref("/business/business_list").on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                if(snap.val().status==="wating")
                    business_list_wating.push(snap);
                else
                    business_list_approved.push(snap);
            });
            this.setState({ business_approved: business_list_approved, business_waiting: business_list_wating, loading: "hidden" });
        });
      }

      onClickApproved(business_index){
        const db = fire.database();
        db.ref("/business/business_list/"+business_index).update({status: "approved"}).then({function: ()=>{alert("המעסיק אושר בהצלחה!");}});
        
      }

      onClickDelete(business_index, business_email){
        alert("המעסיק נמחק בהצלחה!")
        const db = fire.database();
        db.ref("/business/business_list/"+business_index).remove(); 
        
        //this.props.clickAdminEmployees();
        //we need to delete also from auth
      }
    
      render() {
        if (this.state.bodyType === "business_deatils")
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
                      business_index={business.ref.key}
                      text_in_button="מחק מעסיק"
                      onClickFunc={this.onClickDelete}
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.gif";
import jerusalem_city_logo from "./jerusalem_city_logo.jpg";
import promote_teenagers_logo from "./promote_teenagers_logo.jpg";
import "./NavBar.css";


const EmployeeNavBar = (props) => {
    return (
        <div id="navBar">
        <div id="navBarTabs">
          
          <img
            class="leftLogos"
            src={jerusalem_city_logo}
            alt="jerusalem city logo"
          />
          <img
            class="leftLogos"
            src={promote_teenagers_logo}
            alt="promte teenagers logo"
          />
  
          <label
            className="NavBarButton"
            onClick={props.clickSettingsEmployee}>
            הגדרות
          </label>

          <label
            id="message_employee"
            className="NavBarButton"
            onClick={props.clickMessagesEmployee}
          >
            הודעות
          </label>

          <label
            id="my_jobs_emplyee"
            className="NavBarButton"
            onClick={props.clickMyJobsEmployee}
          >
             הצעות העבודה שלי
          </label>

          <label
            id="Jobs_emloyee"
            className="NavBarButton"
            onClick={props.clickJobOffersEmployee}
          >
            משרות
          </label>
  
          <img id="logo" src={logo} alt="Logo"/>

          <div class="hello_plus_logout">
            <label className="hello_emloyee">
            "שלום "משתמש
            </label>
            <br/>
            <label className="logout_employee" onClick={props.clickLogout}>
              התנתק
            </label>
          </div>
        </div>
  
        {/* </div> */}
      </div> 
    );
};
export default EmployeeNavBar;
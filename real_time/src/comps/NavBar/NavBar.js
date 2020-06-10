import React from "react";
import WelcomepageNavbar from "./welcomepageNavbar";
import EmployeeNavBar from "./EmployeeNavBar";
import BusinessNavBar from "./BusinessNavBar";

const NavBar = (props) => {

  if(props.navBarState=== "homePage"){
    return (
      <WelcomepageNavbar
        clickToEmployees={props.clickToEmployees}
        clickOnLogo={props.clickOnLogo}
        clickToBusiness={props.clickToBusiness}
        clickContact={props.clickContact}
        clickAboutUs={props.clickAboutUs}/>
    );
  }
  else if(props.navBarState=== "employee_interface"){
    return(
      <EmployeeNavBar
      clickMyJobsEmployee={props.clickMyJobsEmployee}
      clickJobOffersEmployee={props.clickJobOffersEmployee}
      clickMessagesEmployee={props.clickMessagesEmployee}
      clickSettingsEmployee={props.clickSettingsEmployee}
      clickLogout={props.clickLogout}/>
    );
  }

  else if(props.navBarState=== "business_interface"){
    return(
      <BusinessNavBar
      clickPostJobBusiness={props.clickPostJobBusiness}
      clickWatchCandidates={props.clickWatchCandidates}
      clickLogout={props.clickLogout}/>
    );
  }
  

  else {
    return (
      <div id="firstPageBody">
        <h1>default</h1>
      </div>
    );
  }
};
export default NavBar;

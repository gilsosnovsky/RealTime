import React from "react";
import WelcomepageNavbar from "./welcomepageNavbar";
import EmployeeNavBar from "./EmployeeNavBar";
import BusinessNavBar from "./BusinessNavBar";
import AdminNavBar from "./AdminNavBar";

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
      clickOnLogo={props.clickOnLogo}
      clickJobOffersEmployee={props.clickJobOffersEmployee}
      clickSettingsEmployee={props.clickSettingsEmployee}
      clickLogout={props.clickLogout}
      userName={props.userName}/>
    );
  }

  else if(props.navBarState=== "business_interface"){
    return(
      <BusinessNavBar
      clickPostJobBusiness={props.clickPostJobBusiness}
      clickOnLogo={props.clickOnLogo}
      clickWatchCandidates={props.clickWatchCandidates}
      clickLogout={props.clickLogout}
      userName={props.userName}/>
    );
  }

  else if(props.navBarState=== "admin_interface"){
    return(
      <AdminNavBar
      clickAdminJobs={props.clickAdminJobs}
      clickOnLogo={props.clickOnLogo}
      clickAdminEmployees={props.clickAdminEmployees}
      clickAdminBusiness={props.clickAdminBusiness}
      clickLogout={props.clickLogout}
      clickAdminMessages={props.clickAdminMessages}/>
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

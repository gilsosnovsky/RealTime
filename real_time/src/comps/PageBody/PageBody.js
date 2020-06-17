import React from "react";
import "./PageBody.css";
import ToEmployees from "../WelcomePages/ToEmployees/ToEmployees";
import ToBusiness from "../WelcomePages/ToBusiness/ToBusiness";
import Contact from "../WelcomePages/Contact/Contact";
import Home from "../WelcomePages/Home/Home";
import AboutUs from "../WelcomePages/AboutUs/AboutUs";
import Login from "../WelcomePages/Login/Login";
import EmployeeSignUp from "../WelcomePages/SignUp/EmloyeeSignUp";
import BusinessSignUp from "../WelcomePages/SignUp/BusinessSignUp";
import EmployeeJobOffers from "../EmployeePages/EmployeeJobOffers/EmployeeJobOffers";
import EmployeeMyJobs from "../EmployeePages/EmployeeMyJobs/EmployeeMyJobs";
import EmployeeMessages from "../EmployeePages/EmployeeMessages/EmployeeMessages";
import EmployeeSettings from "../EmployeePages/EmployeeSettings/EmployeeSettings";
import BusinessPostJob from "../BusinessPages/BusinessPostJob/BusinessPostJob";
import BusinessMyCadidates from "../BusinessPages/BusinessMyCadidates/BusinessMyCadidates";
import AdminBusiness from "../AdminPages/AdminBusiness";
import AdminEmployees from "../AdminPages/AdminEmployees";
import AdminJobs from "../AdminPages/AdminJobs";
import AdminMessages from "../AdminPages/AdminMessages";

const pageBody = (props) => {
  if (props.pageBodyState === "homePage") {
    return <Home
      clickLoginEmployee={props.clickLoginEmployee}
      clickLoginBusiness={props.clickLoginBusiness} />;
  } else if (props.pageBodyState === "toEmployees") {
    return <ToEmployees />;
  } else if (props.pageBodyState === "EmloyeeLogin" || props.pageBodyState === "BusinessLogin") {
    return <Login
      clickSignUp={props.clickSignUp}
      clickConnectEmployee={props.clickConnectEmployee}
      pageBodyState={props.pageBodyState}
      clickConnectBusiness={props.clickConnectBusiness}
      clickForgotPassword={props.clickForgotPassword}
      clickConnectAdmin={props.clickConnectAdmin} />;
  } else if (props.pageBodyState === "toBusiness") {
    return <ToBusiness />;
  } else if (props.pageBodyState === "contact") {
    return <Contact />;
  } else if (props.pageBodyState === "aboutUs") {
    return <AboutUs />;
  } else if (props.pageBodyState === "EmployeeSignUp") {
    return <EmployeeSignUp
      clickConnectEmployee={props.clickConnectEmployee} />;
  } else if (props.pageBodyState === "BusinessSignUp") {
    return <BusinessSignUp
      clickConnectBusiness={props.clickConnectBusiness} />;
  } else if (props.pageBodyState === "employee_interface" || props.pageBodyState === "employee_job_offers") {
    return <EmployeeJobOffers
      user={props.user}
      index={props.index} />;
  } else if (props.pageBodyState === "employee_my_jobs") {
    return <EmployeeMyJobs
      user={props.user}
      index={props.index} />;
  } else if (props.pageBodyState === "employee_messages") {
    return <EmployeeMessages />;
  } else if (props.pageBodyState === "employee_settings") {
    return <EmployeeSettings
      user={props.user}
      setUser={props.setUser}
      index={props.index} />;
  } else if (props.pageBodyState === "business_post_job") {
    return <BusinessPostJob 
      index={props.index}/>;
  } else if (props.pageBodyState === "business_interface" || props.pageBodyState === "business_watch_candidates") {
    return <BusinessMyCadidates 
      index={props.index}/>;
  } else if (props.pageBodyState === "admin_jobs") {
    return <AdminJobs />;
  } else if (props.pageBodyState === "admin_interface" || props.pageBodyState === "admin_employees") {
    return <AdminEmployees />;
  } else if (props.pageBodyState === "admin_business") {
    return <AdminBusiness />;
  } else if (props.pageBodyState === "admin_messages") {
    return <AdminMessages />;
  } else if (props.pageBodyState === "forgot_password") {
    return (
      <div id="firstPageBody">
        <h1>forgot password page</h1>
      </div>
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
export default pageBody;

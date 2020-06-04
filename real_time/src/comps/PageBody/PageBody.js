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

const pageBody = (props) => {
  if (props.pageBodyState === "homePage") {
    return <Home 
      clickLoginEmployee={props.clickLoginEmployee}
      clickLoginBusiness={props.clickLoginBusiness}/>;
  } else if (props.pageBodyState === "toEmployees") {
    return <ToEmployees />;
  } else if (props.pageBodyState === "EmloyeeLogin" || props.pageBodyState === "BusinessLogin") {
    return <Login 
    clickSignUp={props.clickSignUp}/>;
  } else if (props.pageBodyState === "toBusiness") {
    return <ToBusiness />;
  } else if (props.pageBodyState === "contact") {
    return <Contact />;
  } else if (props.pageBodyState === "aboutUs") {
    return <AboutUs />;
  } else if (props.pageBodyState === "EmployeeSignUp") {
    return <EmployeeSignUp />;
  } else if (props.pageBodyState === "BusinessSignUp") {
    return <BusinessSignUp />;
  } else {
    return (
      <div id="firstPageBody">
        <h1>default</h1>
      </div>
    );
  }
};
export default pageBody;

import React from "react";
import "./PageBody.css";
import ToEmployees from "../WelcomePages/ToEmployees/ToEmployees";
import ToBusiness from "../WelcomePages/ToBusiness/ToBusiness";
import Contact from "../WelcomePages/Contact/Contact";
import Home from "../WelcomePages/Home/Home";
import AboutUs from "../WelcomePages/AboutUs/AboutUs";
import Login from "../WelcomePages/Login/Login";

const pageBody = (props) => {
  if (props.pageBodyState === "homePage") {
    return <Home onClickToLogin={props.clickLogin}/>;
  } else if (props.pageBodyState === "toEmployees") {
    return <ToEmployees />;
  } else if (props.pageBodyState === "login") {
    return <Login />;
  } else if (props.pageBodyState === "toBusiness") {
    return <ToBusiness />;
  } else if (props.pageBodyState === "contact") {
    return <Contact />;
  } else if (props.pageBodyState === "aboutUs") {
    console.log("dsad");
    return <AboutUs />;
  } else {
    return (
      <div id="firstPageBody">
        <h1>default</h1>
      </div>
    );
  }
};
export default pageBody;

import React from "react";
import logo from "./logo.gif";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div id="navBar">
      <div id="navBarTabs">
        <label
          id="ContactUs"
          className="NavBarButton"
          onClick={props.clickContact}>
          צור קשר
        </label>

        <label
          id="about_us"
          className="NavBarButton"
          onClick={props.clickAboutUs}>
          מי אנחנו
        </label>

        <label
          id="to_business"
          className="NavBarButton"
          onClick={props.clickToBusiness}>
          לעסקים
        </label>

        <label
          id="to_employees"
          className="NavBarButton"
          onClick={props.clickToEmployees}>
          לעובדים
        </label>
      </div>

      <img id="logo"
        src={logo}
        alt="Logo"
        onClick={props.clickOnLogo} />
      {/* </div> */}
    </div>
  );
};
export default NavBar;

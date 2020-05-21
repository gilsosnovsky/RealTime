import React from "react";
import logo from "./logo.gif";
import "./NavBar.css";

const NavBar = (props) => {

  return (
    <div id="NavBar">
      <div id="NavBarButtons">
        <label id="contact" className="NavBarButton">
          צור קשר
          </label>
        <label id="about_us" className="NavBarButton">
          מי אנחנו
          </label>
        <label id="to_business" className="NavBarButton">
          לעסקים
          </label>
        <label
          id="to_employees"
          className="NavBarButton"
          onClick={props.clickToEmployees}
        >
          לעובדים
          </label>
        <img id="logo" src={logo} alt="Logo" onClick={props.clickOnLogo} />
      </div>
    </div>
  );
}
export default NavBar;

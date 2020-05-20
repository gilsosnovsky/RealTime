import React, { Component } from "react";
import logo from "./logo.gif";
import "./NavBar.css";

class NavBar extends Component {
  onClickToEmployees() {
    alert("שלום");
  }
  render() {
    return (
      <div id="NavBar">
        <div id="NavBarButtons">
          <text id="contact" class="NavBarButton">
            צור קשר
          </text>
          <text id="about_us" class="NavBarButton">
            מי אנחנו
          </text>
          <text id="to_business" class="NavBarButton">
            לעסקים
          </text>
          <text
            id="to_employees"
            class="NavBarButton"
            onClick={this.onClickToEmployees}
          >
            לעובדים
          </text>
          <img id="logo" src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
}
export default NavBar;

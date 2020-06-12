import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.gif";
import jerusalem_city_logo from "./jerusalem_city_logo.jpg";
import promote_teenagers_logo from "./promote_teenagers_logo.jpg";
import "./NavBar.css";

function mobileMenuButton() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "list-item") {
    x.style.display = "none";
    x.style.transitionDelay = "2s";
  } else {
    x.style.display = "list-item";
    x.style.transitionDelay = "2s";
  }
}

const welcomepageNavbar = (props) => {
  return (
    <div id="navBar">
      <div id="navBarTabs">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div id="menuButton" className="icon" onClick={mobileMenuButton}>
          <i className="fa fa-bars"></i>
        </div>

        <img
          className="leftLogos"
          src={jerusalem_city_logo}
          onClick={props.clickOnLogo}
          alt="erusalem_city_logo"
        />
        <img
          className="leftLogos"
          src={promote_teenagers_logo}
          onClick={props.clickOnLogo}
          alt="promote_teenagers_logo"
        />

        <img id="logo" src={logo} alt="Logo" onClick={props.clickOnLogo} />

        <div id="navLinks">
          <label
            id="ContactUs"
            className="NavBarButton"
            onClick={props.clickContact}
          >
            צור קשר
          </label>

          <label
            id="about_us"
            className="NavBarButton"
            onClick={props.clickAboutUs}
          >
            מי אנחנו
          </label>

          <label
            id="to_business"
            className="NavBarButton"
            onClick={props.clickToBusiness}
          >
            לעסקים
          </label>

          <label
            id="to_employees"
            className="NavBarButton"
            onClick={props.clickToEmployees}
          >
            לעובדים
          </label>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default welcomepageNavbar;

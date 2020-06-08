import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.gif";
import jerusalem_city_logo from "./jerusalem_city_logo.jpg";
import promote_teenagers_logo from "./promote_teenagers_logo.jpg";
import "./NavBar.css";


const welcomepageNavbar = (props) => {
    return (
        <div id="navBar">
        <div id="navBarTabs">
          <img
            class="leftLogos"
            src={jerusalem_city_logo}
            onClick={props.clickOnLogo}
            alt="jerusalem city logo"
          />
          <img
            class="leftLogos"
            src={promote_teenagers_logo}
            onClick={props.clickOnLogo}
            alt="promte teenagers logo"
          />
  
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
  
          <img id="logo" src={logo} alt="Logo" onClick={props.clickOnLogo} />
        </div>
  
        {/* </div> */}
      </div> 
    );
};
export default welcomepageNavbar;
import React from "react";
import WelcomepageNavbar from "./welcomepageNavbar";

const NavBar = (props) => {

  if(props.navBarState=== "homePage"){
    return (
      <WelcomepageNavbar
        clickToEmployees={props.clickToEmployees}
        clickOnLogo={props.clickOnLogo}
        clickToBusiness={props. clickToBusiness}
        clickContact={props.clickContact}
        clickAboutUs={props.clickAboutUs}/>
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

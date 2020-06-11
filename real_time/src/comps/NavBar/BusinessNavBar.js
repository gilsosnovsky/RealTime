import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.gif";
import jerusalem_city_logo from "./jerusalem_city_logo.jpg";
import promote_teenagers_logo from "./promote_teenagers_logo.jpg";
import "./NavBar.css";

const BusinessNavBar = (props) => {
  return (
    <div id="navBar">
      <div id="navBarTabs">
        <img
          class="leftLogos"
          src={jerusalem_city_logo}
          alt="jerusalem city logo"
        />
        <img
          class="leftLogos"
          src={promote_teenagers_logo}
          alt="promte teenagers logo"
        />

        <label
          //id="post_job_business"
          className="NavBarButton"
          onClick={props.clickPostJobBusiness}
        >
          פרסם משרה
        </label>

        <label
          //id="candidates_business"
          className="NavBarButton"
          onClick={props.clickWatchCandidates}
        >
          צפייה במועמדים
        </label>

        

        <img id="logo" src={logo} alt="Logo" onClick={props.clickOnLogo} />

        <div class="logout">
          <label className="logout_employee" onClick={props.clickLogout}>
            התנתק
          </label>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
export default BusinessNavBar;

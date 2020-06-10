import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
            //id="candidates_business"
            className="NavBarButton"
            onClick={props.clickWatchCandidates}
          >
            צפייה במועמדים
          </label>
  
  
          <label
            //id="post_job_business"
            className="NavBarButton"
            onClick={props.clickPostJobBusiness}
          >
            פרסם משרה
          </label>
  
          
          <img id="logo" src={logo} alt="Logo" onClick={props.clickOnLogo} />

          <div class="hello_plus_logout">
            <label className="hello_business">
            "שלום "משתמש
            </label>
            <br/>
            <label className="logout_business" onClick={props.clickLogout}>
              התנתק
            </label>
          </div>
        </div>
  
        {/* </div> */}
      </div> 
    );
};
export default BusinessNavBar;
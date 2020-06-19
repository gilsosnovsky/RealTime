import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.gif";
import jerusalem_city_logo from "./jerusalem_city_logo.jpg";
import promote_teenagers_logo from "./promote_teenagers_logo.jpg";
import "./NavBar.css";

class BusinessNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
    };
  }

  componentDidMount() {
    var m = window.matchMedia("(min-width: 480px)"); //only on Desktop mode
    //x.addListener(componentDidMount); // Attach listener function on state changes

    //changing the navbar height, called in "hello_plus_logout" div
    if (m.matches) {
      // If media query matches
      console.log("Desktop");
      if (!isNaN(document.getElementById("logout"))) {
        console.log("INSIDE!");
        document.getElementById("navBar").style.height = "120px";
        document.getElementById("navBarTabs").style.height = "120px";
      }
    } else {
      console.log("Mobile");
    }

    this.mobileMenuButton = () => {
      var x = document.getElementById("navLinks");
      var y = document.getElementById("hello_plus_logout");
      if (x.style.display === "list-item") {
        x.style.display = "none";
        y.style.display = "none";
        x.style.transitionDelay = "2s";
      } else {
        x.style.display = "list-item";
        y.style.display = "list-item";
        x.style.transitionDelay = "2s";
      }
    };
  }

  render() {
    return (
      <div id="navBar">
        <div id="navBarTabs">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div
            id="menuButton"
            className="icon"
            onClick={() => this.mobileMenuButton()}
          >
            <i className="fa fa-bars"></i>
          </div>

          <img
            className="leftLogos"
            src={jerusalem_city_logo}
            alt="jerusalem city logo"
          />
          <img
            className="leftLogos"
            src={promote_teenagers_logo}
            alt="promte teenagers logo"
          />

          <img id="logo" src={logo} alt="Logo" />
          <div id="navLinks">
            <label
              //id="post_job_business"
              className="NavBarButton"
              onClick={this.props.clickPostJobBusiness}
            >
              פרסם משרה
            </label>

            <label
              //id="candidates_business"
              className="NavBarButton"
              onClick={this.props.clickWatchCandidates}
            >
              משרות שפרסמת
            </label>
          </div>
          <div id="hello_plus_logout">
            <label className="hello" onClick={this.props.clickSettingsEmployee}>
              שלום {this.state.userName}
            </label>
            <label className="logout" onClick={this.props.clickLogout}>
              התנתק
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessNavBar;

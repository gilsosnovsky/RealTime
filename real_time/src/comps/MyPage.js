import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import PageBody from "./PageBody/PageBody";
import Footer from "./Footer/Footer";
import fire from "../firebaseConfig";

class MyPage extends Component {
  state = {
    NavBarState: "homePage",
    PageBodyState: "homePage",
    FooterState: "homePage",
    name: "gil",
  };

  onClickToEmployees = () => {
    this.setState({
      PageBodyState: "toEmployees",
    });
  };

  onClickLogo = () => {
    this.setState({
      PageBodyState: "homePage",
    });
  };

  onClickLoginEmployee = () => {
    this.setState({
      PageBodyState: "EmloyeeLogin",
    });
  };

  onClickLoginBusiness = () => {
    this.setState({
      PageBodyState: "BusinessLogin",
    });
  };

  onClickToBusiness = () => {
    this.setState({
      PageBodyState: "toBusiness",
    });
  };

  onClickSignUp = () => {
    if (this.state.PageBodyState == "EmloyeeLogin") {
      this.setState({
        PageBodyState: "EmployeeSignUp",
      });
    } else {
      this.setState({
        PageBodyState: "BusinessSignUp",
      });
    }
  };

  onClickContact = () => {
    this.setState({
      PageBodyState: "contact",
    });
  };
  onClickAboutUs = () => {
    this.setState({
      PageBodyState: "aboutUs",
    });
  };

  render() {
    return (
      <div id="MyPage">
        <NavBar
          clickToEmployees={this.onClickToEmployees}
          clickOnLogo={this.onClickLogo}
          clickToBusiness={this.onClickToBusiness}
          clickContact={this.onClickContact}
          clickAboutUs={this.onClickAboutUs}
        />

        <PageBody
          pageBodyState={this.state.PageBodyState}
          clickLoginEmployee={this.onClickLoginEmployee}
          clickLoginBusiness={this.onClickLoginBusiness}
          clickSignUp={this.onClickSignUp}
        />
        <Footer />
      </div>
    );
  }
}
export default MyPage;

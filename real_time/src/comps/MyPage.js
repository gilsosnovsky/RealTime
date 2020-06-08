import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import PageBody from "./PageBody/PageBody";
import Footer from "./Footer/Footer";
//import fire from "../firebaseConfig";

class MyPage extends Component {
  state = {
    NavBarState: "homePage",
    PageBodyState: "homePage",
    FooterState: "homePage",
    name: "gil"
  };

  onClickToEmployees = () => {
    this.setState({
      PageBodyState: "toEmployees"
    });
  };

  onClickToBusiness = () => {
    this.setState({
      PageBodyState: "toBusiness"
    });
  };

  onClickLogo = () => {
    this.setState({
      PageBodyState: "homePage"
    });
  };

  onClickLoginEmployee = () => {
    this.setState({
      PageBodyState: "EmloyeeLogin"
    });
  };

  onClickLoginBusiness = () => {
    this.setState({
      PageBodyState: "BusinessLogin"
    });
  };

  onClickConnectEmployee=()=>{
    this.setState({
      NavBarState:"employee_interface",
      PageBodyState: "employee_interface"
    });
  }

  onClickJobOffersEmployee=()=>{
    this.setState({
      PageBodyState: "employee_job_offers"
    });
  }

  onClickMyJobsEmployee=()=>{
    this.setState({
      PageBodyState: "employee_my_jobs"
    });
  }

  onClickMessagesEmployee=()=>{
    this.setState({
      PageBodyState: "employee_messages"
    });
  }

  onClickSettingsEmployee=()=>{
    this.setState({
      PageBodyState: "employee_settings"
    });
  }

  onClickConnectBusiness=()=>{
    this.setState({
      NavBarState:"business_interface",
      PageBodyState: "business_interface"
    });
  }

  onClickPostJobBusiness=()=>{
    this.setState({
      PageBodyState: "business_post_job"
    });
  }

  onClickWatchCandidates=()=>{
    this.setState({
      PageBodyState: "business_watch_candidates"
    });
  }

  onClickSignUp = () => {
    if (this.state.PageBodyState === "EmloyeeLogin") {
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
          navBarState={this.state.NavBarState}
          clickToEmployees={this.onClickToEmployees}
          clickOnLogo={this.onClickLogo}
          clickToBusiness={this.onClickToBusiness}
          clickContact={this.onClickContact}
          clickAboutUs={this.onClickAboutUs}
          clickMyJobsEmployee={this.onClickMyJobsEmployee}
          clickJobOffersEmployee={this.onClickJobOffersEmployee}
          clickMessagesEmployee={this.onClickMessagesEmployee}
          clickSettingsEmployee={this.onClickSettingsEmployee}
          clickPostJobBusiness={this.onClickPostJobBusiness}
          clickWatchCandidates={this.onClickWatchCandidates}
        />

        <PageBody
          pageBodyState={this.state.PageBodyState}
          clickLoginEmployee={this.onClickLoginEmployee}
          clickLoginBusiness={this.onClickLoginBusiness}
          clickConnectEmployee={this.onClickConnectEmployee}
          clickConnectBusiness={this.onClickConnectBusiness}
          clickSignUp={this.onClickSignUp}
        />
        <Footer />
      </div>
    );
  }
}
export default MyPage;

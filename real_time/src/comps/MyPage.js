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
    user: "guest",
    index: "",
  };

  onClickToEmployees = () => {
    this.setState({
      PageBodyState: "toEmployees",
    });
  };

  onClickToBusiness = () => {
    this.setState({
      PageBodyState: "toBusiness",
    });
  };

  onClickLogo = () => {
    // if (this.state.navBarState === "employee_interface") {
    if (
      this.state.PageBodyState === "employee_job_offers" ||
      this.state.PageBodyState === "employee_settings" ||
      this.state.PageBodyState === "employee_my_jobs" ||
      this.state.PageBodyState === "employee_interface"
    ) {
      this.setState({
        PageBodyState: "employee_job_offers",
      });
    } else {
      this.setState({
        PageBodyState: "homePage",
      });
    }
  };
  onClickLoginEmployee = () => {
    this.setState({
      PageBodyState: "EmloyeeLogin",
    });
  };

  onClickLoginBusiness = () => {
    this.setState({
      NavBarState: "homePage",
      PageBodyState: "BusinessLogin",
    });
  };

  onClickConnectEmployee = (user, index) => {
    //console.log("HERE!!!!!!!------");
    this.setState({
      user: user,
      NavBarState: "employee_interface",
      PageBodyState: "employee_interface",
      index: index,
    });
  };

  onClickJobOffersEmployee = () => {
    this.setState({
      PageBodyState: "employee_job_offers",
    });
  };

  onClickMyJobsEmployee = () => {
    this.setState({
      PageBodyState: "employee_my_jobs",
    });
  };

  onClickSettingsEmployee = () => {
    this.setState({
      PageBodyState: "employee_settings",
    });
  };

  onClickConnectBusiness = (user, index) => {
    console.log(user);
    this.setState({
      user: user,
      index: index,
      NavBarState: "business_interface",
      PageBodyState: "business_interface",
    });
  };

  onClickPostJobBusiness = () => {
    this.setState({
      PageBodyState: "business_post_job",
    });
  };

  onClickWatchCandidates = () => {
    this.setState({
      PageBodyState: "business_watch_candidates",
    });
  };

  onClickConnectAdmin = (user, index) => {
    this.setState({
      user: user,
      index: index,
      NavBarState: "admin_interface",
      PageBodyState: "admin_interface",
    });
  };

  onClickAdminJobs = () => {
    this.setState({
      PageBodyState: "admin_jobs",
    });
  };

  onClickAdminEmployees = () => {
    this.setState({
      NavBarState: "admin_interface",
      PageBodyState: "admin_employees",
    });
  };

  onClickAdminBusiness = () => {
    this.setState({
      NavBarState: "admin_interface",
      PageBodyState: "admin_business",
    });
  };
  onClickAdminMessages = () => {
    this.setState({
      PageBodyState: "admin_messages",
    });
  };

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
  onPasswordChange = (email) => {
    this.setState({ PageBodyState: "PasswordChange" });
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

  onClickLogout = () => {
    this.setState({
      NavBarState: "homePage",
      PageBodyState: "homePage",
      FooterState: "homePage",
      user: "guest",
    });
  };

  onclickCopyrights = () => {
    this.setState({
      PageBodyState: "copyrights",
    });
  };

  onClickForgotPassword = () => {
    this.setState({
      PageBodyState: "forgot_password",
    });
  };

  setUser = (newuser) => {
    this.setState({
      NavBarState: "employee_interface",
      user: newuser,
    });
  };

  render() {
    return (
      <div id="MyPage">
        <NavBar
          userName={this.state.user.first_name}
          navBarState={this.state.NavBarState}
          clickToEmployees={this.onClickToEmployees}
          clickOnLogo={this.onClickLogo}
          clickToBusiness={this.onClickToBusiness}
          clickContact={this.onClickContact}
          clickAboutUs={this.onClickAboutUs}
          clickMyJobsEmployee={this.onClickMyJobsEmployee}
          clickJobOffersEmployee={this.onClickJobOffersEmployee}
          clickSettingsEmployee={this.onClickSettingsEmployee}
          clickPostJobBusiness={this.onClickPostJobBusiness}
          clickWatchCandidates={this.onClickWatchCandidates}
          clickAdminJobs={this.onClickAdminJobs}
          clickAdminEmployees={this.onClickAdminEmployees}
          clickAdminBusiness={this.onClickAdminBusiness}
          clickAdminMessages={this.onClickAdminMessages}
          clickLogout={this.onClickLogout}
          index={this.state.index}
        />

        <PageBody
          pageBodyState={this.state.PageBodyState}
          clickLoginEmployee={this.onClickLoginEmployee}
          clickLoginBusiness={this.onClickLoginBusiness}
          clickConnectEmployee={this.onClickConnectEmployee}
          clickConnectBusiness={this.onClickConnectBusiness}
          clickConnectAdmin={this.onClickConnectAdmin}
          clickAdminEmployees={this.onClickAdminEmployees}
          clickAdminBusiness={this.onClickAdminBusiness}
          clickSignUp={this.onClickSignUp}
          clickForgotPassword={this.onClickForgotPassword}
          clickWatchCandidates={this.onClickWatchCandidates}
          user={this.state.user}
          setUser={this.setUser}
          index={this.state.index}
          passwordChange={this.onPasswordChange}
        />
        <Footer clickCopyrights={this.onclickCopyrights} />
      </div>
    );
  }
}
export default MyPage;

import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import PageBody from "./PageBody/PageBody";
import Footer from "./Footer/Footer";
import fire from '../firebaseConfig';

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

  onClickLogin = () => {
    this.setState({
      PageBodyState: "login",
    });
  };

  onClickToBusiness = () => {
    this.setState({
      PageBodyState: "toBusiness",
    });
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

  checkFireBase = () => {
    const db = fire.database();
    function writeUserData(name, email) {
      db.ref('/').set({
        username: name,
        email: email,
      });
    }
    writeUserData ("please workkkkkkkk", "!!!!!!!");
  };

  render() {
    return (
      <div id="MyPage">
        <NavBar
          clickToEmployees={this.onClickToEmployees}
          clickOnLogo={this.checkFireBase}
          clickToBusiness={this.onClickToBusiness}
          clickContact={this.onClickContact}
          clickAboutUs={this.onClickAboutUs}
          
        />

        <PageBody 
        pageBodyState={this.state.PageBodyState}
        clickLogin={this.onClickLogin}
         />
        <Footer />
      </div>
    );
  }
}
export default MyPage;

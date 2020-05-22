import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import PageBody from './PageBody/PageBody';
import Footer from './Footer/Footer';

class MyPage extends Component {
    state = {
        NavBarState: 'homePage',
        PageBodyState: 'homePage',
        FooterState: 'homePage'
    }

    onClickToEmployees = () => {
        this.setState({
            PageBodyState: 'toEmployees'
        })
    }

    onClickLogo = () => {
        this.setState({
            PageBodyState: 'homePage'
        })
    }

    onClickToBusiness=()=>{
        this.setState({
            PageBodyState: 'toBusiness'
        })
    }

    onClickContact=()=>{
        this.setState({
            PageBodyState: 'contact'
        })
    }

    render(){
        return(
            <div id = "MyPage">
                <NavBar 
                clickToEmployees={this.onClickToEmployees}
                clickOnLogo={this.onClickLogo}
                clickToBusiness={this.onClickToBusiness}
                clickContact={this.onClickContact} />
                <PageBody pageBodyState={this.state.PageBodyState}/>
                <Footer/>
            </div>
        )
    }
}
export default MyPage;
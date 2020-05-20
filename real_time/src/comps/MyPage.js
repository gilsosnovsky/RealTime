import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import PageBody from './PageBody/PageBody';
import Footer from './Footer/Footer';

class MyPage extends Component{
    state={
        NavBarState: 'welcomePage',
        PageBodyState: 'welcomePage',
        FooterState: 'welcomePage'
    }

    onClickToEmployees= ()=> {
        this.setState ( {
            PageBodyState: 'toEmployees'
        } )
    }

    onClickLogo= ()=> {
        this.setState ( {
            PageBodyState: 'welcomePage'
        } )
    }


    render(){
        return(
            <div id = "MyPage">
                <NavBar 
                clickToEmployees={this.onClickToEmployees}
                clickOnLogo={this.onClickLogo} />
                <PageBody pageBodystate={this.state.PageBodyState}/>
                <Footer/>
            </div>
        )
    }
}
export default MyPage;
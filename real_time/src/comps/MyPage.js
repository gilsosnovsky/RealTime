import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import FirstPageBody from './FirstPageBody/FirstPageBody';
import Footer from './Footer/Footer';

class MyPage extends Component{
    render(){
        return(
            <div id = "MyPage">
                <NavBar/>
                <FirstPageBody/>
                <Footer/>
            </div>
        )
    }
}
export default MyPage;
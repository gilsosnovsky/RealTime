import React, {Component} from 'react';
import logo from './logo.jpeg'
import './NavBar.css';

class NavBar extends Component{
    onClickToEmployees(){
        alert("שלום");
    }
    render(){
        return(
            <div id = "NavBar">
                <div id = "NavBarButton">
                    <text id = "to_employees" class = "NavBarButton" 
                    onClick = {this.onClickToEmployees}>
                        לעובדים
                    </text>
                    <text id = "to_business" class = "NavBarButton">
                        לעסקים
                    </text>
                    <text id = "about_us" class = "NavBarButton">
                        מי אנחנו
                    </text>
                    <text id = "contact" class = "NavBarButton">
                        צור קשר
                    </text>
                </div>
                <img id = "logo" src = {logo} alt = "Logo"/>
            </div>
        )
    }
}
export default NavBar;
import React, {Component} from 'react';
import './Footer.css';
import instagram_icon from './instagram_icon.png'
import facebook_icon from './facebook_icon.png'

class Footer extends Component{
    render(){
        return(
            <div id = "footer">
                <img id = "facebook_icon" className = "social_media_buttons" src = {facebook_icon} alt = "facebook"/>
                <img id = "instagram_icon" className = "social_media_buttons" src = {instagram_icon} alt = "instagram"/>
            </div>
        )
    }
}
export default Footer;
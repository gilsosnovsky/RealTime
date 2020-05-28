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
                <p/>
                <label>ניתן להשיג אותנו בטלפון – 02-5456292 או במייל – Amit_le@jerusalem.muni.il</label>
            </div>
        )
    }
}
export default Footer;
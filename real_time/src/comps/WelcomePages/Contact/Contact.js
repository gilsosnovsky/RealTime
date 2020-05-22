import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = (props) => {
    return (
        <div id="contact">
            <div id="contact_p1">
                דברו איתנו
            </div>
            <div id="form">
                <label for="fname">שם מלא:</label>
                <input type="text" id="fname" name="fname" /><br></br>
                <label for="femail">אימייל:</label>
                <input type="email" id="femail" name="femail" /><br></br>
                <label for="fphone">טלפון:</label>
                <input type="tel" id="phoneNumber" name="fphone" /><br></br>
                <label for="fhowYouGotUs">תוכן ההודעה:</label>
                <input type="text" id="fhowYouGotUs" name="fhowYouGotUs" /><br></br>
            </div>
        </div>
    )
}
export default Contact;
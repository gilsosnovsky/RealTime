import React from "react";
import "./employee_deatils.css";


class EmployeeDeatils extends React.Component {
    
    state = {
        email: this.props.email,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        phone_number: this.props.phone_number,
        birth_date: this.props.birth_date,
        address: this.props.address,
        favorite_jobs: this.props.favorite_jobs,
        about_me: this.props.about_me,
        job_hours: this.props.job_hours,
        user_pic:this.props.user_pic
    };

    render() {        
        return (
            <div id="employee_deatils_container">
                <div id="employee_deatils_item" >
                    <div id="employee_item_logo_container">
                        <img id="employee_item_logo" src={this.state.user_pic} alt="user_pic"/>
                    </div>
                    <div id="employee_item_info">
                        <div class="employee_full_info">
                            <b>שם פרטי: </b>{this.state.first_name}<br />
                            <b> שם משפחה: </b>{this.state.last_name} , {this.state.job_hours}<br />
                            <b> אימייל: </b>{this.state.email}<br/>
                            <b> טלפון: </b>{this.state.phone_number}<br/>
                            <b>כתובת:</b>{this.state.address}<br/>
                            <b>תאריך לידה: </b>{this.state.birth_date}<br/>
                            <b>תחומי עבודה מועדפים : </b>{this.state.favorite_jobs}<br/>
                            <b>קצת על עצמי: </b>{this.state.about_me}
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
export default EmployeeDeatils;

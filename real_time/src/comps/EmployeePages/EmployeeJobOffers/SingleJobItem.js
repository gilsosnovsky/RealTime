import React from "react";
import './SingleJobItem.css'

class SingleJobItem extends React.Component {
    constructor(props) {
        super(props);
        this.openFullInfo = this.openFullInfo.bind(this);
        this.hideFullInfo = this.hideFullInfo.bind(this);
    }
    state = {
        job_type: this.props.type,
        job_hours: this.props.hours,
        job_date:  this.props.date,
        job_place:  this.props.place,
        job_salary:  this.props.salary,
        job_logo: this.props.logo,
        job_long_info: this.props.long_info,
        item_bottom_visibility: 'hidden',
        container_height: '120px',
        item_top_height: '100%',
        item_bottom_height: '0%'
    };
    openFullInfo() {
        this.setState({
            item_bottom_visibility: 'visible',
            container_height: '240px',
            item_top_height: '50%',
            item_bottom_height: '50%'
        });
    }
    hideFullInfo() {
        this.setState({
            item_bottom_visibility: 'hidden',
            container_height: '120px',
            item_top_height: '100%',
            item_bottom_height: '0%'
        });
    }
    render() {
        return (
            <div id="job_item_container"
                style={{ height: `${this.state.container_height}` }}>
                <div id="job_item_top" onClick={this.openFullInfo}
                    style={{ height: `${this.state.item_top_height}` }}>
                    <div id="job_item_logo_container">
                        <img id="job_item_logo" src={this.state.job_logo} alt="job_logo"/>
                    </div>
                    <div id="job_item_brief_info">
                        <div class="brief_info">
                            <b> קצת על העבודה: </b>{this.state.job_type}<br />
                            <b> מתי: </b>{this.state.job_date} , {this.state.job_hours}<br />
                            <b> איפה: </b>{this.state.job_place}
                        </div>
                    </div>
                    <div id="job_item_salary_container">
                        <div id="job_item_salary">
                            {this.state.job_salary}₪
                        </div>
                    </div>
                </div>
                <div id="job_item_bottom"
                    style={{ height: `${this.state.item_bottom_height}`, visibility: `${this.state.item_bottom_visibility}` }}>
                    <div id="job_item_full_info">
                        <b>פרטים נוספים:</b><br />
                        {this.state.job_long_info}
                    </div>
                    <div id="job_item_buttons">
                        <div id="job_item_buttons_no" onClick={this.hideFullInfo}>
                            לא מתאים לי
                        </div>
                        <div id="job_item_buttons_yes">
                            מתאים לי בול!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleJobItem;

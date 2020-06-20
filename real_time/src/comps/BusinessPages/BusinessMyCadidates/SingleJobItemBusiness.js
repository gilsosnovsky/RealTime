import React from "react";
import "./SingleJobItemBusiness.css";

class singleJobItemBusiness extends React.Component {
  state = {
    job_type: this.props.type,
    job_hours: this.props.hours,
    job_date: this.props.date,
    job_place: this.props.place,
    job_salary: this.props.salary,
    job_logo: this.props.logo,
    job_long_info: this.props.long_info,
    job_remarks: this.props.remarks,
    job_clothing: this.props.clothing,
    job_payment_time: this.props.payment_time,
    job_index:this.props.job_index
  };

  render() {
    return (
      <div id="job_item_business_container">
        <div id="job_item_business">
          <div id="job_item_logo_business_container">
            <img
              id="job_item_business_logo"
              src={this.state.job_logo}
              alt="job_logo"/>
          </div>

          <div id="job_item_info_business">
            <div className="full_info_business">
              <b> תחום כללי של העבודה: </b>
              {this.state.job_type}
              <br />
              <b> מתי: </b>
              {this.state.job_date} , {this.state.job_hours}
              <br />
              <b> איפה: </b>
              {this.state.job_place}
              <br />
              <b> משכורת: </b>
              {this.state.job_salary}₪<br />
              <b>פרטים נוספים:</b>
              {this.state.job_long_info}
              <br />
              <b>ביגוד: </b>
              {this.state.job_clothing}
              <br />
              <b>זמן תשלום : </b>
              {this.state.job_payment_time}
              <br />
              <b>הערות: </b>
              {this.state.job_remarks}
            </div>
          </div>
        </div>
        <div id="job_item_buttons_business">
          <div
            id="job_item_buttons_show_candi"
            onClick={() => this.props.setBodyTypeState(this.state.job_index)}>
            צפייה במועמדים
          </div>
          <div
            id="job_item_buttons_delete_job"
            onClick={() => this.props.deleteJob(this.state.job_index)}>
            מחק משרה
          </div>
        </div>
      </div>
    );
  }
}
export default singleJobItemBusiness;

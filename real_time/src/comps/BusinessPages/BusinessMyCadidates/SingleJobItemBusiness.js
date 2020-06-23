import React from "react";
import "./SingleJobItemBusiness.css";

class singleJobItemBusiness extends React.Component {

  render() {
    return (
      <div id="job_item_business_container">
        <div id="job_item_business">
          <div id="job_item_logo_business_container">
            <img
              id="job_item_business_logo"
              src={this.props.logo}
              alt="job_logo"/>
          </div>

          <div id="job_item_info_business">
            <div className="full_info_business">
              <b> תחום כללי של העבודה: </b>
              {this.props.type}
              <br />
              <b> מתי: </b>
              {this.props.date} , {this.props.hours}
              <br />
              <b> איפה: </b>
              {this.props.place}
              <br />
              <b> משכורת: </b>
              { this.props.salary}₪<br />
              <b>פרטים נוספים:</b>
              {this.props.long_info}
              <br />
              <b>ביגוד: </b>
              {this.props.clothing}
              <br />
              <b>זמן תשלום : </b>
              {this.props.payment_time}
              <br />
              <b>הערות: </b>
              {this.props.remarks}
            </div>
          </div>
        </div>
        <div id="job_item_buttons_business">
          <div id="job_status"><b>סטטוס:</b> {this.props.status}</div>

          {this.props.button_status==="visible" &&
          <div
            id="job_item_buttons_show_candi"
            onClick={() => this.props.setBodyTypeState(this.props.job_index)}>
            צפייה במועמדים
          </div>
          }
          {this.props.status==="רלוונטי" && this.props.button_status==="visible" &&
          <div
            id="job_item_buttons_delete_job"
            onClick={() => {
              this.props.changeStatusJob(this.props.job_index, this.props.status)}} >
              הפוך ללא רלוונטי
          </div> }
          {this.props.status==="לא רלוונטי" && this.props.button_status==="visible" &&
          <div
            id="job_item_buttons_delete_job"
            onClick={() => {
              this.props.changeStatusJob(this.props.job_index, this.props.status)}} >
              הפוך לרלוונטי
          </div> }
        </div>
      </div>
      );
    }
}
export default singleJobItemBusiness;

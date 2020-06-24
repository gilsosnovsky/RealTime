import React from "react";
import "./BusinessPostJob.css";
import fire from "../../../firebaseConfig";

class BusinessPostJob extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitjob = this.onSubmitjob.bind(this);
  }

  state = {
    business_name: "",
    type: "",
    hours: "",
    date: "",
    place: "",
    salary: "",
    long_info: "",
    remarks: "",
    clothing: "",
    payment_time: "",
    payment_method: "",
    employer_index: "",
    status: "",
    candidates: ["no candidates yet"],
  };

  onSubmitjob = (e) => {
    e.preventDefault();
    this.setState(
      {
        business_name: this.business_name.value,
        type: this.type.value,
        hours: this.from_hour.value + "-" + this.to_hour.value,
        date: this.date.value,
        place: this.place.value,
        salary: this.salary.value,
        long_info: this.detailes.value,
        remarks: this.remarks.value,
        employer_index: this.props.index,
        clothing: this.clothing.value,
        status: "רלוונטי",
        is_fire: false,
      },
      () => {
        const db = fire.database();
        db.ref("/jobs/jobs_list").push(this.state);
        alert("העבודה פורסמה בהצלחה!");
        this.props.clickWatchCandidates();
      }
    );
  };

  onPaymentMethodChanged = (e) => {
    this.setState({
      payment_method: e.currentTarget.value,
    });
  };

  onPaymentTimeChanged = (e) => {
    this.setState({
      payment_time: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="post_job_business">
        <div id="postJobContainer">
          <form action="" method="post" onSubmit={this.onSubmitjob}>
            <div id="postJobTitle">פרסם משרה</div>

            <fieldset>
              <input
                className="field"
                id="Ptype"
                ref={(c) => (this.type = c)}
                placeholder="תחום כללי של העבודה"
                type="text"
                tabIndex="1"
                maxLength="25"
                required
                autoFocus
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                id="Pdetailes"
                ref={(c) => (this.detailes = c)}
                placeholder="פרטי העבודה"
                type="text"
                tabIndex="4"
                maxLength="50"
                required
                autoFocus
              />
            </fieldset>

            <fieldset>
              <input
                id="Pdate"
                className="field"
                ref={(c) => (this.date = c)}
                placeholder="date"
                type="date"
                tabIndex="3"
                required
              />
            </fieldset>

            <fieldset>
              <h3>משעה:</h3>
              <input
                className="field"
                ref={(c) => (this.from_hour = c)}
                placeholder="שעות העבודה"
                type="time"
                tabIndex="1"
                required
              />
              <h3>עד שעה:</h3>
              <input
                className="field"
                ref={(c) => (this.to_hour = c)}
                placeholder="שעות העבודה"
                type="time"
                tabIndex="1"
                required
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                id="Ppayment"
                ref={(c) => (this.salary = c)}
                placeholder="שכר"
                type="number"
                min="1" 
                max="999999"
                tabIndex="4"
                required
                autoFocus
              />
            </fieldset>

            <fieldset>
              <div className="radioButtons">
                <p>אופן התשלום:</p>
                <input
                  type="radio"
                  name="gender"
                  value="מזומן"
                  onChange={this.onPaymentMethodChanged}
                  required
                />
                <label htmlFor="cash">מזומן</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value="המחאה"
                  onChange={this.onPaymentMethodChanged}
                />
                <label htmlFor="check">המחאה</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value="העברה בנקאית"
                  onChange={this.onPaymentMethodChanged}
                />
                <label htmlFor="transfer">העברה בנקאית</label>
              </div>
            </fieldset>

            <fieldset>
              <div className="radioButtons" required>
                <p>קבלת התשלום:</p>
                <input
                  type="radio"
                  name="age"
                  value="בסוף יום עבודה"
                  onChange={this.onPaymentTimeChanged}
                  required
                />
                <label htmlFor="age1">בסוף יום העבודה</label>
                <br />
                <input
                  type="radio"
                  name="age"
                  value="בסוף החודש"
                  onChange={this.onPaymentTimeChanged}
                />
                <label htmlFor="age2">בסוף החודש</label>
                <br />
              </div>
            </fieldset>

            <fieldset>
              <input
                className="field"
                id="Pplace"
                ref={(c) => (this.place = c)}
                placeholder="מיקום העבודה"
                type="text"
                maxLength="40"
                tabIndex="4"
                required
                autoFocus
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                ref={(c) => (this.business_name = c)}
                placeholder="שם העסק"
                maxLength="30"
                type="text"
                tabIndex="2"
                required
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                ref={(c) => (this.clothing = c)}
                placeholder="ביגוד מיוחד"
                type="text"
                tabIndex="2"
                maxLength="50"
                required
              />
            </fieldset>

            <fieldset>
              <input
                className="field"
                ref={(c) => (this.remarks = c)}
                placeholder="הערות"
                type="text"
                tabIndex="2"
                maxLength="50"
                required
              />
            </fieldset>
            <fieldset>
              <button
                id="postButton"
                name="submit"
                data-submit="...Sending"
                type="submit">
                פרסם
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
export default BusinessPostJob;

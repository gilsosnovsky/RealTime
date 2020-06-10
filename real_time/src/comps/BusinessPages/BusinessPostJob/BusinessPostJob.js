import React from "react";
import "./BusinessPostJob.css";
import fire from "../../../firebaseConfig";


class BusinessPostJob extends React.Component {
  
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  state={
    type: "",
    hours: "",
    date:  "",
    place:  "",
    salary:  "",
    logo: "",
    long_info: "",
    remarks: "",
    clothing: "",
    payment_time:"",
    payment_method:""
  };
  
  onSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      type: this.type.value,
      hours: this.from_hour.value +"-"+ this.to_hour.value,
      date:  this.date.value,
      place:  this.place.value,
      salary:  this.salary.value,
      logo: "",
      long_info: this.detailes.value,
      remarks: this.remarks.value,
      clothing: this.clothing.value,
      payment_time: this.payment_time.value,
      payment_method:this.payment_method.value
    });
    const db = fire.database();
    db.ref("/jobs/jobs_list").push(this.state);
    
  }


  render(){
    return (
      <div class="post_job_business">
        <div id="postJobContainer">
        <div id="postJobTitle">פרסם עבודה</div>

        <fieldset>
          <input
            class="field"
            id="Ptype"
            ref={(c) => this.type = c}
            placeholder="תחום כללי של העבודה"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            id="Pdetailes"
            ref={(c) => this.detailes = c}
            placeholder="פרטי העבודה"
            type="text"
            tabindex="4"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            id="Pdate"
            class="field"
            ref={(c) => this.date = c}
            placeholder="date"
            type="date"
            tabindex="3"
            required
          />
        </fieldset>

        <fieldset>
          <h3>משעה:</h3>
          <input
            class="field"
            ref={(c) => this.from_hour = c}
            placeholder="שעות העבודה"
            type="time"
            tabindex="1"
            required
          />
          <h3>עד שעה:</h3>
          <input
            class="field"
            ref={(c) => this.to_hour = c}
            placeholder="שעות העבודה"
            type="time"
            tabindex="1"
            required
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            id="Ppayment"
            ref={(c) => this.salary = c}
            placeholder="שכר"
            type="text"
            tabindex="4"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <div class="radioButtons">
            <p>אופן התשלום:</p>
            <input type="radio" id="cash" name="gender" value="מזומן" ref={(c) => this.payment_method = c}/>
            <label for="cash">מזומן</label>
            <br />
            <input type="radio" id="check" name="gender" value="צ'ק" ref={(c) => this.payment_method = c}/>
            <label for="check">המחאה</label>
            <br />
            <input type="radio" id="transfer" name="gender" value="העברה בנקאית" ref={(c) => this.payment_method = c}/>
            <label for="transfer">העברה בנקאית</label>
          </div>
        </fieldset>

        <fieldset>
          <div class="radioButtons">
            <p>קבלת התשלום:</p>
            <input type="radio" id="age1" name="age" value="30"  ref={(c) => this.payment_time = c}/>
            <label for="age1">בסוף יום העבודה</label>
            <br />
            <input type="radio" id="age2" name="age" value="60" />
            <label for="age2">בסוף החודש</label>
            <br />
          </div>
        </fieldset>

        <fieldset>
          <input
            class="field"
            id="Pplace"
            ref={(c) => this.place = c}
            placeholder="מיקום העבודה"
            type="text"
            tabindex="4"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            ref={(c) => this.business_name = c}
            placeholder="שם העסק"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            ref={(c) => this.clothing = c}
            placeholder="ביגוד מיוחד"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            ref={(c) => this.remarks = c}
            placeholder="הערות"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <div id="postButton" onClick={this.onSubmit}>פרסם</div>
        </fieldset>
      </div>
    </div>
    );
  }
};
export default BusinessPostJob;

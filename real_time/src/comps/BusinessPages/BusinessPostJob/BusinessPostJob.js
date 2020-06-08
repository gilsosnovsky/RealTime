import React from "react";
import "./BusinessPostJob.css";

const BusinessPostJob = (props) => {
  return (
    <div class="post_job_business">
      <div id="postJobContainer">
        <div id="postJobTitle">פרסם עבודה</div>

        <fieldset>
          <input
            class="field"
            id="Ptype"
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
            placeholder="פרטי העבודה"
            type="text"
            tabindex="4"
            required
            autofocus
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
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
            placeholder="שעות העבודה"
            type="time"
            tabindex="1"
            required
          />
          <h3>עד שעה:</h3>
          <input
            class="field"
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
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">מזומן</label>
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">המחאה</label>
            <br />
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">העברה בנקאית</label>
          </div>
        </fieldset>

        <fieldset>
          <div class="radioButtons">
            <p>קבלת התשלום:</p>
            <input type="radio" id="age1" name="age" value="30" />
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
            placeholder="שם העסק"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            placeholder="ביגוד מיוחד"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>

        <fieldset>
          <input
            class="field"
            placeholder="הערות"
            type="text"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <div id="postButton">פרסם</div>
        </fieldset>
      </div>
    </div>
  );
};
export default BusinessPostJob;

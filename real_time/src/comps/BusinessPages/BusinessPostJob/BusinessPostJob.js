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
          משעה
          <input
            class="field"
            placeholder="שעות העבודה"
            type="time"
            tabindex="1"
            required
          />
          עד שעה
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
          <label id="radio_button_container">
            אופן התשלום:
            <br />
            <label className="radio_button">
              <input
                type="radio"
                id="cash"
                name="radAnswer"
                checked="checked"
              />
              מזומן
            </label>
            <label className="radio_button">
              <input type="radio" id="check" name="radAnswer" />
             צ'ק
            </label>
            <label className="radio_button">
              <input type="radio" id="transfer" name="radAnswer" />
              העברה בנקאית
            </label>
          </label>
        </fieldset>

        <fieldset>
          <label id="radio_button_container">
            קבלת התשלום:
            <br />
            <label className="radio_button">
              <input
                type="radio"
                id="end_of_the_day"
                name="radAnswer"
                checked="checked"
              />
              בסוף יום העבודה
            </label>
            <label className="radio_button">
              <input type="radio" id="end_of_the_nonth" name="radAnswer" />
             בסוף החודש
            </label>
          </label>
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
          <div id="post">פרסם</div>
        </fieldset>
      </div>
      </div>
    );
 
};
export default BusinessPostJob;

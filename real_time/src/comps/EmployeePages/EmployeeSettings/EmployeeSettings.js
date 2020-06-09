import React from "react";
import "./EmployeeSettings.css"
import person from "./person.png"

const EmployeeSettings = (props) => {

    return (
      <div id="settings_container">
      <div id="settings_employee">
        <div class="user_pic">
          <img id="emloyee_image" src={person}></img>
        </div>
        <div id="employee_name">
              אוראל שלמה
        </div>
        <div id="edit_pic_con">
          <button id="edit_pic_button">ערוך תמונת פרופיל</button>
        </div>
        <div id="employee_details_to_edit">
          <div id="full_name_to_edit">
          <fieldset >
            <label>שם מלא:</label>
            <br/>
            <input
              class="field"
              placeholder="current full name"
              type="text"
              tabindex="2"
              autofocus
            />
          </fieldset>
          </div>
          <div id="photo_to_edit">
          <fieldset >
            <label>טלפון:</label>
            <br/>
            <input
              class="field"
              placeholder="current phone number"
              type="text"
              tabindex="2"
            />
          </fieldset>
          </div>
          <div id="email_to_edit">
          <fieldset>
            <label>אימייל:</label>
            <br/>
            <input
              class="field"
              placeholder="current email"
              type="email"
              tabindex="2"
            />
          </fieldset>
          </div>
          <div id="birthday_to_edit">
          <fieldset>
            <label>תאריך לידה:</label>
            <br/>
            <input
              class="field"
              placeholder="תאריך לידה"
              type="date"
              tabindex="3"
            />
          </fieldset>
          </div>
          <fieldset>
            <label>כתובת מלאה:</label>
            <br/>
            <input
              id="addres_field"
              placeholder="current full address"
              type="text"
              tabindex="2"
            />
          </fieldset>
          <fieldset className="item_to_edit">
            <label>תחומי עבודה מועדפים:</label>
            <br/>
            <input
              id="favorite_job_field"
              placeholder="current favorite jobs"
              type="text"
              tabindex="2"
            />
          </fieldset>
          <fieldset >
            <label>קצת על עצמי:</label>
            <br/>
            <textarea
              id="about_myself_filed"
              placeholder="current about myself"
              tabindex="4"
            ></textarea>
          </fieldset>
        </div>
        <div id="save_changes_con">
          <button id="save_changes_button">שמור שינויים</button>
        </div>
      </div>
      </div>
    );
};
export default EmployeeSettings;

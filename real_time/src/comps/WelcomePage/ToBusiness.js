import React from "react";
import "./ToBusiness.css";

const ToBusiness = (props) => {
  return (
    <div id="toBusiness">
      <div id="info">
        <label id="headLine">
          זמן אמת הפתרון המושלם לבעיית כוח האדם בעקבות משבר הקורונה!
        </label>
        <label id="paragraph_1">
          זמן אמת היא פלטפורמה ירושלמית שמתמחה בגיוס, שיבוץ, וניהול עובדים
          יומיים.
          <br />
          מטרתנו היא לעזור למעסיקים בירושלים למצוא עובדים/ות לעבודות מזדמנות
          וקצרות טווח.
          <br />
          באמצעותנו ספקים שונים יכולים להתמודד עם התנודתיות בעקבות המשבר, שיוצר
          קשיים יומיומיים בניהול כוח אדם.
          <br />
          בזכות הטכנולוגיה שפיתחנו, בשילוב עם רשת קשרים מקצועית ברחבי העיר,
          ביכולתנו לספק עובדים ליום או יותר,
          <br />
          בכל רחבי העיר, בהזמנה מראש או בהתראה קצרה, למגוון רחב של תפקידים
          ומקצועות.
        </label>
      </div>
      <div id="intrestMe">
        <div class="container">
          <form id="contact" action="" method="post">
            <h3>!מעניין אותי</h3>
            <h4>אשמח לשמוע פרטים</h4>
            <fieldset>
              <input
                id="fname"
                placeholder="שם:"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>

            <fieldset>
              <input placeholder="אימייל:" type="email" tabindex="2" required />
            </fieldset>

            <fieldset>
              <input placeholder="טלפון:" type="tel" tabindex="3" required />
            </fieldset>

            <fieldset>
              <input
                id="fname"
                placeholder="איך הגעת אלינו?"
                type="text"
                tabindex="4"
                required
                autofocus
              />
            </fieldset>

            <fieldset>
              <input
                id="fname"
                placeholder="שם העסק:"
                type="text"
                tabindex="5"
                required
                autofocus
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="עוד משהו להוסיף?"
                tabindex="5"
                required
              ></textarea>
            </fieldset>

            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ToBusiness;

import React from "react";
import "./ToBusiness.css";
import helping_hands from "./helping_hand.png";
import instegram from "./instagram.png";
import facebook from "./facebook.png";
import hug from "./hug.png";


const ToBusiness = (props) => {
  return (
    <div id="toBusiness">
      <div id="infoToBusiness">
        <label id="headLineToBusiness">
        זמן אמת - הפתרון המושלם לבעיית כוח האדם שלך!
        </label>
        <label className="paragraph_1_toBusiness">
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
      <label className="paragraph_2_toBusiness">
      בעקבות הטכנולוגיה שפיתחנו, בשילוב עם הצוות המקצועי שלנו, ביכולתנו לספק 
      <br/>
      עובדים לעבודות זמניות וקבועות, בכל רחבי ירושלים, למגוון רחב של תפקידים ומקצועות. 
      <br/>
      זאת באמצעות מודל חדש של העסקה חברתית, שיסייע בהקטנת פערים בין ציבורים שונים
      <br/>
       ויספק למעסיקים כוח אדם איכותי. 
      </label>
      <p/>
      <div id="three_qal">
        <div id="helping_hands">
            <img src={helping_hands}></img>
            <p/>
            <label>
              <b>ליווי קבוע</b>
              <br/>
              תכנית ליווי מקצועי מצוות 'זמן אמת'
              <br/>
               למעסיקים בפלטפורמה, לפני הגיוס לעבודה,
               <br/>
                במהלכה ולאחריה. 
                </label>
        </div>
        <div id="social_media">
          <img src={facebook} height='60x'></img>
          <img src={instegram} height='60px'></img>
          <p/>
      
          <label>
            <b>	פרסום עירוני</b>
            <br/>
             פרסום העסק בפלטפורמות 
            <br/>
            דיגיטליות עירוניות
          </label>
        </div>
        <div id="hug">
          <img src={hug}></img>
          <p/>
          <label>
          <b>מעטפה צמודה</b>
            <br/>
          כוח האדם מלווה ע"י הצוות המקצועי של 'זמן אמת',
          <br/>
           החל משלב חיפוש העבודה, במהלכה ולאחריה.
          </label>

        </div>
        <p/>

      </div>
    </div>
  );
};
export default ToBusiness;

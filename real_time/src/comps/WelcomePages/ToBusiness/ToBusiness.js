import React from "react";
import "./ToBusiness.css";
import helping_hands from "./helping_hand.png";
import instegram from "./instagram.png";
import facebook from "./facebook.png";
import hug from "./hug.png";
import medal from "./medal.png";
import smiley from "./smiley.png";


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
            <label id="radio_button_container">המשרות המוצעות:
              <br/>
              <label className="radio_button">
              <input type="radio" id="short_term" name="radAnswer" checked="checked"/>
              טווח קצר
              </label>

              <label className="radio_button">
              <input type="radio" id="long_term" name="radAnswer"/>
              עבודה קבועה
              </label>

              <label className="radio_button">
              <input type="radio" id="both" name="radAnswer"/>
              גם וגם
              </label>
            </label>
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
      <br />
      עובדים לעבודות זמניות וקבועות, בכל רחבי ירושלים, למגוון רחב של תפקידים ומקצועות.
      <br />
      זאת באמצעות מודל חדש של העסקה חברתית, שיסייע בהקטנת פערים בין ציבורים שונים
      <br />
       ויספק למעסיקים כוח אדם איכותי.
      </label>
      <p />
      <div id="three_qal">
        <div id="helping_hands">
          <img src={helping_hands} height='80px'></img>
          <p />
          <label>
            <b>ליווי קבוע</b>
            <br />
              תכנית ליווי מקצועי מצוות
              'זמן אמת' למעסיקים בפלטפורמה,
                לפני הגיוס לעבודה,
                במהלכה ולאחריה.
                </label>
        </div>
        <div id="social_media">
          <img src={facebook} height='80px'></img>
          <img src={instegram} height='80px'></img>
          <p />

          <label>
            <b>	פרסום עירוני</b>
            <br />
             פרסום העסק בפלטפורמות
            דיגיטליות עירוניות
          </label>
        </div>
        <div id="hug">
          <img src={hug} height='80px'></img>
          <p />
          <label>
            <b>מעטפה צמודה</b>
            <br />
          כוח האדם מלווה ע"י הצוות המקצועי של 'זמן אמת',
           החל משלב חיפוש העבודה, במהלכה ולאחריה.
          </label>
        </div>
        <p />

      </div>
      <div id="advantages">
        <div id="advantages_container">
          <label id="advantages_title">
            היתרונות בלעבוד איתנו
          </label>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              זמן = כסף!
          </label>
            <br />
            <label className="advantages_item_body">
              אנו מאתרים עבורכם את העובדים, מה שחוסך התרוצצות וזמן יקר בפרסום וגיוס.
          </label>
          </div>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              מהירות
          </label>
            <br />
            <label className="advantages_item_body">
            אפשר למצוא פתרונות מהרגע להרגע.
          </label>
          </div>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              זמינות
          </label>
            <br />
            <label className="advantages_item_body">
            הצוות המקצועי זמין עבורכם בכל עת.
          </label>
          </div>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              שירות
          </label>
            <br />
            <label className="advantages_item_body">
            כל מעסיק זוכה לליווי צמוד, תוך התאמה של הצרכים לעבודות השונות
          </label>
          </div>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              איכות
          </label>
            <br />
            <label className="advantages_item_body">
            אין אצלנו פשרות בכוח האדם. כל המועמדים עוברים ראיון מקדים ושיחות רענון תקופתיות.
          </label>
          </div>
          <div className="advantages_item">
            <img src={medal} width="35px" />
            <label className="advantages_item_title">
              שקט נפשי
          </label>
            <br />
            <label className="advantages_item_body">
            יחסי אנוש זה המומחיות שלנו. תנו לנו לעשות את העבודה בשבילכם.          </label>
          </div>

        </div>
      </div>
      <div id = "our_employees">
        <label id="our_employees_title">
            העובדים שלנו
        </label>
        <p/>
        <label id="our_employees_sub_title">
        קהל היעד העיקרי של האפליקציה הם בראש ובראשונה - ירושלמים!
        <br/>
         נוער וצעירים/ות מוכשרים/ות, בעלי כוח רצון!  בין היתר, חלק מהעובדים הם –
        </label>
        <p/>
        <div className = "our_employees_item">
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             מלש"בים אשר רוצים לחסוך לפני שירות צבאי/לאומי
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             חיילים בסדיר אשר רוצים לעבוד ולא יכולים להתחייב למקום קבוע
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             חיילים משוחררים אשר רוצים לחסוך כסף ומחפשים עבודה עם כסף טוב ומהיר, אשר אינה מצריכה מיומנות מיוחדת.
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
            עובדים בין עבודות.
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             סטודנטים אשר זמינותם לעבודה משתנה כתוצאה מלימודים / בחינות
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             עובדים הזקוקים להכנסה נוספת זמנית / או קבועה בזמנים משתנים.
            </label>
            <br/>
            <img src={smiley} className="smiley"></img>
            <label className="type_of_employee">
             עובדים אשר אוהבים לגוון בין עבודות ומעסיקים
            </label>
        </div>
      </div>
    </div>
  );
};
export default ToBusiness;

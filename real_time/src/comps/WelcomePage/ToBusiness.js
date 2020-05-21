import React from 'react';
import './ToBusiness.css'




const ToBusiness = (props) => {
    return (
        <div id="toBusiness">
            <label id="headLine">
            זמן אמת הפתרון המושלם לבעיית כוח האדם בעקבות משבר הקורונה!
            </label>
            <label id="paragraph_1">
            זמן אמת היא פלטפורמה ירושלמית שמתמחה בגיוס, שיבוץ, וניהול עובדים יומיים.
            <br/>
             מטרתנו היא לעזור למעסיקים בירושלים למצוא עובדים/ות לעבודות מזדמנות וקצרות טווח.
             <br/>
              באמצעותנו ספקים שונים יכולים להתמודד עם התנודתיות בעקבות המשבר, שיוצר קשיים יומיומיים בניהול כוח אדם. 
            <br/>
              בזכות הטכנולוגיה שפיתחנו, בשילוב עם רשת קשרים מקצועית ברחבי העיר, ביכולתנו לספק עובדים ליום או יותר,
            <br/>
               בכל רחבי העיר, בהזמנה מראש או בהתראה קצרה, למגוון רחב של תפקידים ומקצועות. 
            </label>
            <label id="intrestMe">
                <label id="headLineIntrest">
                !מעניין אותי
                <br/>
                אשמח לשמוע פרטים
                </label>
                <div id="form">
                    <label for="fname">שם:</label>
                    <input type="text" id="fname" name="fname"/><br></br>
                    <label for="fphone">טלפון:</label>
                    <input type="tel" id="phoneNumber" name="fphone"/><br></br>
                    <label for="femail">אימייל:</label>
                    <input type="email" id="femail" name="femail"/><br></br>
                    <label for="fhowYouGotUs">איך הגעת אלינו ?</label>
                    <input type="text" id="fhowYouGotUs" name="fhowYouGotUs"/><br></br>
                    <label for="fbusinessName"> שם העסק:</label>
                    <input type="text" id="fbusinessName" name="fbusinessName"/><br></br>
                    <label for="ftypeOfjob">המשרות המוצעות:</label>
                    <input type="radio" id="shortTerm" name="shortTerm" value="shortTerm"/>
                    <label for="shortTerm">טווח קצר</label><br/>
                    <input type="radio" id="longTerm" name="longTerm" value="longTerm"/>
                    <label for="longTerm">עבודה קבועה</label><br/>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">גם וגם</label>
                </div>
            </label>

        </div>
    )
}
export default ToBusiness;
import React from 'react';
import './AboutUs.css';

const aboutUs = (props) => {
    return (
        <div id="aboutUs">
            <div id='aboutUsBody'>
                <div id="aboutUs_p1">
                    מי אנחנו?
                </div>
                <div id="aboutUs_p2">
                    זמן אמת היא פלטפורמה ירושלמית שמתמחה בגיוס
                    ,שיבוץ, וניהול עובדים יומיים, מטרתנו היא תיווך ביו מעסיקים
                    המחפשים עובדים זמניים לבין עובדים פוטנציאלים. אנו מאמינים
                    בהעסקה חברתית ובצמצום פערים, דרך מתן הזדמנויות לנוער וצעירים ירושלמים. בזכות
                    הטכנולוגיה שפיתחנו, בשילוב עם רשת קשרים מקצועית ברחבי העיר, ביכולתנו לספק עובדים
                    ליום או יותר, בכל רחבי העיר, בהזמנה מראש או בהתראה קצרה
                    , למגוון רחב של תפקידים ומקצועות.
                </div>
                <div id="amit_div">
                    <div id="aboutUs_amit_description">
                        <div className="aboutUs_name_title">עמית לרנר </div>
                    ירושלמי מלידה, נשוי וגר בגבעה הצרפתית. בתפקידי כרכז תעסוקה בחטיבה לקידום נוער
                    וצעירים בעיריית ירושלים, הגעתי להבנה כי עולם התעסוקה דינמי ויש להתאים עצמנו אליו.
                    כך נולד הרעיון להקמת פלטפורמה דיגיטלית עירונית שתפגיש בין מעסיקים לעובדים, על בסיס
                    הצעות עבודה יומיות. בעל תואר ראשון ביחסים
                    בינלאומיים וקרימינולוגיה מהאוניברסיטה העברית בירושלים.
                    </div>

                    <div id='aboutUs_amit_pic_div'>
                        <img className='personal_pic'
                            src={require('./amit_pic_square.jpg')} />
                    </div>
                </div>
                <div id="yuval_div">
                    <div id='aboutUs_yuval_description'>
                        <div className="aboutUs_name_title">יובל שמאי </div>
                    גדלתי בעמק יזרעאל, מתגוררת בארבע השנים האחרונות בירושלים בשכונת נחלאות,
                    פיזיותרפיסטית במקצועי. בתפקידי כרכזת תעסוקה בשלטר לצעירות חסרות בית של עמותת
                    עלם. גיליתי את עולם התעסוקה ואת הצורך במענה נגיש ומותאם לכל שכבות האוכלוסייה.
                    </div>
                    <div id='aboutUs_yuval_pic_div'>
                        <img className='personal_pic'
                            src={require('./yuval_pic.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default aboutUs;
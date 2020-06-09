import React from 'react';
import './ToEmployees.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const toEmployees = (props) => {
    return (
        <div id="toEmployees">
            <div id='employees_top'>
                <div id ="employees_top_right">
                    <img id='employees_phone_pic' src = {require('./phone_pic.jpg')} alt="guy with a phone" />  
                </div>
                <div id="employees_p1">
                מחפשים עבודה? בשביל זה אנחנו כאן!
                <br />
                </div>
                <div id="employees_p2">
                        בזמן אמת, ביכולתנו לסייע לנוער וצעירים/ות המחפשים הכנסה
                        <br />
                        כספית על בסיס יומי דרך הצעות עבודה אטרקטיביות.
                        <br />
                        נכנסנים לאתר ומקבלים הצעות עבודה יומיות וגמישות ללא
                        <br />
                        מחויבות לכמות משמרות במגוון מקצועות וענפים ברחבי ירושלים.
                </div>
                <div id ="employees_top_left">
                    <img id='employees_waiter_pic' src = {require('./waiter_pic.jpg')} alt="waiter"/>
                </div>
            </div>
            <p></p>
            <div id="carousel_container">
            <label id="hot_jobs_carousel">משרות חמות</label>
            <Carousel id="carousel">    
                <Carousel.Item className="carousel_item">
                    <div className = "job_pic">
                        <img src = {require('./service.png')}
                        width="80%" alt="service"/>
                    </div>
                    <Carousel.Caption>
                        <h3>First job</h3>
                        <p>Details for the first job</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                    <div className = "job_pic">
                        <img src = {require('./build.png')}
                        width="80%" alt="builder"/>
                    </div>
                    <Carousel.Caption>
                        <h3>Second job</h3>
                        <p>Details for the second job</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                        <div className = "job_pic">
                            <img src = {require('./service.png')}
                            width="80%" alt="service"/>
                        </div>
                    <Carousel.Caption>
                        <h3>Third job</h3>
                        <p>Details for the third job</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <p />
            <div id="employees_p3">
                <div id= 'employees_p3_empty'>
                    <img id='employees_hands_pic' src = {require('./employees_hands.jpg')} alt="hands" />   
                </div>
                <div id='employees_p3_text'>
                    אנחנו ב'זמן אמת' בחרנו בשבילכם/ן את העסקים הכי טובים בירושלים.
                        <br />
                        אתם רק צריכים להחליט מתי, איפה וכמה בא לכם/ן לעבוד! 
                        <br />
                        אנחנו מודעים לקשיים שנוצרו במציאת עבודה בעקבות משבר הקורונה. 
                        <br />
                        לכן, בזמן אמת החלטנו לפתח טכנולוגיה שתעזור לכם למצוא עבודה 
                        <br />
                        מכל מקום ובכל זמן בקליק אחד!
                </div>
                <div id='employees_p3_pic'>
                   
                </div>
            </div>

            <div id="employees_p4">
            אכפת לנו!
            </div>
            <div id= "employees_p5">
                <br />
                לנו ב'זמן אמת' אכפת מכם! לכן אנחנו עובדים אך ורק עם מעסיקים הוגנים.
                <br />
                חשוב לנו ללוות אתכם, ולדאוג שתקבלו את כל הזכויות המגיעות
                <br />
                לכם -  שכר לפי חוק, שעות נוספות, שעות שבת וחג, תנאים סוציאליים.
            </div>
        </div>
    )
}
export default toEmployees;
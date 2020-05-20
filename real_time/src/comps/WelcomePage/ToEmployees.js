import React from 'react';
import './ToEmployees.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'



const toEmployees = (props) => {
    return (
        <div id="toEmployees">
            <div id="paragraph_1">
                ?גם אתכם/ן הקורונה תפסה לא מוכנים
            <br />
             !בשביל זה אנחנו כאן
            </div>
            <br />
            <div id="paragraph_2">
                ביכולתנו לסייע לנוער וצעירים/ות המחפשים הכנסה כספית
             <br />
             על בסיס יומי דרך הצעות עבודה אטרקטיביות
             <br />
              נכנסים לאתר ומקבלים ישירות לנייד הצעות עבודה יומיות וגמישות
              <br />
              ללא מחויבות לכמות משמרות במגוון מקצועות וענפים ברחבי ירושלים
            </div>
            <p></p>
            <Carousel id="carousel" width='100px'>
                <Carousel.Item className="photo_1">
                    <Carousel.Caption>
                        <h3>First job</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="photo_1">

                    <Carousel.Caption>
                        <h3>Second job</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="photo_1">
                    <Carousel.Caption>
                        <h3>Third job</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p />
            <div id="paragraph_3">
                אנחנו ב'זמן אמת' בחרנו בשבילכם/ן את העסקים הכי טובים בירושלים.
                <br />
                אתם רק צריכים להחליט מתי, איפה וכמה בא לכם/ן לעבוד!
                <br />
                אנחנו מודעים לקשיים שנוצרו במציאת עבודה בעקבות משבר הקורונה.
                <br />
                לכן, בזמן אמת החלטנו לפתח טכנולוגיה שתעזור לכם למצוא עבודה מכל מקום ובכל זמן בקליק אחד!


            </div>
        </div>

    )

}
export default toEmployees;
import React from "react";
import "./Copyrights.css";
import "bootstrap/dist/css/bootstrap.css";
import orel from "./orel.jpg";
import michael from "./michael.png";
import roy from "./roy.png";
import gil from "./gil.png";
import sahar from "./sahar.png";

const Copyrights = (props) => {
  return (
    <div id="copyrightsPage">
      <h1>הצוות שלנו</h1>
      <div id="firstLine">
        <div className="teamMember">
          <img className="memberPic" alt="מיכאל בן עמוס" src={michael} />
          <h2 className="names">מיכאל בן-עמוס</h2>
        </div>
        <div className="teamMember">
          <img className="memberPic" alt="אוראל עטיה" src={orel} />
          <h2 className="names">אוראל עטיה</h2>
        </div>
        <div className="teamMember">
          <img className="memberPic" alt="רועי אילוז" src={roy} />
          <h2 className="names">רועי אילוז</h2>
        </div>
      </div>
      <p></p>
      <div id="secondLine">
        <div className="teamMember">
          <img className="memberPic" alt="גיל סוסנובסקי"src={gil} />
          <h2 className="names">גיל סוסנובסקי</h2>
        </div>
        <div className="teamMember">
          <img className="memberPic" alt="סהר מלכה" src={sahar} />
          <h2 className="names">סהר מלכה</h2>
        </div>
      </div>
    </div>
  );
};
export default Copyrights;

import React, { Component } from "react";
import "./Copyrights.css";
import "bootstrap/dist/css/bootstrap.css";
import orel from "./orel.png";
import michael from "./michael.png";
import roy from "./roy.png";
import gil from "./gil.png";
import sahar from "./sahar.png";

const Copyrights = (props) => {
  return (
    <div id="copyrightsPage">
      <h1>הצוות שלנו</h1>
      <div id="firstLine">
        <div class="teamMember">
          <img className="memberPic" src={michael} />
          <h2 class="names">מיכאל בן-עמוס</h2>
        </div>
        <div class="teamMember">
          <img className="memberPic" src={orel} />
          <h2 class="names">אוראל עטיה</h2>
        </div>
        <div class="teamMember">
          <img className="memberPic" src={roy} />
          <h2 class="names">רועי אילוז</h2>
        </div>
      </div>
      <p></p>
      <div id="secondLine">
        <div class="teamMember">
          <img className="memberPic" src={gil} />
          <h2 class="names">גיל סוסנובסקי</h2>
        </div>
        <div class="teamMember">
          <img className="memberPic" src={sahar} />
          <h2 class="names">סהר מלכה</h2>
        </div>
      </div>
    </div>
  );
};
export default Copyrights;

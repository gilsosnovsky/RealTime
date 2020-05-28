import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div id="Home">
      <div id="empButton" onClick={props.clickLogin}>
        בעל עסק
      </div>
      <div id="busButton" onClick={props.clickLogin}>
        מחפש עבודה
      </div>
    </div>
  );
};
export default Home;

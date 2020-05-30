import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div id="Home">
      <div id="empButton" onClick={props.onClickToLogin}>
        בעל עסק
      </div>
      <div id="busButton" onClick={props.onClickToLogin}>
        מחפש עבודה
      </div>
    </div>
  );
};
export default Home;

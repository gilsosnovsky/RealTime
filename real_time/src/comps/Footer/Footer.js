import React from "react";
import "./Footer.css";
import instagram_icon from "./instagram_icon.png";
import facebook_icon from "./facebook_icon.png";

const Footer = (props) => {
  return (
    <div id="footer">
      <a
        href="https://www.facebook.com/זמן-אמת-Zman-Emet-101856524893149/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="facebook_icon"
          className="social_media_buttons"
          src={facebook_icon}
          alt="facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/zmanemet_jobs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="instagram_icon"
          className="social_media_buttons"
          src={instagram_icon}
          alt="instagram"
        />
      </a>
      <p />
      <label>
        ניתן להשיג אותנו בטלפון – 02-5456292 או במייל –
        Amit_le@jerusalem.muni.il
      </label>
      <div id="copyrights">
        <label id="copy" onClick={props.clickCopyrights}>
          Copyrights ©
        </label>
      </div>
    </div>
  );
};
export default Footer;

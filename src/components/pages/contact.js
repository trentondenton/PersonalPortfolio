import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "center"
        }}
      />
<div className="right-column">
  <div className="contact-bullet-points">
    <div className="bullet-point-group">
      <div className="icon">
        <FontAwesomeIcon icon="phone" />
      </div>

      <div className="text"><a href="tel:+785-829-1053">(785) 829-0153</a></div>
    </div>

    <div className="bullet-point-group">
      <div className="icon">
        <FontAwesomeIcon icon="envelope" />
      </div>

      <div className="text"><a href="mailto:trentondenton91@gmail.com">trentondenton91@gmail.com</a></div>
    </div>

    <div className="bullet-point-group">
      <div className="icon">
        <FontAwesomeIcon icon="map-marked-alt" />
      </div>

      <div className="text"><a href="https://www.google.com/maps/@39.0414253,-98.147338,14.5z" target="_blank">Lincoln Center, KS</a></div>
    </div>
  </div>
</div>
    </div>
  );
}
import React from "react";

import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <h1>Hello! Thank you for visiting.</h1>
        <p>
          My name is Trenton. I'm an entry level developer. I completed my Associate's in Information Technology in June of 2022.
          I will continue working towards my Bachelors in Computer Information Systems with a focus in Software Development from DeVry University.
        </p>
        <p>
          I worked in nursing for 12 years and after the intital COVID-19 pandemic began I decided to persue a
          career in a field I have always wanted to work in. I have obtained a FulL-Stack Development Certification,
          Mobile Development Certification through Bottega University. I also completed the Google Data Analyst Certification.
          I look forward to hearing from you! If you have any questions please see the Contact page to reach out.
        </p>
        <p className="p2">Trenton D. Denton</p>

      </div>
    </div>
  );
}
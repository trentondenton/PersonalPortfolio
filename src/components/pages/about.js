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
          My name is Trenton. I'm an entry level developer. I am currently enrolled
          at Devry University. I will complete my Associates in Information Technology and Networking in April of 2022.
          I will continue working towards my Bachelors in Computer Information Systems with a focus in Software Development.
        </p>
        <p>
          I worked in nursing for 12years and after the intital COVID-19 pandemic began I decided to persue a
          career in a field I have always wanted to work in. I have completed a coding bootcamp form Bottega University
          through the Kansas Rural & Remote Program and received a Full Stack Development Certificate. I have also
          completed the Google Data Analyst Course through Coursera. I will be taking the Python Institute PCEP Test in
          April of 2022. The blog page has updates on my journey this far. I look forward to hearing from you!
          If you have any questions please see the Contact page to reach out.
        </p>
        <p className="p2">Trenton D. Denton</p>

      </div>
    </div>
  );
}
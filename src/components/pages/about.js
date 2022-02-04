import React from "react";

import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
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
       <p>My name is Trenton. I'm on the path to becoming a software developer. I am currently enrolled
         in Devry University working towards my Bachelor's in Computer Information Systems with a focus
         of Software Development.
        </p>
        <p>
          I have experience in Python, Javascript, C++, HMTL/CSS/SCSS, MySQL, and many libraries for most
          of these languages. I worked in nursing for 8 years and after the intital COVID-19 pandemic
          began I decided to persue a career in a field I enjoy. I have also attended a coding bootcamp
          provided by Bottega University (DevCamp) through the Kansas Rural & Remote Program. Please feel
          free to browse the app. The blog page has updates on my journey this far. I look forward
          to hearing from you! If you have any questions please see the Contact page to reach out.
        </p>
        <p className="p2">Trenton D. Denton</p>
       
      </div>
    </div>
  );
}
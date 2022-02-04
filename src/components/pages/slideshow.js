import React, { Component } from "react";
import ReactGoogleSlides from "react-google-slides";



 class Slideshow extends Component {
   constructor(props) {
     super(props);

     this.state= {
       link: "https://docs.google.com/presentation/d/1u4fSc-b2UcI1Y8rdHWuw4GlCOGqm4WrNGrKuTwpHIaU/edit#slide=id.p",
       heading: "Course Projects",
       description: "Please Select One"
     }
     
     this.updateLink = this.updateLink.bind(this);
   }

   updateLink = (glink, header, descript) => {
     this.setState({ 
       link: glink,
       heading: header,
       description: descript
      });
   }
   
   render() {

    return (
      <div className="google-slide-page">
        <div className="google-slide-selectors">
          <button id="toggle" 
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1vRB2DnzmDd9T34s_I6l0X2w85Lt7-V4GlDxBEjSIzZg/edit#slide=id.p1",
              "CEIS 101",
              "Internet of Things")}>
            CEIS 101 
          </button>

          <button id="toggle" 
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1vRB2DnzmDd9T34s_I6l0X2w85Lt7-V4GlDxBEjSIzZg/edit#slide=id.p1",
              "CEIS 106",
              "Operating Systems")}> 
            CEIS 106
          </button>

          <button id="toggle" 
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1fGtjlgDR-y3PHFhpmlE_GQIUiBUDi9STHpXt2uldQdg/edit#slide=id.p1",
              "CEIS 110", "Intro to Programming")}>
            CEIS 110
           </button>

          <button id="toggle" 
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1aFcYNYkOilV2xvgeFnIyPHPS9M_6CgUb1NUiTNWYuqs/edit#slide=id.p1",
              "CEIS 114",
              "Digital Devices")}>
            CEIS 114
          </button>

          <button id="toggle"
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1usUOtFocMw0L6fAIf7XpvbLEU1JG5IkZ_2vCC2BMH6k/edit#slide=id.p1",
              "CIS 170C",
              "Fundamentals of Programming")}>
            CIS 170C
          </button>

          <button id="toggle" 
            onClick={() => this.updateLink(
              "https://docs.google.com/presentation/d/1xpi1NQBWqbx-TBiiJg1IaW4VhcImZQ5Fd6ZRu7ZK7HA/edit#slide=id.p1",
              "NETW 191",
              "Intro to IT & Networking")}>
              NETW 191
          </button>

          <button id="toggle" onClick={() => this.updateLink(
            "https://docs.google.com/presentation/d/1Tmie2ISje5OCSbakt5loOt_PkUYc8AtX6_Di2-kJPt8/edit#slide=id.p1",
            "NETW 211",
            "Cloud Computing")}>
            NETW 211
          </button>

          <button id="toggle" onClick={() => this.updateLink(
            "https://docs.google.com/presentation/d/11V1pyLzDAaRDZkiY3HCt0JVmN7nufggpE9f1CF9L0iE/edit#slide=id.p2",
            "SEC 285",
            "Fundamentals of Information Security")}>
            SEC 285
          </button>
          
        </div>

        <div className="course-slide">
          <h1>{this.state.heading}</h1> 
          <p>{this.state.description}</p>
          <ReactGoogleSlides
            width={800}
            height={600}
            slidesLink={this.state.link}
            slideDuration={5}
            position={1}
            showControls
            loop
          />
          </div>
      </div>
    )
  }

}


export default Slideshow;
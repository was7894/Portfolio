import React from "react";
import "../scss/Contact.scss";
import bg from "../images/img_temporary.jpg";
import paper from "../images/img_paper.svg";

function Contact() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <div className=" section section_last" style={{ height: "55vh !important" }}>
      <div className="shape_top">
        <img src={paper} />
      </div>
      <div className="sec4_bg" style={photo}>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "../scss/About.scss";
import bg from "../images/img_about.png";

function AboutPage() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <div className="section">
      <div id="container">
        <div className="contents">
          <div className="inner">
            <div className="left">
              <div className="img_about" style={photo}></div>
            </div>

            <div className="right">
              <div className="about_txt">
                <span className="txt_1">About Me</span>
                <p>소단락 제목</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

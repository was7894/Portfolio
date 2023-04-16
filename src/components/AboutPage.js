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
                <p>둥글고 협력적인 자세를 가지고 있는 프론트엔드 개발자 김형섭 입니다.</p>
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

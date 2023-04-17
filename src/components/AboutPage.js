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
                <h2>
                  둥글고 <span className="mark">협력적인 자세</span>를 가지고 있는 <br />
                  프론트엔드 신입개발자 <span className="mark">김형섭</span> 입니다.
                </h2>
                <div className="about_contents">
                  <div>
                    <h4>교육</h4>
                    <ul>
                      <li>강원대학교 컴퓨터 정보통신 공학</li>
                      <li>그린컴퓨터아카데미 프론트과정 수료</li>
                    </ul>
                  </div>
                  <div>
                    <h4>기술</h4>
                    <ul className="skill_box">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>jQuery</li>
                      <li>PHP</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>SCSS</li>
                      <li>Node.js</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                  <div>
                    <h4>자격증</h4>
                    <ul>
                      <li>정보처리기사</li>
                      <li>컴퓨터활용능력2급</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

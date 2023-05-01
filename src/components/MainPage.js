import React from "react";
import "../scss/MainPage.scss";
// import bg from "../images/img_photo.png";
// import bg from "../images/img_mp.png";
import bg from "../images/bg_main.png";

function MainPage() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <>
      <div className="section">
        <div id="container">
          <div className="background">
            <div className="img_photo1" style={photo}></div>
          </div>

          <div className="content">
            <div className="sub_title">
              발전과 발견을 중시하는 개발자
              <span className="overlay_effect"></span>
            </div>

            <div className="title">
              <span style={{ color: "white" }}>hyeong</span> seob
              <span className="overlay_effect"></span>
            </div>

            <div className="btn_main">
              <button
                type="button"
                className="btn_white"
                onClick={() => {
                  window.open("https://github.com/was7894");
                }}
              >
                깃허브
              </button>
              <button
                type="button"
                className="btn_black"
                onClick={() => {
                  window.open("https://docs.google.com/document/d/1MiU-XKGUkq9cpLf9lCkEGD_3-5OQL9RW/edit?usp=sharing&ouid=106889525398445370472&rtpof=true&sd=true");
                }}
              >
                이력서
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

import React from "react";
import "../scss/MainPage.scss";
import bg from "../images/img_photo.png";

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
            <div className="sub_title">이번에 정차할 신입 프론트엔드 김형섭입니다.</div>
            <div className="box_steam">
              <div id="up" class="steam"></div>
              <div id="up" class="steam2"></div>
            </div>
            <div className="title">
              <span style={{ color: "white" }}>hyeong</span> seob
            </div>

            <div className="contain_train">
              <div className="track"></div>
            </div>

            <div className="btn_main">
              <button className="btn_white">이력서</button>
              <button className="btn_black">깃허브</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

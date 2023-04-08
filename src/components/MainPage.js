import React from "react";
import "../scss/MainPage.scss";
import bg from "../images/img_photo.png";

function MainPage() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="background">
            <div className="img_photo1" style={photo}></div>
          </div>

          <div className="content">
            <div className="title">
              <span style={{ color: "white" }}>hyeong</span> seob
            </div>
            <div className="sub_title">김형섭입니다.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

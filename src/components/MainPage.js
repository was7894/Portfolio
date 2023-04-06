import React from "react";
import "../scss/MainPage.scss";
// import background from "../../public/images/model.jpg";
// import background from "./images/model.jpg";
function MainPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="background">
            <div
              className="img_photo1"
              style={
                {
                  // backgroundImage: "url('../images/model.jpg')",
                }
              }
            ></div>
          </div>
          <div className="content">
            <div className="title">hyeong seob</div>
            <div className="sub_title">김형섭입니다.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

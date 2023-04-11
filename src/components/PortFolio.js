import React from "react";
import "../scss/PortFolio.scss";
import p1 from "../images/port_gist.png";

function PortFolio() {
  const pic01 = { backgroundImage: `url(${p1})` };

  return (
    <div className="section">
      <div className="slide">
        <div id="container">
          <h1 className="title_s">Projects</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">01</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
              <div className="box_right">
                <span className="num_p">02</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide">
        <div id="container">
          <h1 className="title_s">Projects</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">03</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
              <div className="box_right">
                <span className="num_p">04</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide">
        <div id="container">
          <h1 className="title_s">Projects</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">05</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
              <div className="box_right">
                <span className="num_p">06</span>
                <div className="capture">
                  <div className="img_port" style={pic01}></div>
                </div>
                <span className="title_p">광주과학기술원</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid voluptatum incidunt minus earum eligendi sapiente! Fuga quaerat deleniti sed nemo doloribus ullam. Asperiores autem rerum, aliquid officia repudiandae alias.</p>
                <div className="box_btn">
                  <button className="btn_n">깃허브보기</button>
                  <button className="btn_n">기획서보기</button>
                  <button className="btn_p">사이트보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

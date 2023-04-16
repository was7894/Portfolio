import React from "react";
import "../scss/PortFolio.scss";
import p1 from "../images/port_gist.png";

function PortFolio() {
  const pic01 = { backgroundImage: `url(${p1})` };

  return (
    <div className="section">
      <div className="slide">
        <div id="container">
          <h1 className="title_s">projects</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">01</span>
                <div className="contents_">
                  <span className="title_p">광주과학기술원</span>
                  <div className="capture">
                    <img className="img_site" src={p1} alt="" />
                  </div>
                </div>
              </div>
              <div className="box_right">
                <div className="info_project">
                  <ul>
                    <span>사용 기술</span>
                    <li>- HTML, CSS, jQury, javascript</li>
                  </ul>
                  <ul>
                    <span>작업기간 및 기여도</span>
                    <li>4주 / 100%</li>
                  </ul>
                  <ul>
                    <span>기능 구현</span>
                    <li>- 웹 표준을 고려한 시멘틱 마크업 설계 </li>
                    <li>- PC와 모바일 대응이 가능한 반응형 웹 적용 </li>
                    <li>- jQury, javascript 를 이용하여 각각 슬라이드 구현</li>
                    <li>- 공공데이터 api를 활용하여 기상정보 및 대기환경 정보 파싱</li>
                    <li>- 푸터 퀵 메뉴를 확인할 수 있는 모달창 노출 기능 구현</li>
                  </ul>
                  <ul>
                    <span>느낀점</span>
                    <li>프론트엔드 첫 포트폴리오 프로젝트 입니다. 처음이니 만큼 화면에 보여지는 것을 기준으로 하는 것이 아닌 웹 표준을 고려한 마크업 설계를 많이 고민할 수 있었고, PC와 모바일 환경에서 모두 대응할 수 있도록 반응형 디자인을 적용한 프로젝트 입니다.</li>
                  </ul>
                </div>

                <div className="box_btn">
                  <button type="button" className="btn_n">
                    깃허브보기
                  </button>
                  <button type="button" className="btn_n">
                    기획서보기
                  </button>
                  <button
                    type="button"
                    className="btn_p"
                    onClick={() => {
                      window.open("https://was7894.github.io/project_1/");
                    }}
                  >
                    사이트보기
                  </button>
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
                <div className="contents_">
                  <div className="capture">
                    <div className="img_port" style={pic01}></div>
                  </div>
                  <span className="title_p">광주과학기술원</span>

                  <div className="box_btn">
                    <button className="btn_n">깃허브보기</button>
                    <button className="btn_n">기획서보기</button>
                    <button className="btn_p">사이트보기</button>
                  </div>
                </div>
              </div>
              <div className="box_right">
                <span className="num_p">04</span>

                <div className="contents_">
                  <div className="capture">
                    <div className="img_port" style={pic01}></div>
                  </div>
                  <span className="title_p">광주과학기술원</span>

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

      <div className="slide">
        <div id="container">
          <h1 className="title_s">Projects</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">05</span>
                <div className="contents_">
                  <div className="capture">
                    <div className="img_port" style={pic01}></div>
                  </div>
                  <span className="title_p">광주과학기술원</span>

                  <div className="box_btn">
                    <button className="btn_n">깃허브보기</button>
                    <button className="btn_n">기획서보기</button>
                    <button className="btn_p">사이트보기</button>
                  </div>
                </div>
              </div>
              <div className="box_right">
                <span className="num_p">06</span>
                <div className="contents_">
                  <div className="capture">
                    <div className="img_port" style={pic01}></div>
                  </div>
                  <span className="title_p">광주과학기술원</span>

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
    </div>
  );
}

export default PortFolio;

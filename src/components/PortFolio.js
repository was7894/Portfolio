import React from "react";
import "../scss/PortFolio.scss";
import p1 from "../images/port_gist.png";
import p2 from "../images/port_anbd.png";
import p3 from "../images/port_yorijori.png";

function PortFolio() {
  return (
    <div className="section">
      <div className="bg_secp">
        <div className="slide">
          <div id="container">
            <h1 className="title_s screen_out">광주과학기술원 project</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">01</span>
                  <div className="contents_">
                    <span className="title_p">광주과학기술원 (관공서 페이지)</span>
                    <div className="capture">
                      <img className="img_site" src={p1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 프로그램</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- HTML, CSS, jQury, Javascript, PHP, Mysql</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기여도 / 작업기간 </h5>
                      <ul>
                        <li>- 100% / 4주 </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- 웹 표준을 고려한 시멘틱 마크업 설계 </li>
                        <li>- PC와 모바일 대응이 가능한 반응형 웹 적용 </li>
                        <li>- jQury, javascript 를 이용하여 각각 슬라이드 구현</li>
                        <li>- 푸터 퀵 메뉴를 확인할 수 있는 모달창 노출 기능 구현</li>
                        <li>- 구글 애널리틱스 적용하여 방문자의 데이터 웹 로그 분석 가능</li>
                        <li>- 공공데이터포털 api를 활용하여 기상정보 및 대기환경 정보 파싱</li>
                        <li>
                          - Mysql과 연동하여 PHP 게시판 CRUD 구현
                          <a href="http://wa7894.dothome.co.kr/pro1_ver2/board.php">
                            <i>(배포서버:dothome)</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">느낀점</h5>
                      <ul>
                        <li>프론트엔드 첫 포트폴리오 프로젝트 입니다. 화면에 보여지는 것을 기준으로 하는 것이 아닌 처음이니 만큼 웹 표준을 고려한 마크업 설계를 많이 고민할 수 있었고, PC와 모바일 환경에서 모두 대응할 수 있도록 반응형 디자인을 적용한 프로젝트 입니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/was7894/project_1");
                      }}
                    >
                      깃허브보기
                    </button>
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("http://wa7894.dothome.co.kr/pro1_ver2/board.php");
                      }}
                    >
                      게시판보기
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
            <h1 className="title_s screen_out">ANBD 리액트 쇼핑몰 팀프로젝트</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">02</span>
                  <div className="contents_">
                    <span className="title_p">ANBD (리액트 쇼핑몰)</span>
                    <div className="capture">
                      <img className="img_site" src={p2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 프로그램</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- React, SCSS, Node.js, sqlite3</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">팀인원수 / 기여도 / 작업기간 </h5>
                      <ul>
                        <li>- 4명 / 50% / 3주 </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- SQLite3 DB생성</li>
                        <li>- NodeJs + Express 웹 서버 구축 </li>
                        <li>- NodeJs + Multer 파일 업로드 처리 </li>
                        <li>- PWA(Progressive Web Application)앱 배포</li>
                        <li>
                          - axios RESTful API에 요청을 보내고 응답을 값 파싱 및 처리
                          <br />
                          (업로드 페이지, 상세 페이지 구현, 상품결제시 soldout 처리)
                        </li>
                        <li>- 팀 대표로 프로젝트 깃허브 협업 관리 및 배포 사이트와 연동</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">느낀점</h5>
                      <ul>
                        <li>이 프로젝트는 프론트엔드 분야에서 처음으로 작업한 포트폴리오입니다. 처음이니 만큼 화면에 보여지는 것을 기준으로 하는 것이 아닌 웹 표준을 고려한 마크업 설계를 많이 고민할 수 있었고, PC와 모바일 환경에서 모두 대응할 수 있도록 반응형 디자인을 적용한 프로젝트 입니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/orgs/2ANBD/repositories");
                      }}
                    >
                      깃허브보기
                    </button>
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://drive.google.com/file/d/1o3oiigDkKaxvAlQfm5rOJlWLP0CXVlIG/view?usp=sharing");
                      }}
                    >
                      기획서보기
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://anbd.vercel.app/");
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
            <h1 className="title_s screen_out">Bootstrap YORIJORI 레시피추천사이트 프로젝트</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">03</span>
                  <div className="contents_">
                    <span className="title_p">YORIJORI (레시피 추천 사이트)</span>
                    <div className="capture">
                      <img className="img_site" src={p3} alt="project3 image" />
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 프로그램</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- HTML, SCSS, Bootstrap, Javascript </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">팀인원수 / 기여도 / 작업기간</h5>
                      <ul>
                        <li>- 5명 / 30% / 2주</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- 웹 표준을 고려한 시멘틱 마크업 설계 </li>
                        <li>- PC와 모바일 대응이 가능한 반응형 웹 적용 </li>
                        <li>- jQury, javascript 를 이용하여 각각 슬라이드 구현</li>
                        <li>- 공공데이터 api를 활용하여 기상정보 및 대기환경 정보 파싱</li>
                        <li>- 푸터 퀵 메뉴를 확인할 수 있는 모달창 노출 기능 구현</li>
                        <li>- Mysql과 연동하여 PHP 게시판 CRUD 구현 (배포서버:dothome)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">느낀점</h5>
                      <ul>
                        <li>
                          프론트엔드 첫 포트폴리오 프로젝트 입니다. <br />
                          처음이니 만큼 화면에 보여지는 것을 기준으로 하는 것이 아닌 <br />웹 표준을 고려한 마크업 설계를 많이 고민할 수 있었고, <br />
                          PC와 모바일 환경에서 모두 대응할 수 있도록 반응형 디자인을 적용한 프로젝트 입니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/kimminjung96/YORIJORI");
                      }}
                    >
                      깃허브보기
                    </button>
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://drive.google.com/file/d/1IRXlQxAo6fJxmf3fEp0DNBGyAKjgfFa6/view?usp=sharing");
                      }}
                    >
                      기획서보기
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://kimminjung96.github.io/YORIJORI/");
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
      </div>
    </div>
  );
}

export default PortFolio;

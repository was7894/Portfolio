import React, { useRef } from "react";
import "../css/PortFolio.css";
import p1 from "../images/port_gist.png";
import p21 from "../images/play_anbd.mp4";
import p3 from "../images/port_yorijori.png";
import GP from "./Grad_project";

function PortFolio() {
  const bg = useRef(null);
  const thumb = useRef(null);
  const img = useRef(null);

  const bg3 = useRef(null);
  const thumb3 = useRef(null);
  const img3 = useRef(null);

  const pro1 = { backgroundImage: `url(${p1})` };
  const pro3 = { backgroundImage: `url(${p3})` };

  function scroll() {
    const bgH = bg.current.clientHeight;
    const imgH = img.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb.current.style.top = scrollVal + "px";
    console.log(bgH, imgH, scrollVal);
  }

  function scroll3() {
    const bgH = bg3.current.clientHeight;
    const imgH = img3.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb3.current.style.top = scrollVal + "px";
    console.log(bgH, imgH, scrollVal);
  }

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
                      <div
                        ref={bg}
                        className="bg"
                        onMouseOver={() => {
                          scroll();
                        }}
                        onMouseLeave={() => {
                          thumb.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb} href="https://was7894.github.io/project_1/" target="_blank" className="thumb" rel="noreferrer">
                          <span ref={img} style={pro1}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
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
                        {/* <li>- 웹 표준을 고려한 시멘틱 마크업 설계 </li> */}
                        <li>- PC와 모바일 대응이 가능한 반응형 웹 적용 </li>
                        <li>- jQury, javascript 를 이용하여 각각 슬라이드 구현</li>
                        <li>- 푸터 퀵 메뉴를 확인할 수 있는 Non-Modal 노출 기능 구현</li>
                        <li>
                          -
                          <a href="https://analytics.google.com/analytics/web/?hl=ko&pli=1#/p346910606/reports/reportinghub?params=_u..nav%3Dmaui" target="_blank" rel="noreferrer">
                            구글 애널리틱스
                          </a>
                          적용하여 방문자의 데이터 웹 로그 분석 가능
                        </li>
                        <li>
                          -
                          <a href="https://www.data.go.kr/data/15084084/openapi.do" target="_blank" rel="noreferrer">
                            공공데이터포털
                          </a>
                          api를 활용하여 기상정보 및 대기환경 정보 파싱
                        </li>
                        <li>
                          - Mysql과 연동하여&nbsp;
                          <a href="http://wa7894.dothome.co.kr/pro1_ver2/board.php" target="_blank" rel="noreferrer">
                            PHP게시판&nbsp;
                          </a>
                          CRUD 구현
                          <a href="https://www.dothome.co.kr/" target="_blank" rel="noreferrer">
                            <i>(호스팅:dothome)</i>
                          </a>
                        </li>
                        <li>
                          -{" "}
                          <a href="http://wa7894.dothome.co.kr/pro1_ver2/login.php" target="_blank" rel="noreferrer">
                            PHP로그인/로그아웃 구현
                          </a>
                        </li>
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
                    <span className="title_p">ANBD (중고 쇼핑몰 - 리액트 풀스택)</span>
                    <div className="video_box">
                      <video className="video_anbd" src={p21} muted controls autoPlay></video>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- React, SCSS, Node.js, sqlite3</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">팀인원수 / 기여도 / 작업기간 </h5>
                      <ul>
                        <li>- 4명 / 40% / 3주 </li>
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
                          - axios RESTful API 요청을 보내고 응답 값 파싱 및 처리
                          <br />
                          (상품 업로드 페이지, 상품 상세 페이지 구현, 상품결제시 soldout 처리)
                        </li>
                        <li>
                          - 팀 대표로 프로젝트 깃허브 협업 관리 및 배포 사이트와 연동 <br />
                          (pront - vercel,&nbsp;
                          <a href="https://port-0-anbd-db-sever-6g2llfcbue07.sel3.cloudtype.app/" target="_blank" rel="noreferrer">
                            server - cloudtype
                          </a>
                          )
                        </li>
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
                      <div
                        ref={bg3}
                        className="bg"
                        onMouseOver={() => {
                          scroll3();
                        }}
                        onMouseLeave={() => {
                          thumb3.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb3} href="https://kimminjung96.github.io/YORIJORI/" target="_blank" rel="noreferrer" className="thumb">
                          <span ref={img3} style={pro3}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
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
                        <li>- 랜덤섹션 구현(javascript로 랜덤카드 출력 및 중복 출력 제어)</li>
                        <li>
                          - async/await 해외 api 활용하여 음식 영양소 및 이미지 화면 출력
                          <a href="https://www.edamam.com/" target="_blank" rel="noreferrer">
                            <i>(api : adamam)</i>
                          </a>
                        </li>
                        <li>- Bootstrap과 SCSS를 활용한 반응형 페이지 구현</li>
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
        <GP />
      </div>
    </div>
  );
}

export default PortFolio;

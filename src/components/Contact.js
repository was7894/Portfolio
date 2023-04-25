import React, { useRef } from "react";
import "../scss/Contact.scss";
import bg from "../images/img_temporary.jpg";
import paper from "../images/img_paper.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const photo = { backgroundImage: `url(${bg})` };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mgkb7kw", "template_nfiej14", form.current, "UZN4rZao8_DY7x1Aw").then(
      (result) => {
        alert("이메일 전송이 완료되었습니다. 보내주셔서 감사합니다!:)");
        console.log(result.text);
      },
      (error) => {
        alert("전송실패.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className=" section section_last" style={{ height: "55vh !important" }}>
      <div className="shape_top">
        <img src={paper} alt="paper" />
      </div>
      <div className="sec4_bg" style={photo}>
        <div className="overlay"></div>
      </div>
      <div className="txt_inner">
        <div>
          <h3>Hyeong Subscribe!</h3>
        </div>

        <div>
          <button>Contact Me!</button>
        </div>

        {/* 이메일 양식 */}
        <form ref={form} onSubmit={sendEmail} className="form_email">
          <label>보내시는분</label>
          <input type="text" name="user_name" className="input_email" required />
          <label>Email주소</label>
          <input type="email" name="user_email" className="input_email" required />
          <label>메시지</label>
          <textarea name="message" className="input_email" required />
          <input type="submit" value="보내기" className="send_email" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

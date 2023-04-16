import React from "react";
import "../scss/Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <span>Logo</span>
        </div>
        <div className="header_gnb">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Portfolio">Projects</a>
          <a href="#Contact" className="contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

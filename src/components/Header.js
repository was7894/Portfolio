import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <span>Logo</span>
        </div>
        <div>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Header;

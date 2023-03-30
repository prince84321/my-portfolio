import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Social from "./Social";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prince Kumar</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />

        <Social />

        <div className="my-pic">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;

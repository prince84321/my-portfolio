import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Social = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com/in/prince-kumar-14683766" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/prince84321" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default Social;

import React from "react";
import "./Footer.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <a href="#header">
          Chris-<span>MK34</span>
        </a>
      </div>
      <div className="social">
        <ul className="list-icons">
          <a href="#https://github.com/Kaghenimbale">
            <AiOutlineGithub className="icon" />
          </a>
          <a href="#https://www.linkedin.com/in/kagheni-mbale-401b90240/">
            <BsLinkedin className="icon" />
          </a>
          <a href="#https://twitter.com/MbaleKagheni">
            <BsTwitter className="icon" />
          </a>
          <a href="#https://www.instagram.com/kagheni_chris/">
            <BsInstagram className="icon" />
          </a>
        </ul>
      </div>

      <p>
        <span>
          <small>Chris-MK34</small>
        </span>{" "}
        @ 2023 All right are Preserved.
      </p>
    </footer>
  );
};

export default Footer;

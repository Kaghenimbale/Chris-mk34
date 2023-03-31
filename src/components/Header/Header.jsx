import React from 'react';
import './header.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { ImArrowRight2 } from 'react-icons/im';
import { CgMenuRightAlt } from 'react-icons/cg';

const Header = () => {
  return (
    <header id="header">
      <nav id="nav-bar">
        <div className="logo">
          <a href="#header">
            Chris-<span>MK34</span>
          </a>
        </div>

        <ul className="nav-links">
          <li className="navlink">Home</li>
          <li className="navlink">About Me</li>
          <li className="navlink">Projects</li>
          <li className="navlink">Contact Me</li>
          <li className="navlink">Services</li>
        </ul>

        <button className="btn">
          <a href="#cv">
            <CgMenuRightAlt className="icon-btn" />
          </a>
        </button>
      </nav>

      <div className="descriptions">
        <div className="description">
          <h1>Kagheni Chris</h1>
          <p>
            Hello, my name is Kagheni Mbale Chris. I am a front-End developer
            from the Republic Democratic of Congo. I can help you build a
            product , feature or website Look through some of my work and
            experience! If you like what you see and have a project you need
            coded, don’t hestiate to contact me.
          </p>
          <div className="explore">
            <a href="#me">Explore More</a>
            <ImArrowRight2 className="icon" />
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
          <a href="#cv" className="btn">
            Download CV
          </a>
        </div>

        <div className="experiences">
          <div className="experience-soft">
            <div className="experience">
              <h2 className="myExperience">3+</h2>
              <h2>Experience</h2>
              <p>
                I am Kagheni mbale Chris, I am a front End developer with 3
                years of Experience
              </p>
            </div>
            <div className="experience">
              <h2 className="myExperience">1k</h2>
              <h2>Customers</h2>
              <p>
                I am Kagheni mbale Chris, I am a front End developer, I have
                been working with thousands of customers
              </p>
            </div>
          </div>

          <div className="explore">
            <a href="#me">kaghenimbale@gmail.com</a>
            <ImArrowRight2 className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

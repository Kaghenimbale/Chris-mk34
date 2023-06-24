import React, { useEffect, useState } from 'react';
import './header.css';
import { ImArrowRight2 } from 'react-icons/im';
import { CgMenuRightAlt } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import chris from '../../images/chris.jpg';
import Social from '../common/Social';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const navList = ['Home', 'Services', 'Projects', 'About', 'Contact'];
  const [nav, setNavBar] = useState(true);

  const renderNavBar = () => (nav ? setNavBar(false) : setNavBar(true));

  nav
    ? (document.body.style.overflow = 'scroll')
    : (document.body.style.overflow = 'hidden');

  return (
    <header id="header">
      <nav id="nav-bar">
        <div className="logo">
          <Link to="#header" smooth>
            Chris-<span>MK34</span>
          </Link>
        </div>

        <div className={nav ? 'navLists' : ''}>
          <ul className="nav-links">
            <button className="close btn" onClick={renderNavBar}>
              <AiOutlineClose className="closeIcon" />
            </button>
            {navList.map((list) => {
              return (
                <li
                  className="navLink"
                  key={list}
                  onClick={() => setNavBar(true)}
                >
                  <Link
                    to={`#${
                      list.toLowerCase() === 'home'
                        ? 'header'
                        : list.toLowerCase()
                    }`}
                    smooth
                  >
                    {list}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="btn menuBtn" onClick={renderNavBar}>
          <a href="#cv">
            <CgMenuRightAlt className="icon-btn" />
          </a>
        </button>
      </nav>

      <div className="container">
        <div className="descriptions">
          <div className="description">
            <h1>Kagheni Chris</h1>
            <p data-aos="zoom-in-right">
              Hello, my name is Kagheni Mbale Chris. I am a front-End developer
              from the Republic Democratic of Congo. I can help you build a
              product , feature or website Look through some of my work and
              experience! If you like what you see and have a project you need
              coded, don’t hesitate to contact me.
            </p>
            <div className="explore">
              <a href="#me">Explore More</a>
              <ImArrowRight2 className="icon" />
            </div>

            <Social data-aos="zoom-in" />
            <a
              href="https://drive.google.com/file/d/1lF5mlWIgQE6glZKFM5jwYoS018vINSiw/view?usp=sharing"
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="experiences">
            <div className="experience-soft">
              <div className="experience" data-aos="zoom-in">
                <h2 className="myExperience">3+</h2>
                <h2>Experience</h2>
                <p>
                  I am Kagheni mbale Chris, I am a front End developer with 3
                  years of Experience
                </p>
              </div>
              <div className="experience" data-aos="zoom-in">
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
        <div className="box" data-aos="zoom-in">
          <div className="profile">
            <img src={chris} alt="chris" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

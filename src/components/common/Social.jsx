import React, { useEffect } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Social = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="social" data-aos="zoom-in">
        <ul className="list-icons">
          <a
            href="https://github.com/Kaghenimbale"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kagheni-mbale-401b90240/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icon" />
          </a>
          <a
            href="https://twitter.com/MbaleKagheni"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/kagheni_chris/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="icon" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Social;

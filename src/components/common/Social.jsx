import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Social = () => {
  return (
    <div>
      <div className="social">
        <ul className="list-icons">
          <a href="https://github.com/Kaghenimbale">
            <AiOutlineGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/kagheni-mbale-401b90240/">
            <BsLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/MbaleKagheni">
            <BsTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/kagheni_chris/">
            <BsInstagram className="icon" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Social;

import React from 'react';
import './Services.css';
import { SlScreenDesktop } from 'react-icons/sl';
import { SiAdminer } from 'react-icons/si';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { TbNetwork } from 'react-icons/tb';

const Services = () => {
  return (
    <section id="services">
      <h2>MY SERVICES</h2>
      <p>What I Do</p>

      <div className="services-container">
        <div className="service">
          <SlScreenDesktop className="icon" />
          <h3>Web Development</h3>
          <p>
            If you like what you see and have a project you need coded, don’t
            hestiate to contact me
          </p>
        </div>

        <div className="service">
          <SiAdminer className="icon" />
          <h3>Server Administration</h3>
          <p>
            Installation and configuration of Windows Server Network
            Administration (ADDS, DNS, Group Policy, Application installation,
            and System installation)..
          </p>
        </div>

        <div className="service">
          <RiCodeSSlashFill className="icon" />
          <h3>Website Design</h3>
          <p>
            I can help you design a website that will help you to improve user
            experiences with the serices provided.
          </p>
        </div>

        <div className="service">
          <TbNetwork className="icon" />
          <h3>Network Installation</h3>
          <p>Installation and configuration of PAN, LAN, MAN, WAN Network.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

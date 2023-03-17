import React from 'react'
import './Services.css'
import {SlScreenDesktop} from 'react-icons/sl';
import {SiAdminer} from 'react-icons/si';
import {RiCodeSSlashFill} from 'react-icons/ri';
import {TbNetwork} from 'react-icons/tb';

const Services = () => {
  return (
    <section id='services'>
        <h2>MY SERVICES</h2>
        <p>What I Do</p>

        <div className="services-container">
            <div className="service">
                <SlScreenDesktop className='icon'/>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et sit quae esse, nobis quam temporibus sequi natus enim voluptatum!</p>
            </div>

            <div className="service">
                <SiAdminer className='icon'/>
                <h3>Server Administration</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et sit quae esse, nobis quam temporibus sequi natus enim voluptatum!</p>
            </div>

            <div className="service">
                <RiCodeSSlashFill className='icon'/>
                <h3>Website Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et sit quae esse, nobis quam temporibus sequi natus enim voluptatum!</p>
            </div>

            <div className="service">
                <TbNetwork className='icon'/>
                <h3>Network Installation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et sit quae esse, nobis quam temporibus sequi natus enim voluptatum!</p>
            </div>
        </div>
    </section>
  )
}

export default Services
import { useEffect } from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="about">
      <h2>Years of Experience</h2>
      <p>My Resume</p>

      <div className="resume">
        <div className="job" data-aos="zoom-in">
          <h3>Job Experience</h3>
          <p>2018 - 2023</p>

          <div className="cards">
            <div className="card">
              <div className="card-1">
                <h4>Electrical Engineer</h4>
                <span>Prestech Sarl</span>
              </div>
              <p>
                Conducted electrical installations, including wiring, fixtures,
                switches, and circuit breakers,... Performed routine maintenance
                and repairs on electrical systems. Troubleshot electrical
                problems.
              </p>
            </div>

            <div className="card">
              <div className="card-1">
                <h4>Web Development</h4>
                <span>Fidba Graphic</span>
              </div>
              <p>
                Build website in front-end web development (including HTML, CSS,
                JavaScript, React, Git, and DS&A challenges) while building
                multiple front-end projects both independently and via pair
                programming.
              </p>
            </div>
          </div>
        </div>
        <div className="education job" data-aos="zoom-in">
          <h3>Education Experience</h3>
          <p>2010 - 2022</p>

          <div className="cards">
            <div className="card">
              <div className="card-1">
                <h4>Bachelor in Network and Telecom(2021)</h4>
                <span>International University of Equator</span>
              </div>
              <p>
                Developed Windows Server Network Administration projects that
                provided solutions to problems in network management (ADDS, DNS,
                Group Policy, Application installation, and System
                installation)...
              </p>
            </div>

            <div className="card">
              <div className="card-1">
                <h4>Bachelor in Electricity(2018)</h4>
                <span>I.T.Kyeshero</span>
              </div>
              <p>
                Spend 4 years studying and pacticing electrical installation
                both in Domestic and Industrial Electrical Installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

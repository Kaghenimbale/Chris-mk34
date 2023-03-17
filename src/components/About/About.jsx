import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2>Years of Experience</h2>
      <p>My Resume</p>

      <div className="resume">
        <div className="job">
          <h3>Job Experience</h3>
          <p>2010 - 2022</p>

          <div className="cards">
            <div className="card">
              <div className="card-1">
                <h4>Electrical Engineer</h4>
                <span>Prestech Sarl</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                aliquam adipisci non distinctio! Earum alias quisquam sequi,
                tenetur repudiandae dignissimos?
              </p>
            </div>

            <div className="card">
              <div className="card-1">
                <h4>Web Development</h4>
                <span>Fidba Graphic</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                aliquam adipisci non distinctio! Earum alias quisquam sequi,
                tenetur repudiandae dignissimos?
              </p>
            </div>
          </div>
        </div>
        <div className="education job">
          <h3>Education Experience</h3>
          <p>2010 - 2022</p>

          <div className="cards">
            <div className="card">
              <div className="card-1">
                <h4>Bachelor in Network and Telecom(2021)</h4>
                <span>International University of Equator</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                aliquam adipisci non distinctio! Earum alias quisquam sequi,
                tenetur repudiandae dignissimos?
              </p>
            </div>

            <div className="card">
              <div className="card-1">
                <h4>Bachelor in Electricity(2018)</h4>
                <span>I.T.Kyeshero</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                aliquam adipisci non distinctio! Earum alias quisquam sequi,
                tenetur repudiandae dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

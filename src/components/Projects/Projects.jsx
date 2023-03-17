import React from "react";
import "./Projects.css";
import img1 from "../../images/img1.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Recents Works</p>

      <div className="myprojects">
        <div className="project">
          <div className="project-image">
            <img src={img1} alt="Project1" />
          </div>

          <div className="project-description">
            <div className="description-1">
              <h3>National Events</h3>

              <div className="languages">
                <p>React</p>
                <p>CSS</p>
              </div>
            </div>
            <div className="description-2">
              <div className="second">
                {/* <h4>Design by Chris</h4> */}
                <p>Web App</p>
              </div>
              <button className="btn" href="me">
                <span>View More</span>
              </button>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={img1} alt="Project1" />
          </div>

          <div className="project-description">
            <div className="description-1">
              <h3>Awesome Books</h3>

              <div className="languages">
                <p>Html</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
            </div>
            <div className="description-2">
              <div className="second">
                {/* <h4>Design by Chris</h4> */}
                <p>Web App</p>
              </div>
              <button className="btn" href="me">
                <span>View More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './Projects.css';
import bookstore from '../../images/img1.png';
import festival from '../../images/Festival.png';
import jsportfolio from '../../images/JsPortfolio.png';
import reacttodo from '../../images/ReactTodoList.png';
import jstodo from '../../images/VanillaJsTodoList.png';

const Projects = () => {
  const projects = [
    {
      title: 'BookStore',
      technologies: ['React', 'CSS', 'CRA'],
      type: 'Web Application',
      image: `${bookstore}`,
      source: 'https://github.com/Kaghenimbale/bookstore-app.git',
      liveDemo: 'https://visionary-daifuku-3ba202.netlify.app',
    },
    {
      title: 'JS TodoList',
      technologies: ['Html', 'CSS', 'JavaScript'],
      image: `${jstodo}`,
      type: 'Web Application',
      source: 'https://github.com/Kaghenimbale/To-Do-List-app.git',
      liveDemo: 'https://aesthetic-sunburst-db7cb6.netlify.app/',
    },
    {
      title: 'React TodoList',
      technologies: ['React', 'CSS', 'Vite'],
      image: `${reacttodo}`,
      type: 'Web Application',
      source: 'https://github.com/Kaghenimbale/Todo-list-App.git',
      liveDemo: 'https://gleeful-brigadeiros-299542.netlify.app/',
    },
    {
      title: 'Amani Festival',
      technologies: ['Html', 'CSS', 'JavaScript'],
      image: `${festival}`,
      type: 'Web Application',
      source: 'https://github.com/Kaghenimbale/Capstone-project.git',
      liveDemo: 'https://kaghenimbale.github.io/Capstone-project/',
    },
    {
      title: 'Javascript Portfolio',
      technologies: ['Html', 'CSS', 'JavaScript'],
      image: `${jsportfolio}`,
      type: 'Web Application',
      source: 'https://github.com/Kaghenimbale/my-portfolio.git',
      liveDemo: 'https://kaghenimbale.github.io/my-portfolio/',
    },
  ];
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Recents Works</p>

      <div className="myprojects">
        {projects.map((item) => {
          return (
            <div className="project">
              <div className="project-image">
                <img src={item.image} alt="Project1" />
              </div>

              <div className="project-description">
                <div className="description-1">
                  <h3>{item.title}</h3>

                  <div className="languages">
                    <p>{item.technologies[0]}</p>
                    <p>{item.technologies[1]}</p>
                    <p>{item.technologies[2]}</p>
                  </div>
                </div>
                <div className="description-2">
                  <div className="second">
                    <p>{item.type}</p>
                  </div>
                  <button className="btn" href="me">
                    <span>View More</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

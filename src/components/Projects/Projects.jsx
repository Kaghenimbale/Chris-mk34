import React, { useState } from 'react';
import './Projects.css';
import bookstore from '../../images/bookstore.png';
import festival from '../../images/Festival.png';
import jsportfolio from '../../images/JsPortfolio.png';
import reacttodo from '../../images/ReactTodoList.png';
import jstodo from '../../images/VanillaJsTodoList.png';
import ProjectDetail from './ProjectDetail';

export const projects = [
  {
    id: 1,
    title: 'BookStore',
    technologies: ['React', 'CSS', 'CRA'],
    type: 'Web Application',
    image: `${bookstore}`,
    source: 'https://github.com/Kaghenimbale/bookstore-app.git',
    liveDemo: 'https://visionary-daifuku-3ba202.netlify.app',
  },
  {
    id: 2,
    title: 'JS TodoList',
    technologies: ['Html', 'CSS', 'JavaScript'],
    image: `${jstodo}`,
    type: 'Web Application',
    source: 'https://github.com/Kaghenimbale/To-Do-List-app.git',
    liveDemo: 'https://aesthetic-sunburst-db7cb6.netlify.app/',
  },
  {
    id: 3,
    title: 'React TodoList',
    technologies: ['React', 'CSS', 'Vite'],
    image: `${reacttodo}`,
    type: 'Web Application',
    source: 'https://github.com/Kaghenimbale/Todo-list-App.git',
    liveDemo: 'https://gleeful-brigadeiros-299542.netlify.app/',
  },
  {
    id: 4,
    title: 'Amani Festival',
    technologies: ['Html', 'CSS', 'JavaScript'],
    image: `${festival}`,
    type: 'Web Application',
    source: 'https://github.com/Kaghenimbale/Capstone-project.git',
    liveDemo: 'https://kaghenimbale.github.io/Capstone-project/',
  },
  {
    id: 5,
    title: 'Javascript Portfolio',
    technologies: ['Html', 'CSS', 'JavaScript'],
    image: `${jsportfolio}`,
    type: 'Web Application',
    source: 'https://github.com/Kaghenimbale/my-portfolio.git',
    liveDemo: 'https://kaghenimbale.github.io/my-portfolio/',
  },
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Recents Works</p>

      <div className="myprojects">
        {projects.map((item) => {
          return (
            <div className="project" key={item.id}>
              <div className="project-image">
                <img src={item.image} alt="Project1" />
              </div>

              <div className="project-description">
                <h3>{item.title}</h3>
                <div className="description-1">
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
                  <button
                    className="btn"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <span>View More</span>
                  </button>
                  {isOpen && (
                    <ProjectDetail closeModal={setIsOpen} currentItem={item} />
                  )}
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

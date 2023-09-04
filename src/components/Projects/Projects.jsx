import { useEffect, useState } from 'react';
import './Projects.css';
import bookstore from '../../images/bookstore.png';
import festival from '../../images/Festival.png';
import jsportfolio from '../../images/JsPortfolio.png';
import reacttodo from '../../images/ReactTodoList.png';
import jstodo from '../../images/VanillaJsTodoList.png';
import livescore from '../../images/livescore.png';
import ProjectDetail from './ProjectDetail';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
  {
    id: 6,
    title: 'Football LiveScore',
    technologies: ['React', 'CSS', 'Redux'],
    image: `${livescore}`,
    type: 'Web Application',
    source: 'https://github.com/Kaghenimbale/metrics-webapp.git',
    liveDemo: 'https://mylivescorefoot.netlify.app/',
  },
];

const Projects = () => {
  const [numCardsPerSlide, setNumCardsPerSlide] = useState(4);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    Aos.init();
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumCardsPerSlide(1);
      } else if (window.innerWidth > 768 && window.innerWidth < 900) {
        setNumCardsPerSlide(2);
      } else if (window.innerWidth > 1156) {
        setNumCardsPerSlide(3);
      } else {
        setNumCardsPerSlide(4);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleClick = (itemId) => {
    setIsOpen(!isOpen);
    setId(itemId);
  };

  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'scroll');

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Recents Works</p>

      <div className="myprojects">
        <div className="btnarrows">
          <button
            className="arrow-btn"
            onClick={() =>
              setSlide((prevSlide) =>
                prevSlide === 0 ? projects.length - 3 : prevSlide - 1,
              )
            }
          >
            <FaChevronLeft className="arrow" />
          </button>
          <button
            className="arrow-btn"
            onClick={() =>
              setSlide((prevSlide) =>
                prevSlide === projects.length - 3 ? 0 : prevSlide + 1,
              )
            }
          >
            <FaChevronRight className="arrow" />
          </button>
        </div>
        {projects.slice(slide, slide + numCardsPerSlide).map((item) => {
          return (
            <div className="project" data-aos="zoom-in" key={item.id}>
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
                    onClick={() => handleClick(item.id)}
                    data-isopen={isOpen}
                    data-id={id}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {isOpen && (
          <ProjectDetail id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </section>
  );
};

export default Projects;

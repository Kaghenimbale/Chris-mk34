import './Projects.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { projects } from './Projects';

const ProjectDetail = (Props) => {
  const modalItem = projects.filter((item) => item.id === Props.id);
  return (
    <div className="popup">
      <button className="btn" onClick={() => Props.setIsOpen(false)}>
        x
      </button>
      <div>
        <div>
          {modalItem.map((item) => {
            return (
              <div key={item.id}>
                <div className="modalImage">
                  <img src={item.image} alt="PopUpImage" />
                </div>
                <div className="modalContent">
                  <h2>{item.title}</h2>
                  <div className="languages">
                    <p className="techModal">{item.technologies[0]}</p>
                    <p className="techModal">{item.technologies[1]}</p>
                    <p className="techModal">{item.technologies[2]}</p>
                  </div>
                  <div className="btn-container">
                    <a
                      href={item.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="buttonModal"
                    >
                      Live Demo
                    </a>
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      className="buttonModal"
                    >
                      <AiOutlineGithub className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

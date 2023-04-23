import React from 'react';
import './Projects.css';

const ProjectDetail = ({ closeModal }) => {
  //   console.log(closeModal);
  return (
    <div className="popup">
      <button className="btn" onClick={() => closeModal(false)}>
        x
      </button>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectDetail;

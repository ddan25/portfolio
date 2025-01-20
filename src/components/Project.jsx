// src/components/Project.jsx
import React from 'react';

const Project = ({ title, description, image, link }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default Project;

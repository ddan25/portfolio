// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'Description of project 1', link: 'https://github.com/your-username/project1' },
    { title: 'Project 2', description: 'Description of project 2', link: 'https://github.com/your-username/project2' },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

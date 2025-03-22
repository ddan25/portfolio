import React, { useState } from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Book Search', description: 'Search for books', link: 'https://github.com/ddan25/bookSearch' },
    { title: 'Candidate Search', description: 'Search github for candidates', link: 'https://github.com/ddan25/candidateSearch' },
    { title: 'Weather Dashboard', description: 'Look up the weather in your city', link: 'https://github.com/ddan25/Weather-Dashboard' },
    { title: 'Kanban', description: 'Assign tasks to team members and mark as in progress or completed', link: 'https://github.com/ddan25/kanban' },
    { title: 'Vinyl Vault', description: 'Music search and comment', link: 'https://github.com/larimae/vinyl-vault' },
    { title: 'RestStar', description: 'Restaurant POS system with invoice', link: 'https://github.com/khorimoore/RestStar' },
    // Add more projects here
  ];

  // States to track hover effects for each card and button
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  // Inline styles for the components
  const containerStyle = {
    padding: '40px',
    textAlign: 'center',
  };

  const projectCardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = (isHovered) => ({
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: isHovered ? '0 10px 15px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-10px)' : 'none', // Hover effect only on hovered card
  });

  const headingStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1em',
    marginBottom: '15px',
    color: '#555',
  };

  const buttonStyle = (isHovered) => ({
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: isHovered ? '#0056b3' : '#007bff', // Only change color on hovered button
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  });

  return (
    <section id="projects" style={containerStyle}>
      <h2>Coding Projects</h2>
      <div style={projectCardsContainerStyle}>
        {projectList.map((project, index) => (
          <div
            key={index}
            style={cardStyle(index === hoveredIndex)} // Apply hover styles only to hovered card
            onMouseEnter={() => setHoveredIndex(index)} // Track hover for this card
            onMouseLeave={() => setHoveredIndex(null)}  // Reset hover for this card
          >
            <h3 style={headingStyle}>{project.title}</h3>
            <p style={paragraphStyle}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle(index === hoveredButtonIndex)} // Apply hover styles only to hovered button
              onMouseEnter={() => setHoveredButtonIndex(index)} // Track hover for this button
              onMouseLeave={() => setHoveredButtonIndex(null)}  // Reset hover for this button
            >
              View Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

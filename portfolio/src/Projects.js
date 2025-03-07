import React from 'react';
import './Projects.css'; // For styling

// Import project screenshots (PNG files)
import project1Image from './screenshots/project1.png';
import project2Image from './screenshots/project2.png';
import project3Image from './screenshots/project3.png';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A web application built with React and Node.js.',
      image: project1Image,
      githubLink: 'https://github.com/your-username/project1', // Replace with your GitHub repo link
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A custom text editor developed in C++.',
      image: project2Image,
      githubLink: 'https://github.com/your-username/project2', // Replace with your GitHub repo link
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A neural network for chatbot training in C++.',
      image: project3Image,
      githubLink: 'https://github.com/your-username/project3', // Replace with your GitHub repo link
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import './style/Skills.css'; // For styling and animations

// Import technology logos (PNG files)
import jsLogo from './logos/js.png';
import nodeLogo from './logos/node.png';
import reactLogo from './logos/react.png';
import pythonLogo from './logos/python.png';
import cppLogo from './logos/cpp.png';
import htmlLogo from './logos/html.png';
import cssLogo from './logos/css.png';
import gitLogo from './logos/git.png';

export const Technologies = () => {
  const technologies = [
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Git', logo: gitLogo },
  ];

  return (
    <div className="technologies-container">
      <div className="technologies-slider">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
        {/* Duplicate the list for seamless looping */}
        {technologies.map((tech, index) => (
          <div key={`${index}-duplicate`} className="tech-item">
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
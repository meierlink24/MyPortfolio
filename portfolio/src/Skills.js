import React from 'react';
import './style/Skills.css'; 

// Import technology logos (PNG files)
import jsLogo from './logos/js.png';
import nodeLogo from './logos/Node.js.png';
import reactLogo from './logos/react.png';
import cLogo from './logos/C.png';
import cppLogo from './logos/c++.png';
import htmlLogo from './logos/html.png';
import cssLogo from './logos/css.png';
import gitLogo from './logos/git.png';

export const Technologies = () => {
  const technologies = [
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'React', logo: reactLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'C', logo: cLogo },
    { name: 'C++', logo: cppLogo },
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
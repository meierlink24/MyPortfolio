import React, { useState, useEffect } from 'react';
import './style/Nav.css'; 

export const HorizontalNavBar = () => {
  return (
    <nav className="horizontal-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export const NavHamburgerMenu = ({ screenSize }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <button id="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <nav className="vertical-nav">
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export const Nav = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = screenSize <= 768; // Adjust the breakpoint as needed

  return (
    <div>
      {isMobile ? <NavHamburgerMenu screenSize={screenSize} /> : <HorizontalNavBar />}
    </div>
  );
};
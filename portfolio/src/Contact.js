import React from 'react';
import './Contact.css'; // For styling

// Import logos (PNG files)
import linkedinLogo from './logos/linkedin.png';
import gmailLogo from './logos/gmail.png';
import githubLogo from './logos/github.png';
import instagramLogo from './logos/instagram.png';

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:your-email@example.com'; // Replace with your email
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-logos">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/your-github-username" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile" // Replace with your Instagram profile
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <button onClick={handleEmailClick} className="email-button">
          <img src={gmailLogo} alt="Gmail" />
        </button>
      </div>
    </div>
  );
};
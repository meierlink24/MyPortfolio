import React from 'react';
import './style/Home.css'; 

const Home = () => {
  const handleDownloadCV = () => {
    // Check if CV is already stored in local storage
    const cvUrl = localStorage.getItem('cvUrl');

    if (cvUrl) {
      // If CV is stored, trigger download
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Stefan_Stevanovic_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If CV is not stored, fetch it and store it in local storage
      fetch('./cv.pdf') // Replace with the actual path to your CV
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          localStorage.setItem('cvUrl', url); // Store the CV URL in local storage
          const link = document.createElement('a');
          link.href = url;
          link.download = 'cv.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error('Error downloading CV:', error);
        });
    }
  };

  return (
    <div className="home">
      <h1>Stefan Stevanović</h1>
      <p className="subtitle">Aspiring Computer Scientist | Software Developer</p>

      <div className="section">
        <h2>Front-End Development</h2>
        <p>
          I have developed multiple web pages and e-commerce sites using React and Node.js as part of freelance projects. My work includes building clean, responsive, and efficient user interfaces with a focus on performance and user experience.
        </p>
      </div>

      <div className="section">
        <h2>Low-Level Programming</h2>
        <p>
          I have experience in low-level programming, including developing a custom text editor in C++ with advanced text manipulation and file handling capabilities. I am also building my own kernel and exploring bootloader development. Additionally, I have worked on a PDF-to-XML conversion tool and a C++ neural network for chatbot training. My work focuses on performance optimization, memory management, and system-level programming.
        </p>
      </div>

      <button className="download-btn" onClick={handleDownloadCV}>
        Download CV
      </button>
    </div>
  );
};

export default Home;
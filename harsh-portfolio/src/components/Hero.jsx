import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import profileImage from '../assets/formal2.jpeg';

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCvOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="profile-container">
              <div className="profile-circle">
                <img 
                  src={profileImage} 
                  alt="Harsh Kumar" 
                  className="profile-image"
                />
                <div className="profile-ring"></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Harsh Kumar</span>
              <span className="title">Full Stack Developer</span>
            </h1>

            <p className="hero-subtitle">
              Crafting digital experiences with modern technologies and creative solutions
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              
              {/* Download CV Button with Dropdown */}
              <div className="cv-dropdown" ref={dropdownRef}>
                <button
                  className="btn btn-downloadcv"
                  onClick={() => setCvOpen(open => !open)}
                  type="button"
                >
                  Download CV ▼
                </button>
                {cvOpen && (
                  <div className="cv-dropdown-menu">
                    <a
                      href="/Harsh_Kumar_CV.pdf"
                      download="Harsh_Kumar_CV.pdf"
                      className="cv-download-option"
                    >
                      📄 CV – Main
                    </a>
                    <a
                      href="/Harsh_Kumar_CV2.pdf"
                      download="Harsh_Kumar_CV2.pdf"
                      className="cv-download-option"
                    >
                      📄 CV – 2
                    </a>
                  </div>
                )}
              </div>
              {/* End Download CV Dropdown */}
            </div>

            <div className="social-links">
              <a href="mailto:harsh832019@gmail.com" className="social-link" title="Email">
                {/* Email SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#EA4335" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.6l7.03 6.72a1.01 1.01 0 001.41 0L20 8.4V18H4z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harsh-kumar555125/" className="social-link" title="LinkedIn">
                {/* LinkedIn SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97s2.98-1.34 2.98-2.97C7.96 4.84 6.62 3.5 4.98 3.5zM3 8.97h3.96v11.54H3V8.97zM9.17 8.97h3.8v1.57h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.42 4.75 5.57v6.35h-3.96v-5.62c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.71H9.17V8.97z"/>
                </svg>
              </a>
              <a href="https://github.com/SkY-DyNamiC" className="social-link" title="GitHub">
                {/* GitHub SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5c-6.6 0-12 5.33-12 12 0 5.3 3.43 9.8 8.18 11.38.6.11.82-.26.82-.58 0-.29-.01-1.03-.02-2.03-3.34.73-4.04-1.6-4.04-1.6-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.78.42-1.33.76-1.63-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.13 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.21 0 1.59-.02 2.87-.02 3.25 0 .32.21.7.82.58C20.57 22.3 24 17.8 24 12.5c0-6.67-5.4-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

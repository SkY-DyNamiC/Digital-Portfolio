import React from 'react';
import './Hero.css';
import profileImage from '../assets/formal2.jpeg';
const Hero = () => {
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
            </div>
            
            <div className="social-links">
              <a href="harsh832019@gmail.com" className="social-link" title="Email">
                ✉️
              </a>
              <a href="https://www.linkedin.com/in/harsh-kumar555125/" className="social-link" title="LinkedIn">
                💼
              </a>
              <a href="https://github.com/SkY-DyNamiC" className="social-link" title="GitHub">
                🐙
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
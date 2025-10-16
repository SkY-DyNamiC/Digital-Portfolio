import React, { useState } from 'react';
import './Projects.css';
import screenshot from '../assets/Screenshot (90).png'
import hawa from '../assets/hawa.png'
import certi from '../assets/certificate.png'
import skymusic from '../assets/Screenshot 2025-10-06 020928.jpg'

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: ' GameZone 🎮',
      category: 'website',
      description: 'It’s designed as a gaming hub where users can explore, search, and manage game listings with a smooth and dynamic interface.',
      tech: ['Node.js', 'Express.js','MongoDB', 'JavaScript'],
      duration: 'March 2025 - April 2025',
      features: [
        'Built with Node.js & Express.js for backend logic',
        'MongoDB for storing and managing game data',
        'Full CRUD functionality (Add, Update, Delete games)',
        'Secure User Authentication'
      ],
      image: screenshot,
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Certificate Generator',
      category: 'automation',
      description: 'Dynamic and automated certificate generator for efficient certificate creation and distribution.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      duration: 'Mar 2024 - Apr 2024',
      features: [
        'Dynamic certificate template creation',
        'Automated bulk certificate generation',
        'PDF export functionality',
        'Custom branding and styling options'
      ],
      image: certi,
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Incredible India - Tour & Travel',
      category: 'website',
      description: 'Comprehensive travel website for India tours with personalized itineraries and travel packages.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      duration: 'Dec 2023 - Jan 2024',
      features: [
        'Interactive destination explorer',
        'Customizable travel packages',
        'Booking management system',
        'Travel guide and recommendations'
      ],
      image: hawa,
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'SkyMusic 🎵',
      category: 'Application',
      description: 'SkyMusic is a modern mobile music application designed to provide users with a seamless and immersive listening experience.',
      tech: ['Ionic Framework', 'HTML5', 'Bootstrap5', 'SCSS', 'TypeScript'],
      duration: 'Oct 2024 - Nov 2024',
      features: [
        'Create and manage custom playlists',
        'Album and track detail views',
        'Subscription system for premium features',
        'Cross-platform support for Android and iOS',
        'Responsive and futuristic UI design'
      ],
      image: skymusic,
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🌟' },
    { key: 'website', label: 'Websites', icon: '🌐' },
    { key: 'automation', label: 'Automation', icon: '🤖' },
    { key: 'Application', label: 'Application', icon: '♫' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-label">{category.label}</span>
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <span>GitHub</span>
                      <div className="link-icon">🐙</div>
                    </a>
                    <a href={project.demo} className="project-link">
                      <span>Live Demo</span>
                      <div className="link-icon">🚀</div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and code samples</p>
          <a href="https://github.com/SkY-DyNamiC" className="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
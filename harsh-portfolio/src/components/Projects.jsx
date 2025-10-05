import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Fashion Factory',
      category: 'website',
      description: 'A user-friendly fashion e-commerce website for seamless online shopping of clothes and fashion products.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      duration: 'Oct 2024 - Nov 2024',
      features: [
        'Responsive design for all devices',
        'Product catalog with search functionality',
        'Shopping cart and checkout system',
        'User authentication and profiles'
      ],
      image: 'https://via.placeholder.com/400x250/0080ff/ffffff?text=Fashion+Factory',
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
      image: 'https://via.placeholder.com/400x250/00d4ff/ffffff?text=Certificate+Generator',
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
      image: 'https://via.placeholder.com/400x250/1e90ff/ffffff?text=Incredible+India',
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🌟' },
    { key: 'website', label: 'Websites', icon: '🌐' },
    { key: 'automation', label: 'Automation', icon: '🤖' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
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
          <a href="https://github.com/harsh" className="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
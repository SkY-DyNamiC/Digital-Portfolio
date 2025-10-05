import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3 className="about-subtitle">Who I Am</h3>
              <p>
                I'm Harsh Kumar, a passionate Full Stack Developer from Patna, Bihar, currently pursuing 
                my Computer Application degree at Lovely Professional University, Punjab. With a strong 
                foundation in modern web technologies and a keen eye for user experience, I create 
                digital solutions that make a difference.
              </p>
              
              <p>
                My journey in technology began with curiosity and has evolved into expertise across 
                multiple programming languages and frameworks. I specialize in creating responsive, 
                user-friendly web applications that combine functionality with aesthetic appeal.
              </p>
              
              <p>
                I believe in continuous learning and staying updated with the latest technological 
                trends. My experience ranges from front-end development with React and modern CSS 
                frameworks to back-end development with Node.js, always focusing on creating 
                seamless user experiences.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card floating">
              <div className="stat-icon">🎓</div>
              <div className="stat-info">
                <h4>Education</h4>
                <p>Computer Application</p>
                <span>CGPA: 7.60</span>
              </div>
            </div>
            
            <div className="stat-card floating">
              <div className="stat-icon">💼</div>
              <div className="stat-info">
                <h4>Experience</h4>
                <p>Full Stack Developer</p>
                <span>2+ Years</span>
              </div>
            </div>
            
            <div className="stat-card floating">
              <div className="stat-icon">🚀</div>
              <div className="stat-info">
                <h4>Projects</h4>
                <p>Completed</p>
                <span>15+</span>
              </div>
            </div>
            
            <div className="stat-card floating">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h4>Certifications</h4>
                <p>Professional</p>
                <span>5+</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills-preview">
          <h3 className="skills-title">Core Competencies</h3>
          <div className="skills-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">HTML5/CSS3</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
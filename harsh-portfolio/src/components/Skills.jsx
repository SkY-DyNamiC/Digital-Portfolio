import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillsData = {
    languages: [
      { name: 'JavaScript', level: 90, icon: '🟨', color: '#F7E018' },
      { name: 'Python', level: 85, icon: '🐍', color: '#3776AB' },
      { name: 'Java', level: 80, icon: '☕', color: '#DE8C07' },
      { name: 'C++', level: 75, icon: '⚡', color: '#00589C' },
      { name: 'C', level: 70, icon: '🔧', color: '#4D4D4D' }
    ],
    frontend: [
      { name: 'React.js', level: 90, icon: '⚛️', color: '#61DAFB' },
      { name: 'HTML5', level: 95, icon: '🌐', color: '#E44D26' },
      { name: 'CSS3', level: 90, icon: '🎨', color: '#264DE4' },
      { name: 'Bootstrap', level: 85, icon: '🥾', color: '#7952B3' },
      { name: 'Tailwind CSS', level: 88, icon: '💨', color: '#38BDF8' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢', color: '#68A063' },
      { name: 'Express.js', level: 80, icon: '🚀', color: '#23272A' },
      { name: 'RESTful APIs', level: 85, icon: '🔗', color: '#00A894' },
      { name: 'Database Design', level: 75, icon: '🗄️', color: '#F5841F' }
    ],
    tools: [
      { name: 'GitHub', level: 90, icon: '🐙', color: '#181717' },
      { name: 'Git', level: 88, icon: '📝', color: '#F1502F' },
      { name: 'Linux', level: 75, icon: '🐧', color: '#FCC624' },
      { name: 'Windows', level: 85, icon: '🪟', color: '#00ADEF' },
      { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC' }
    ]
  };

  const categories = [
    { key: 'languages', label: 'Programming Languages', icon: '💻' },
    { key: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️' },
    { key: 'tools', label: 'Tools & Platforms', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title glowing">Skills & Technologies <span className="shine"></span></h2>
        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card animated-card"
              style={{
                animationDelay: `${index * 0.16}s`,
                "--card-color": skill.color
              }}
            >
              <div className="skill-header">
                <span className="skill-icon floating">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-progress">
                <div className="progress-bar" style={{background: `linear-gradient(90deg, var(--card-color) 70%, #667eea 100%)`}}>
                  <div
                    className="progress-fill shine-on-hover"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, var(--card-color) 50%, #fff 100%)`
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="soft-skills">
          <h3 className="soft-skills-title gradient-text">Soft Skills</h3>
          <div className="soft-skills-grid">
            <div className="soft-skill-item pop">
              <div className="soft-skill-icon floating">🎯</div>
              <h4>Leadership</h4>
              <p>Leading teams and projects with vision and clarity</p>
            </div>
            <div className="soft-skill-item pop">
              <div className="soft-skill-icon floating">🧠</div>
              <h4>Problem-solving</h4>
              <p>Creative solutions to complex technical challenges</p>
            </div>
            <div className="soft-skill-item pop">
              <div className="soft-skill-icon floating">🔄</div>
              <h4>Adaptability</h4>
              <p>Quick learning and adaptation to new technologies</p>
            </div>
            <div className="soft-skill-item pop">
              <div className="soft-skill-icon floating">💬</div>
              <h4>Communication</h4>
              <p>Clear communication with teams and stakeholders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillsData = {
    languages: [
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'C++', level: 75, icon: '⚡' },
      { name: 'C', level: 70, icon: '🔧' }
    ],
    frontend: [
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'Bootstrap', level: 85, icon: '🥾' },
      { name: 'Tailwind CSS', level: 88, icon: '💨' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚀' },
      { name: 'RESTful APIs', level: 85, icon: '🔗' },
      { name: 'Database Design', level: 75, icon: '🗄️' }
    ],
    tools: [
      { name: 'GitHub', level: 90, icon: '🐙' },
      { name: 'Git', level: 88, icon: '📝' },
      { name: 'Linux', level: 75, icon: '🐧' },
      { name: 'Windows', level: 85, icon: '🪟' },
      { name: 'VS Code', level: 95, icon: '💻' }
    ]
  };

  const categories = [
    { key: 'languages', label: 'Programming Languages', icon: '💻' },
    { key: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️' },
    { key: 'tools', label: 'Tools & Platforms', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
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
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ '--progress': `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="soft-skills">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            <div className="soft-skill-item">
              <div className="soft-skill-icon">🎯</div>
              <h4>Leadership</h4>
              <p>Leading teams and projects with vision and clarity</p>
            </div>
            <div className="soft-skill-item">
              <div className="soft-skill-icon">🧠</div>
              <h4>Problem-solving</h4>
              <p>Creative solutions to complex technical challenges</p>
            </div>
            <div className="soft-skill-item">
              <div className="soft-skill-icon">🔄</div>
              <h4>Adaptability</h4>
              <p>Quick learning and adaptation to new technologies</p>
            </div>
            <div className="soft-skill-item">
              <div className="soft-skill-icon">💬</div>
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
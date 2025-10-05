import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      date: 'July 2024',
      credentialId: 'Zfnf8',
      link: 'https://shorturl.at/Zfnf8',
      badge: '⚛️',
      skills: ['React.js', 'JavaScript', 'Frontend Development']
    },
    {
      title: 'Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM/Coursera',
      date: 'July 2024',
      credentialId: '86Tv6',
      link: 'https://shorturl.at/86Tv6',
      badge: '🌐',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Development']
    },
    {
      title: 'Git & GitHub',
      issuer: 'IBM',
      date: 'July 2024',
      credentialId: '3f3f70e33d865ea01f2901e4550b56f2',
      link: 'https://coursera.org/share/3f3f70e33d865ea01f2901e4550b56f2',
      badge: '🐙',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
    },
    {
      title: 'Data Analysis Using PySpark',
      issuer: 'Coursera',
      date: 'September 2023',
      credentialId: '1LiSy',
      link: 'https://shorturl.at/1LiSy',
      badge: '🐍',
      skills: ['Python', 'PySpark', 'Data Analysis', 'Big Data']
    },
    {
      title: 'Community Development Program',
      issuer: 'All India Marwadi Yuva Manch (NGO)',
      date: 'June 2023',
      credentialId: 'D0hxu',
      link: 'https://shorturl.at/D0hxu',
      badge: '🤝',
      skills: ['Leadership', 'Community Development', 'Social Work', 'Project Management']
    }
  ];

  const achievements = [
    {
      title: 'Full Stack Development',
      description: 'Successfully completed multiple web development projects using modern technologies',
      icon: '🎯',
      highlight: 'Project Success'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent CGPA of 7.6+ throughout academic career',
      icon: '📚',
      highlight: 'Academic Achievement'
    },
    {
      title: 'Community Leadership',
      description: 'Led youth development initiatives and community programs',
      icon: '👥',
      highlight: 'Social Impact'
    },
    {
      title: 'Technical Innovation',
      description: 'Developed automated solutions for certificate generation and web development',
      icon: '💡',
      highlight: 'Innovation'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="certifications-content">
          <div className="certifications-section">
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="certification-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="cert-header">
                    <div className="cert-badge">{cert.badge}</div>
                    <div className="cert-info">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                  
                  <div className="cert-skills">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="cert-skill">{skill}</span>
                    ))}
                  </div>
                  
                  <div className="cert-actions">
                    <a 
                      href={cert.link} 
                      className="cert-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Credential
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="achievements-section">
            <h3 className="subsection-title">Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="achievement-card"
                  style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <span className="achievement-highlight">{achievement.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="certifications-stats">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Major Achievements</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
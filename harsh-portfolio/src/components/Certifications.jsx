import React, { useEffect } from 'react';
import './Certifications.css';

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
    title: 'IBM Full Stack Software Developer',
    issuer: 'IBM/Coursera',
    date: 'July 2024',
    credentialId: '86Tv6',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/HJ4ZDV37YV8Q',
    badge: '🌐',
    skills: ['Node.js', 'Python', 'React.Js', 'Cloud Computing']
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
  },
  {
    title: 'Introduction to Containers w/ Docker',
    issuer: 'IBM/Coursera',
    date: 'July 2024',
    credentialId: '86Tv6',
    link: 'https://www.coursera.org/account/accomplishments/verify/CN7GB4NYMRW7',
    badge: '🌐',
    skills: ['Containers', 'Docker', 'Kubernetes', 'OpenShift']
  },
  {
    title: 'Agentic AI and AI Agents',
    issuer: 'Coursera',
    date: 'Oct 2025',
    credentialId: '86Tv6',
    link: 'https://www.coursera.org/account/accomplishments/verify/LEV4RCT9CB0C',
    badge: '֎',
    skills: ['AI ML', 'Python', 'Generative Ai', 'Prompt Engineering']
  },
  {
    title: 'SOAR - AI',
    issuer: 'HCL Technologies Ltd / SkillIndia',
    date: 'Oct 2025',
    credentialId: '86Tv6',
    link: 'https://courses.skillindiadigital.gov.in/courses/course-v1:Hcltech+41526+1752904290/courseware/7ffbae874b2243738e185698d951f41d/24e5c48ab33d4ef0ba216c3dca9303da/?activate_block_id=block-v1%3AHcltech%2B41526%2B1752904290%2Btype%40sequential%2Bblock%4024e5c48ab33d4ef0ba216c3dca9303da',
    badge: '֎🇦🇮',
    skills: ['GPT', 'Security', 'Deep-Learning', 'Prompt Engineering']
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM/Coursera',
    date: 'April 2024',
    credentialId: '86Tv6',
    link: 'https://www.coursera.org/account/accomplishments/verify/83EQPQMNJXDS',
    badge: '</>',
    skills: ['JSON', 'Node.js', 'Restful API', 'Web Applications']
  }
];

const achievements = [
  {
    title: 'GATE Data Science & AI AIR 204',
    description: 'Scored All India Rank 204 in GATE DA 2024 (score: 725) in Data Science & AI.',
    icon: '🏆',
    highlight: 'Data Science/AI'
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to Quine, badge programs, and multiple collaborative open source projects.',
    icon: '🧑‍💻',
    highlight: 'Open Source'
  },
  {
    title: 'Project Starstruck',
    description: 'Created GitHub repos that earned “Starstruck” (⭐) and “Quickdraw” (⚡) badges.',
    icon: '✨',
    highlight: 'GitHub Achievements'
  },
  {
    title: 'Leadership & Community Impact',
    description: 'Organized tech workshops, mentored juniors, and led youth initiatives with All India Marwadi Yuva Manch.',
    icon: '🚀',
    highlight: 'Leadership'
  },
  {
    title: 'Academic Excellence',
    description: 'Maintained CGPA of 7.7+; won best paper/presentation awards and Gold Medals.',
    icon: '📚',
    highlight: 'Academic'
  },
  {
    title: 'Technical Innovation',
    description: 'Developed dynamic certificate generator and web solutions with automation.',
    icon: '🤖',
    highlight: 'Automation'
  }
];

const Certifications = () => {
  useEffect(() => {
    // Scroll reveal for Achievements
    const cards = document.querySelectorAll('.achievement-card.fade-on-scroll');
    function handleScroll() {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          card.classList.add('in-view');
        } else {
          card.classList.remove('in-view');
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="certifications" className="certifications">
      <div className="achievements-bg"></div>
      <div className="achievements-bubbles">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-content">
          <div className="certifications-section">
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card" style={{ animationDelay: `${index * 0.13}s` }}>
                  <div className="cert-header">
                    <div className="cert-badge">{cert.badge}</div>
                    <div className="cert-info">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                  <div className="cert-skills">
                    {cert.skills.map(skill => <span key={skill} className="cert-skill">{skill}</span>)}
                  </div>
                  <div className="cert-actions">
                    <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                      View Credential <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Achievements Section: scroll & hover animation */}
          <div className="achievements-section">
            <h3 className="subsection-title">Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-card fade-on-scroll">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <span className="achievement-highlight gradient-highlight">{achievement.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats block */}
        <div className="certifications-stats">
          <div className="stat-item"><div className="stat-number">15+</div><div className="stat-label">Certifications</div></div>
          <div className="stat-item"><div className="stat-number">14</div><div className="stat-label">Major Achievements</div></div>
          <div className="stat-item"><div className="stat-number">2+</div><div className="stat-label">Years Experience</div></div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

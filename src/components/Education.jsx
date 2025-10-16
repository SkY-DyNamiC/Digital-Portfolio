import React, { useRef, useEffect } from 'react';  // FIX: Must import useRef, useEffect

import './Education.css';                          // Make sure Education.css exists!
import lpu from '../assets/lpu.png'
import rps from '../assets/rps.jpeg'


const education = [
  {
    degree: "Intermediate",
    duration: "Mar 2021 - May 2022",
    school: "RPS PUBLIC SCHOOL, PATNA",
    logo: rps,
    points: [
      "Completed 12th grade with 76.2%",
      "Team leader in March Past",
      "Active in extracurricular & competitions"
    ]
  },
  {
    degree: "BCA Bachelor of Computer Application",
    duration: "Mar 2022 - May 2025",
    school: "Lovely Professional University Phagwara, Punjab",
    logo: lpu,
    points: [
      "Scored 7.6 CGPA ",
      "Strong in Web-development, Networking, Backend-Technologies",
      "Started exploring AI ML"
    ]
  },
  {
    degree: "MCA Masters of Computer Application",
    duration: "Aug 2025 – Present",
    school: "LPU, Punjab",
    logo:lpu,
    points: [
      "Full-stack dev/Client projects/Hackathons",
      "Building Projects in Realtime",
      "Languages - C++ , java "
    ]
  }
];

export default function Education() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.35 }
    );
    rowsRef.current.forEach(item => { if (item) observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education-section">
      <h2 className="education-title">My Academic Journey 🚀</h2>
      <div className="timeline">
        {education.map((edu, idx) => (
          <div 
            ref={el => rowsRef.current[idx] = el}
            className="timeline-row fade-on-scroll"
            key={edu.degree}
          >
            <div className="timeline-logo">
              <img src={edu.logo} alt={edu.degree} />
            </div>
            <div className="timeline-circle" />
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-degree">{edu.degree}</span>
                <span
                 className="timeline-duration">{edu.duration}</span>
              </div>
              <span className="timeline-school">{edu.school}</span>
              <ul>
                {edu.points.map((pt,i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section themed-bg">
      <div className="contact-blur contact-blur1"></div>
      <div className="contact-blur contact-blur2"></div>
      <div className="contact-blur contact-blur3"></div>
      <div className="container">
        <h2 className="section-title contact-glow">Get In Touch</h2>
        <div className="contact-row">
          {/* Left: Info/cards */}
          <div className="contact-col glass-block info-col">
            <h3 className="contact-subtitle gradient-text">Let's Connect</h3>
            <p className="contact-description">
              I'm always excited to discuss new opportunities, innovative projects,
              or just have a friendly chat about technology and development.
              Feel free to reach out!
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon bright">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:harsh832019@gmail.com">harsh832019@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Patna, Bihar, India</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+919693967173">+91-9693967173</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/harsh-kumar555125/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/harsh-kumar
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">🐙</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/SkY-DyNamiC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/SkY-DyNamiC
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="contact-col glass-block form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    Send Message <span className="send-icon">📤</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="availability-status glow-status">
          <div className="status-indicator pulse-dot"></div>
          <span>Available for freelance projects and full-time opportunities</span>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Harsh Kumar. All rights reserved.</p>
            <p>Built with React.js and passion for clean code</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import './Contact.css';

const icons = {
  email: (
    <svg width="24" height="24" fill="#00d4ff" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.6l7.03 6.72a1.01 1.01 0 001.41 0L20 8.4V18H4z"/>
    </svg>
  ),
  location: (
    <svg width="24" height="24" fill="#764ba2" viewBox="0 0 24 24">
      <path d="M12 2C7.58 2 4 5.58 4 10c0 6.44 7.55 12.03 7.84 12.25.34.27.98.27 1.32 0C16.45 22.03 24 16.44 24 10c0-4.42-3.58-8-8-8zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5S14.5 8.62 14.5 10s-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  phone: (
    <svg width="24" height="24" fill="#ea4c89" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.07-.27 11.36 11.36 0 003.56.57A1 1 0 0122 18v3a1 1 0 01-1 1C7.39 22 2 16.61 2 5a1 1 0 011-1h3a1 1 0 011 1c0 1.22.2 2.41.57 3.56a1 1 0 01-.27 1.07l-2.2 2.2z"/>
    </svg>
  ),
  linkedin: (
    <svg width="24" height="24" fill="#18e3ff" viewBox="0 0 24 24">
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97s2.98-1.34 2.98-2.97C7.96 4.84 6.62 3.5 4.98 3.5zM3 8.97h3.96v11.54H3V8.97zM9.17 8.97h3.8v1.57h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.42 4.75 5.57v6.35h-3.96v-5.62c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.71H9.17V8.97z"/>
    </svg>
  ),
  github: (
    <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
      <path d="M12 .5c-6.6 0-12 5.33-12 12 0 5.3 3.43 9.8 8.18 11.38.6.11.82-.26.82-.58 0-.29-.01-1.03-.02-2.03-3.34.73-4.04-1.6-4.04-1.6-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.78.42-1.33.76-1.63-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.13 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.21 0 1.59-.02 2.87-.02 3.25 0 .32.21.7.82.58C20.57 22.3 24 17.8 24 12.5c0-6.67-5.4-12-12-12z"/>
    </svg>
  )
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
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
        <div className="section-title contact-glow">Get In Touch</div>
        <div className="contact-row">
          <div className="contact-col glass-block info-col">
            <h3 className="contact-subtitle gradient-text">Let's Connect</h3>
            <p className="contact-description">
              I'm always excited to discuss new opportunities, innovative projects,
              or just have a friendly chat about technology and development.
              Feel free to reach out!
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon bright">{icons.email}</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:harsh832019@gmail.com">harsh832019@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">{icons.location}</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Patna, Bihar, India</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">{icons.phone}</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+919693967173">+91-9693967173</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">{icons.linkedin}</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/harsh-kumar555125/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/harsh-kumar
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon bright">{icons.github}</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/SkY-DyNamiC" target="_blank" rel="noopener noreferrer">
                    github.com/SkY-DyNamiC
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-col glass-block form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="6" className="form-textarea"></textarea>
              </div>
              <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? (<span className="spinner"></span> ) : (<>Send Message <span className="send-icon">📤</span></>)}
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
        <div className="footer-cta-section">
  <div className="footer-cta-badge">We Ready 24 Hours</div>
  <h2 className="footer-cta-title">
    Have a project in mind? <span>Let's Talk</span>
  </h2>
  <p className="footer-cta-desc">
Let's collaborate and turn your ideas into reality, whether it's a personal portfolio, business website, or a digital product. Reach out and let's make something amazing together!
</p>
  <a href="tel:+6211144490" className="footer-cta-btn">
    <span className="footer-cta-phone">+91 9693967173</span>
    <span className="footer-cta-icon">
      {/* Phone SVG */}
      <svg width="19" height="19" fill="#fff" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.07-.27 11.36 11.36 0 003.56.57A1 1 0 0122 18v3a1 1 0 01-1 1C7.39 22 2 16.61 2 5a1 1 0 011-1h3a1 1 0 011 1c0 1.22.2 2.41.57 3.56a1 1 0 01-.27 1.07l-2.2 2.2z"/></svg>
    </span>
  </a>
  {/* Footer links row */}
  <div className="footer-cta-links-row">
    <div className="footer-cta-brand">
      <span className="footer-cta-logo">Harsh Kumar</span>
      <span className="footer-cta-sub">A Digital Portfolio Built with Love and affection.</span>
    </div>
    <div className="footer-cta-links-section">
      <b>Useful Links</b>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Reviews</li>
        <li>Pricing</li>
      </ul>
    </div>
    <div className="footer-cta-links-section">
      <b>Support</b>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="footer-cta-links-section">
      <b>Find Me</b>
      <ul>
        <li>Mon - Sat: 8am - 9pm</li>
        <li>Bihar, Patna Industrial area 800030</li>
        <li>harsh832019@support.com</li>
      </ul>
    </div>
  </div>
</div>
      </footer>
    </section>
  );
};

export default Contact;

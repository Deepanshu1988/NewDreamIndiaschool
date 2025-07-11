import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';

// Initialize AOS in a useEffect
const useAOS = () => {
  useEffect(() => {
    const loadAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      } catch (error) {
        console.error('Failed to load AOS', error);
      }
    };

    loadAOS();
  }, []);
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  useAOS();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the email body with all form data
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Inquiry Type: ${formData.inquiryType}
        
        Message:
        ${formData.message}
      `;

      // Using FormSubmit's recommended format
      const formDataToSend = new FormData();
      formDataToSend.append('_subject', `New ${formData.inquiryType || 'Inquiry'} from ${formData.name}`);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_autoresponse', `Thank you for contacting us, ${formData.name}! We have received your ${formData.inquiryType || 'inquiry'} and will get back to you soon.`);
      formDataToSend.append('_next', window.location.href + '?success=true');
      formDataToSend.append('_honeypot', '');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('inquiryType', formData.inquiryType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('Inquiry Details', emailBody);

      const response = await fetch('https://formsubmit.co/ajax/deepanshu123.doaguru@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok && result.success === 'true') {
        setSubmitStatus({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
        // Reset form
        setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus({ success: null, message: '' }), 5000);
    }
  };

  const scrollToContactWithAdmission = (e) => {
    e.preventDefault();
    // Set inquiry type to admission
    setFormData(prev => ({
      ...prev,
      inquiryType: 'admission'
    }));
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show loading screen
  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <a href="#home">
              <img 
                src="/images/logo4.png" 
                alt="New Dream India School Logo" 
                className="logo-img" 
              />
            </a>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Our Achievements</a>
            <a href="#academics" onClick={() => setIsMenuOpen(false)}>Academics</a>
            <a href="#facilities" onClick={() => setIsMenuOpen(false)}>Facilities</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-banner">
          <img 
            src="/images/school-banner2.jpg" 
            alt="New Dream India School Campus" 
            className="banner-image"
          />
        </div>
        <div className="hero-content" data-aos="fade-up">
          <h1>Welcome to New Dream India School</h1>
          <p>Nurturing Young Minds, Building Bright Futures</p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a 
              href="#contact" 
              className="btn primary"
              onClick={scrollToContactWithAdmission}
            >
              Admissions Open
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About Our School</h2>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Established in 2005, New Dream India School has been a beacon of excellence in education, providing a nurturing environment where students can grow academically, socially, and personally.</p>
              <p>Our dedicated faculty and state-of-the-art facilities ensure that every child receives the best possible education to prepare them for the challenges of tomorrow.</p>
              <a href="/about" className="btn primary">Learn More</a>
            </div>
            <div className="about-image" data-aos="fade-left" data-aos-delay="200">
              <img src="/images/school-building1.jpg" alt="New Dream India School Building" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="achievements" className="stats-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Achievements</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Building a legacy of excellence in education
          </p>
          <div className="stats-container">
            <Counter end={1500} label="Students" />
            <Counter end={75} label="Teachers" />
            <Counter end={25} label="Classrooms" />
            <Counter end={10} label="Awards" />
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="section bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Academics</h2>
          <div className="academics-grid">
            <div className="academic-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">🏫</div>
              <h3>Pre-Primary</h3>
              <p>Play-based learning for our youngest students to develop fundamental skills.</p>
            </div>
            <div className="academic-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">📚</div>
              <h3>Primary</h3>
              <p>Building strong foundations in core subjects with interactive learning.</p>
            </div>
            <div className="academic-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">🔬</div>
              <h3>Secondary</h3>
              <p>Comprehensive curriculum with a focus on holistic development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility" data-aos="fade-up" data-aos-delay="100">
              <div className="facility-image">
                <img src="/images/istockphoto-505551939-612x612.jpg" alt="School Library" />
              </div>
              <div className="facility-content">
                <h3>Modern Library</h3>
                <p>Well-stocked with books, periodicals, and digital resources for comprehensive learning.</p>
              </div>
            </div>
            <div className="facility" data-aos="fade-up" data-aos-delay="200">
              <div className="facility-image">
                <img src="/images/istockphoto-476694776-612x612.jpg" alt="Science Lab" />
              </div>
              <div className="facility-content">
                <h3>Science Labs</h3>
                <p>Fully equipped labs for Physics, Chemistry, and Biology to foster practical learning.</p>
              </div>
            </div>
            <div className="facility" data-aos="fade-up" data-aos-delay="300">
              <div className="facility-image">
                <img src="/images/-6m8o5njlc6-250.jpg" alt="Sports Ground" />
              </div>
              <div className="facility-content">
                <h3>Sports Complex</h3>
                <p>Indoor and outdoor sports facilities for all-round development of students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
          <div className="contact-container">
            <div className="contact-info" data-aos="fade-right">
              <h3>Get in Touch</h3>
              <p><i className="fas fa-map-marker-alt"></i> 123 Education Street, Knowledge City, India</p>
              <p><i className="fas fa-phone"></i> +91 12345 67890</p>
              <p><i className="fas fa-envelope"></i> info@newdreamindiaschool.edu.in</p>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <form 
              className="contact-form" 
              data-aos="fade-left" 
              data-aos-delay="100"
              onSubmit={handleSubmit}
            >
              {submitStatus.message && (
                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <h3>Send Us Your Inquiry</h3>
              <p className="form-description">Have questions? We're here to help. Fill out the form below and we'll get back to you soon.</p>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
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
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select 
                  name="inquiryType" 
                  className="form-select"
                  value={formData.inquiryType || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="academics">Academics</option>
                  <option value="facilities">Facilities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#achievements">Our Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>School Hours</h3>
              <p>Monday - Friday: 8:00 AM - 2:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates and announcements.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} New Dream India School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${window.scrollY > 300 ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;

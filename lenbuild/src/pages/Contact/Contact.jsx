import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Contact.css';

const Contact = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'Contact' }
  ];
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // In a real application, you would send the formData to a server here
    // This is a simulated API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  // Toggle FAQ answer
  const toggleFAQ = (index) => {
    const faqElement = document.getElementById(`faq-answer-${index}`);
    const faqQuestion = document.getElementById(`faq-question-${index}`);
    
    if (faqElement.style.maxHeight) {
      faqElement.style.maxHeight = null;
      faqQuestion.classList.remove('active');
    } else {
      faqElement.style.maxHeight = faqElement.scrollHeight + "px";
      faqQuestion.classList.add('active');
    }
  };
  
  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />
      
      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-intro">Have a project in mind? We'd love to hear from you. Fill out the form below and one of our team members will get back to you as soon as possible.</p>
          
          <div className="contact-container">
            <div className="contact-form-container">
              {submitSuccess && (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>We've received your inquiry and will get back to you as soon as possible.</p>
                </div>
              )}
              
              <form id="contact-form" onSubmit={handleSubmit} className={submitSuccess ? 'hidden' : ''}>
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Your Name <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="custom-home">Custom Home Building</option>
                    <option value="extensions">Home Extensions</option>
                    <option value="renovations">Renovations</option>
                    <option value="energy-efficient">Energy-Efficient Solutions</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Your Message <span className="required">*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>
                
                <button 
                  type="submit" 
                  className={`btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="contact-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <p>123 Main Street</p>
                    <p>Sydney, NSW 2000</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <p>(02) 1234 5678</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <p>info@lenbuild.com.au</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-card">
                <h3>Business Hours</h3>
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <p>Monday - Friday: 7:30 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          {/* In a real implementation, this would be a Google Maps iframe */}
          <div className="map-container">
            <img src="/placeholder.jpg" alt="Map" className="map-placeholder" />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-container">
            <div className="faq-item">
              <div 
                id="faq-question-1" 
                className="faq-question"
                onClick={() => toggleFAQ(1)}
              >
                What areas do you service?
                <span className="faq-icon">+</span>
              </div>
              <div id="faq-answer-1" className="faq-answer">
                <p>We primarily service the Sydney metropolitan area, including the Eastern Suburbs, Inner West, North Shore, and Northern Beaches. For projects outside these areas, please contact us to discuss further.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div 
                id="faq-question-2" 
                className="faq-question"
                onClick={() => toggleFAQ(2)}
              >
                How long does a typical project take to complete?
                <span className="faq-icon">+</span>
              </div>
              <div id="faq-answer-2" className="faq-answer">
                <p>Project timelines vary significantly based on the scope and complexity. A custom home typically takes 8-12 months from design to completion, while renovations may take 2-6 months. We provide detailed timelines during the consultation phase.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div 
                id="faq-question-3" 
                className="faq-question"
                onClick={() => toggleFAQ(3)}
              >
                Do you provide design services?
                <span className="faq-icon">+</span>
              </div>
              <div id="faq-answer-3" className="faq-answer">
                <p>Yes, we offer comprehensive design services as part of our building process. Our team can work from existing plans or create custom designs tailored to your needs and preferences.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div 
                id="faq-question-4" 
                className="faq-question"
                onClick={() => toggleFAQ(4)}
              >
                What does your warranty cover?
                <span className="faq-icon">+</span>
              </div>
              <div id="faq-answer-4" className="faq-answer">
                <p>We provide a comprehensive 7-year structural warranty on all new builds and major renovations, as well as a 12-month warranty on all other work. This covers both materials and workmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
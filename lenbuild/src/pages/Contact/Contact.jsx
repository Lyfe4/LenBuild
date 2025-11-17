import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Contact.css';

const Contact = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'Contact' }
  ];
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
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
    
    // Clear error when field is changed (only if form has been submitted)
    if (hasSubmitted && errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validate individual fields
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          return 'First name is required';
        }
        if (value.trim().length < 2) {
          return 'First name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'First name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return null;
        
      case 'lastName':
        if (!value.trim()) {
          return 'Last name is required';
        }
        if (value.trim().length < 2) {
          return 'Last name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'Last name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return null;
        
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        return null;
        
      case 'phone':
        // Phone is optional, but if provided, validate format
        if (value.trim() && !/^[\d\s\-\+\(\)]+$/.test(value.trim())) {
          return 'Please enter a valid phone number';
        }
        if (value.trim() && value.trim().replace(/\D/g, '').length < 8) {
          return 'Phone number must be at least 8 digits';
        }
        return null;
        
      case 'service':
        if (!value.trim()) {
          return 'Please select a service';
        }
        return null;
        
      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        if (value.trim().length > 1000) {
          return 'Message must be less than 1000 characters';
        }
        return null;
        
      default:
        return null;
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate all fields
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    
    // Validate form
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.focus();
        }
      }
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // In a real application, you would send the formData to a server here
    // This is a simulated API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setHasSubmitted(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear any errors
      setErrors({});
      
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
      // Calculate height including padding (var(--spacing-lg) = 30px top + 30px bottom = 60px)
      const contentHeight = faqElement.scrollHeight;
      const paddingHeight = 60; // 30px top + 30px bottom padding
      faqElement.style.maxHeight = (contentHeight + paddingHeight) + "px";
      faqQuestion.classList.add('active');
    }
  };
  
  // Scroll to section if hash in URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add slight delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What Areas do you service",
      answer: "At LenBuild, we're deeply connected to the Guyra community and the stunning landscapes of Northern NSW. From the heart of the New England Tablelands to the surrounding towns and rural properties"
    },
    {
      question: "How long does a typical project take to complete",
      answer: "Every build is unique, and so is the timeline. The duration of your project depends on a range of factors—including the scope of work, weather conditions, material availability, and coordination with other trades. While we can't always predict every detail upfront, we're committed to keeping you informed and working efficiently from start to finish. We're always happy to discuss your specific project and provide a realistic timeframe based on your goals and site conditions."
    },
    {
      question: "Do you provide design services",
      answer: "While LenBuild doesn't offer in-house architectural design, we're happy to work with you and a trusted draftsman to develop the plans you need. Whether you're starting from scratch or refining an idea, we'll guide you through the process to ensure your plans are practical, compliant, and tailored to your vision."
    }
  ];
  
  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />
      
      {/* Contact Section */}
      <section className="contact-section section" id="contact-form">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">Have a project in mind? We'd love to hear from you. Fill out the form below and one of our team members will get back to you as soon as possible.</p>
          
          <div className="contact-container">
            <div className="contact-form-container" data-aos="fade-right" data-aos-delay="200">
              {submitSuccess ? (
                <div className="success-message animate-fade-in">
                  <h3>Thank you for your message!</h3>
                  <p>We've received your inquiry and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                      <label htmlFor="firstName">First Name <span className="required">*</span></label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && <div id="firstName-error" className="error-message">{errors.firstName}</div>}
                    </div>
                    
                    <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                      <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && <div id="lastName-error" className="error-message">{errors.lastName}</div>}
                    </div>
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
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <div id="email-error" className="error-message">{errors.email}</div>}
                  </div>
                  
                  <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                    <label htmlFor="phone">Phone Number <span className="optional">(Optional)</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., (02) 1234 5678"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <div id="phone-error" className="error-message">{errors.phone}</div>}
                  </div>
                  
                  <div className={`form-group ${errors.service ? 'error' : ''}`}>
                    <label htmlFor="service">Service Interested In <span className="required">*</span></label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="">Select a Service</option>
                      <option value="custom-home">Custom Home Building</option>
                      <option value="extensions">Home Extensions</option>
                      <option value="renovations">Renovations</option>
                      <option value="energy-efficient">Energy-Efficient Solutions</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <div id="service-error" className="error-message">{errors.service}</div>}
                  </div>
                  
                  <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label htmlFor="message">Your Message <span className="required">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your project or inquiry..."
                      rows="5"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    <div className="character-count">
                      {formData.message.length}/1000 characters
                    </div>
                    {errors.message && <div id="message-error" className="error-message">{errors.message}</div>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            <div className="contact-info" data-aos="fade-left" data-aos-delay="300">
              <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <div className="contact-icon location-icon">⚲</div>
                  <div>
                    <p>Guyra Region, NSW 2365</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div>
                    <p>lenbuild@myyahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section" id="faq">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                className="faq-item" 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div 
                  id={`faq-question-${index + 1}`} 
                  className="faq-question"
                  onClick={() => toggleFAQ(index + 1)}
                >
                  {faq.question}
                  <span className="faq-icon">+</span>
                </div>
                <div id={`faq-answer-${index + 1}`} className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

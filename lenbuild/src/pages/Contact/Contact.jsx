import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Contact.css';

const FORMSPREE_URL = 'https://formspree.io/f/xgorqzre';
const MAX_SUBMISSIONS = 3;
const COOLDOWN_SECONDS = 60;

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

  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [, setHasSubmitted] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Anti-spam: cooldown timer
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const cooldownRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, []);

  // Start cooldown after successful submission
  const startCooldown = () => {
    setCooldownSeconds(COOLDOWN_SECONDS);
    cooldownRef.current = setInterval(() => {
      setCooldownSeconds(prev => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Re-validate field in real-time once it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Mark field as touched on blur and validate immediately
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Validate a single field — returns error string or null
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'First name can only contain letters, spaces, hyphens, and apostrophes';
        return null;

      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Last name can only contain letters, spaces, hyphens, and apostrophes';
        return null;

      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address (e.g. name@example.com)';
        return null;

      case 'phone':
        if (value.trim() && !/^[\d\s\-+()]+$/.test(value.trim())) return 'Phone number can only contain digits, spaces, +, -, and brackets';
        if (value.trim() && value.trim().replace(/\D/g, '').length < 8) return 'Phone number must be at least 8 digits';
        return null;

      case 'service':
        if (!value.trim()) return 'Please select a service you are interested in';
        return null;

      case 'message':
        if (!value.trim()) return 'Please enter a message';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        return null;

      default:
        return null;
    }
  };

  // Validate all fields and return whether form is valid
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    // Mark all fields as touched so errors show
    const allTouched = {};
    Object.keys(formData).forEach(f => (allTouched[f] = true));
    setTouched(allTouched);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setSubmitError(null);

    // Anti-spam: check session submission count
    const sessionCount = parseInt(sessionStorage.getItem('lenbuild_submitCount') || '0', 10);
    if (sessionCount >= MAX_SUBMISSIONS) {
      setSubmitError(
        `You've reached the maximum number of submissions (${MAX_SUBMISSIONS}) for this session. ` +
        'Please contact us directly at lenbuild@myyahoo.com if you need further assistance.'
      );
      return;
    }

    // Client-side validation
    if (!validateForm()) {
      // Scroll to first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const el = document.getElementById(firstErrorField);
        if (el) el.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        // Success — update session count and start cooldown
        sessionStorage.setItem('lenbuild_submitCount', String(sessionCount + 1));
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setHasSubmitted(false);
        startCooldown();

        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
        setTouched({});

        // Clear success message after 8 seconds
        setTimeout(() => setSubmitSuccess(false), 8000);
      } else {
        // Formspree returned an error — try to parse message
        let errorMsg = 'Something went wrong while sending your message.';
        try {
          const data = await response.json();
          if (data?.errors?.length) {
            errorMsg = data.errors.map(err => err.message).join(' ');
          } else if (response.status === 429) {
            errorMsg = 'Too many submissions. Please wait a moment before trying again.';
          }
        } catch (_) { /* use default message */ }
        setSubmitError(errorMsg + ' Please try again or contact us directly at lenbuild@myyahoo.com');
        setIsSubmitting(false);
      }
    } catch (networkError) {
      setSubmitError(
        'Unable to send your message — please check your internet connection and try again. ' +
        'Alternatively, contact us directly at lenbuild@myyahoo.com'
      );
      setIsSubmitting(false);
    }
  };

  // Toggle FAQ answer
  const toggleFAQ = (index) => {
    const faqElement = document.getElementById(`faq-answer-${index}`);
    const faqQuestion = document.getElementById(`faq-question-${index}`);

    if (faqElement.style.maxHeight) {
      faqElement.style.maxHeight = null;
      faqQuestion.classList.remove('active');
    } else {
      const contentHeight = faqElement.scrollHeight;
      const paddingHeight = 60;
      faqElement.style.maxHeight = (contentHeight + paddingHeight) + 'px';
      faqQuestion.classList.add('active');
    }
  };

  // Scroll to section if hash in URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
      }
    }
  }, []);

  // FAQ data
  const faqs = [
    {
      question: 'What areas do you service?',
      answer: 'At LenBuild, we\'re deeply connected to the Guyra community and the stunning landscapes of Northern NSW. From the heart of the New England Tablelands to the surrounding towns and rural properties.'
    },
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Every build is unique, and so is the timeline. The duration of your project depends on a range of factors—including the scope of work, weather conditions, material availability, and coordination with other trades. While we can\'t always predict every detail upfront, we\'re committed to keeping you informed and working efficiently from start to finish. We\'re always happy to discuss your specific project and provide a realistic timeframe based on your goals and site conditions.'
    },
    {
      question: 'Do you provide design services?',
      answer: 'While LenBuild doesn\'t offer in-house architectural design, we\'re happy to work with you and a trusted draftsman to develop the plans you need. Whether you\'re starting from scratch or refining an idea, we\'ll guide you through the process to ensure your plans are practical, compliant, and tailored to your vision.'
    }
  ];

  const isOnCooldown = cooldownSeconds > 0;

  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

      {/* Contact Section */}
      <section className="contact-section section" id="contact-form">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind? We'd love to hear from you. Fill out the form below and one of our team members will get back to you as soon as possible.
          </p>

          <div className="contact-container">
            <div className="contact-form-container" data-aos="fade-right" data-aos-delay="200">

              {/* Global submission error banner */}
              {submitError && (
                <div className="submit-error-banner animate-fade-in" role="alert">
                  <span className="submit-error-icon">⚠</span>
                  <p>{submitError}</p>
                </div>
              )}

              {submitSuccess ? (
                <div className="success-message animate-fade-in" role="status">
                  <h3>✓ Message sent successfully!</h3>
                  <p>We've received your inquiry and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form
                  action={FORMSPREE_URL}
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Honeypot field — hidden from real users, catches bots */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                  {/* Formspree email subject */}
                  <input type="hidden" name="_subject" value="New enquiry from LenBuild website" />

                  <div className="form-row">
                    <div className={`form-group ${touched.firstName && errors.firstName ? 'error' : touched.firstName && !errors.firstName ? 'valid' : ''}`}>
                      <label htmlFor="firstName">First Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        autoComplete="given-name"
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        aria-invalid={!!errors.firstName}
                      />
                      {touched.firstName && errors.firstName && (
                        <div id="firstName-error" className="error-message" role="alert">{errors.firstName}</div>
                      )}
                    </div>

                    <div className={`form-group ${touched.lastName && errors.lastName ? 'error' : touched.lastName && !errors.lastName ? 'valid' : ''}`}>
                      <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        autoComplete="family-name"
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        aria-invalid={!!errors.lastName}
                      />
                      {touched.lastName && errors.lastName && (
                        <div id="lastName-error" className="error-message" role="alert">{errors.lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className={`form-group ${touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'valid' : ''}`}>
                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {touched.email && errors.email && (
                      <div id="email-error" className="error-message" role="alert">{errors.email}</div>
                    )}
                  </div>

                  <div className={`form-group ${touched.phone && errors.phone ? 'error' : touched.phone && formData.phone && !errors.phone ? 'valid' : ''}`}>
                    <label htmlFor="phone">Phone Number <span className="optional">(Optional)</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g., (02) 1234 5678"
                      autoComplete="tel"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {touched.phone && errors.phone && (
                      <div id="phone-error" className="error-message" role="alert">{errors.phone}</div>
                    )}
                  </div>

                  <div className={`form-group ${touched.service && errors.service ? 'error' : touched.service && !errors.service ? 'valid' : ''}`}>
                    <label htmlFor="service">Service Interested In <span className="required">*</span></label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a Service</option>
                      <option value="custom-home-building">Custom Home Building</option>
                      <option value="extensions">Extensions</option>
                      <option value="renovations">Renovations</option>
                      <option value="pac">Paid as a Consultant (PAC)</option>
                      <option value="other">Other</option>
                    </select>
                    {touched.service && errors.service && (
                      <div id="service-error" className="error-message" role="alert">{errors.service}</div>
                    )}
                  </div>

                  <div className={`form-group ${touched.message && errors.message ? 'error' : touched.message && !errors.message ? 'valid' : ''}`}>
                    <label htmlFor="message">Your Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Please describe your project or inquiry..."
                      rows="5"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    ></textarea>
                    <div className={`character-count ${formData.message.length > 900 ? 'near-limit' : ''}`}>
                      {formData.message.length}/1000 characters
                    </div>
                    {touched.message && errors.message && (
                      <div id="message-error" className="error-message" role="alert">{errors.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting || isOnCooldown}
                  >
                    {isSubmitting
                      ? 'Sending...'
                      : isOnCooldown
                      ? `Please wait ${cooldownSeconds}s before sending again`
                      : 'Send Message'}
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

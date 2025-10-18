import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS Configuration
      const serviceID = 'service_bd85s5l';
      const templateID = 'template_g1m2xyk';
      const publicKey = 'GVk1hqehX3gCZnorJ';

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Template parameters for auto-reply email to user
      const templateParams = {
        to_name: formData.name, // User's name
        to_email: formData.email, // User's email
        from_name: 'The Sukkur Academy',
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_subject: formData.subject,
        user_message: formData.message,
        reply_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      console.log('Sending email with params:', templateParams);

      // Send auto-reply email to user
      const response = await emailjs.send(serviceID, templateID, templateParams);
      
      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      setSubmitStatus('error');
      
      // Show alert with specific error for debugging
      alert(`Error: ${error.text || error.message || 'Unknown error'}\nStatus: ${error.status || 'N/A'}`);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: ["+92 3152550599"],
      action: "tel:+923152550599"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address", 
      details: ["thesukkuracademy@gmail.com"],
      action: "mailto:thesukkuracademy@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Hira School Bunglow no.29", "Sector 3, opposite Imam bargha", "ladies' gate sukkur Township"],
      action: "#"
    },
    {
      icon: <Clock size={24} />,
      title: "Class Timings",
      details: ["Monday to Friday", "04:00 PM to 07:00 PM", "Saturday: 02:00 PM to 05:00 PM"],
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Students from classes 9th to 12th can join. No specific entrance test required, but a brief assessment may be conducted to determine the appropriate batch."
    },
    {
      question: "Are there separate batches for girls?",
      answer: "Yes, we have separate groups/batches for girls to ensure a comfortable learning environment for all students."
    },
    {
      question: "What boards do you cover?",
      answer: "We provide comprehensive preparation for Sindh Board, Agha Khan Board, and Federal Board curricula."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, notes, and practice worksheets for all subjects."
    },
    {
      question: "How often are tests conducted?",
      answer: "We conduct weekly and monthly tests to track student progress and ensure conceptual clarity."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#d1fae5' }}>
            Get in touch with us for admissions, inquiries, or any questions about our programs. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Get in Touch</h2>
            <p style={{ fontSize: '1.1rem' }}>Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  color: 'var(--primary-green)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {info.icon}
                </div>
                <h4 style={{ marginBottom: '1rem' }}>{info.title}</h4>
                <div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} style={{ 
                      margin: '0.25rem 0', 
                      color: 'var(--text-light)',
                      fontSize: '0.9rem'
                    }}>
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action !== '#' && (
                  <a 
                    href={info.action} 
                    className="btn btn-primary" 
                    style={{ marginTop: '1rem', fontSize: '0.9rem', padding: '8px 16px' }}
                  >
                    Contact Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div>
              <h2>Send us a Message</h2>
              <p style={{ marginBottom: '2rem' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div style={{
                    backgroundColor: '#d1fae5',
                    color: '#065f46',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    border: '1px solid #059669'
                  }}>
                    <strong>✓ Message sent successfully!</strong>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                      Thank you for contacting us. We've sent a confirmation email to {formData.email}. We'll get back to you soon!
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div style={{
                    backgroundColor: '#fee2e2',
                    color: '#991b1b',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    border: '1px solid #dc2626'
                  }}>
                    <strong>✗ Error sending message</strong>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                      Please try again or contact us directly at +92 3152550599
                    </p>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="Course Information">Course Information</option>
                    <option value="Fee Structure">Fee Structure</option>
                    <option value="Class Schedule">Class Schedule</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows="5"
                    required
                    placeholder="Enter your message"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{ 
                        display: 'inline-block', 
                        width: '20px', 
                        height: '20px', 
                        border: '2px solid #ffffff', 
                        borderTop: '2px solid transparent', 
                        borderRadius: '50%', 
                        animation: 'spin 1s linear infinite', 
                        marginRight: '8px' 
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} style={{ marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Contact & Location */}
            <div>
              <div className="card" style={{ 
                padding: '2rem', 
                backgroundColor: 'var(--primary-green)', 
                color: 'white',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Contact</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Phone size={20} style={{ marginRight: '12px' }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>Call us directly:</p>
                      <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.9rem' }}>+92 3152550599</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <MessageCircle size={20} style={{ marginRight: '12px' }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>WhatsApp:</p>
                      <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.9rem' }}>+92 3152550599</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Mail size={20} style={{ marginRight: '12px' }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>Email:</p>
                      <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.9rem' }}>thesukkuracademy@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  padding: '1rem', 
                  borderRadius: '8px' 
                }}>
                  <h5 style={{ color: 'white', marginBottom: '0.5rem' }}>Office Hours:</h5>
                  <p style={{ margin: 0, color: '#f0fdf4', fontSize: '0.9rem' }}>Monday - Friday: 2:00 PM - 8:00 PM</p>
                  <p style={{ margin: 0, color: '#f0fdf4', fontSize: '0.9rem' }}>Saturday: 2:00 PM - 5:00 PM</p>
                  <p style={{ margin: 0, color: '#f0fdf4', fontSize: '0.9rem' }}>Sunday: Closed</p>
                </div>
              </div>

              {/* Location Details */}
              <div className="card" style={{ padding: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Visit Our Campus</h4>
                <div style={{ marginBottom: '1rem' }}>
                  <MapPin size={20} style={{ color: 'var(--primary-green)', marginRight: '8px', display: 'inline' }} />
                  <strong>Address:</strong>
                </div>
                <p style={{ marginLeft: '28px', marginBottom: '1rem' }}>
                  Hira School Bunglow no.29<br />
                  Sector 3, opposite Imam bargha ladies' gate<br />
                  Sukkur Township, Sukkur
                </p>
                
                <div style={{ 
                  backgroundColor: 'var(--gray-50)', 
                  padding: '1rem', 
                  borderRadius: '8px' 
                }}>
                  <h5 style={{ marginBottom: '0.5rem' }}>Landmarks:</h5>
                  <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                    <li style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>Near Imam Bargha Ladies Gate</li>
                    <li style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>Sukkur Township Area</li>
                    <li style={{ fontSize: '0.9rem' }}>Easily accessible by public transport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem' }}>Quick answers to common questions</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '1rem', padding: '1.5rem' }}>
                <h5 style={{ 
                  marginBottom: '1rem', 
                  color: 'var(--primary-green)',
                  fontSize: '1.1rem'
                }}>
                  {faq.question}
                </h5>
                <p style={{ margin: 0, lineHeight: '1.6' }}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              Still have questions? Don't hesitate to contact us!
            </p>
            <a href="tel:+923152550599" className="btn btn-primary">
              Call Now: +92 3152550599
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useState } from 'react';
import { CheckCircle, Download, User, Mail, Phone, BookOpen, Calendar, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Registration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    fatherName: '',
    caste: '',
    email: '',
    phone: '',
    cnic: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    
    // Academic Information
    board: '',
    currentClass: '',
    school: '',
    entranceTest: '',
    examPreparation: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const boards = [
    'Sindh Board',
    'Federal Board', 
    'Agha Khan Board'
  ];

  const classes = {
    'Sindh Board': ['9th Class', '10th Class', '11th Class', '12th Class'],
    'Federal Board': ['9th Class', '10th Class', '11th Class', '12th Class'],
    'Agha Khan Board': ['9th Class', '10th Class', '11th Class', '12th Class']
  };

  const schools = [
    'Government School',
    'Private School',
    'College',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      
      // If entrance test is "no", clear the exam preparation field
      if (name === 'entranceTest' && value === 'no') {
        newData.examPreparation = '';
      }
      
      return newData;
    });
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 11 digits for Pakistan mobile numbers
    if (phoneNumber.length > 11) {
      return phoneNumber.slice(0, 11);
    }
    
    // Format: 03XX-XXXXXXX
    if (phoneNumber.length >= 4) {
      return phoneNumber.slice(0, 4) + '-' + phoneNumber.slice(4);
    }
    
    return phoneNumber;
  };

  const formatCNIC = (value) => {
    // Remove all non-digits
    const cnic = value.replace(/\D/g, '');
    
    // Limit to 13 digits for CNIC
    if (cnic.length > 13) {
      return cnic.slice(0, 13);
    }
    
    // Format: XXXXX-XXXXXXX-X
    if (cnic.length >= 6) {
      if (cnic.length >= 13) {
        return cnic.slice(0, 5) + '-' + cnic.slice(5, 12) + '-' + cnic.slice(12);
      } else if (cnic.length > 5) {
        return cnic.slice(0, 5) + '-' + cnic.slice(5);
      }
    }
    
    return cnic;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  const handleCNICChange = (e) => {
    const formattedCNIC = formatCNIC(e.target.value);
    setFormData(prev => ({
      ...prev,
      cnic: formattedCNIC
    }));
  };

  const sendRegistrationEmail = async (formData) => {
    // EmailJS Configuration
    const serviceID = 'service_bd85s5l';
    const templateID = 'template_moxooui';
    const publicKey = 'GVk1hqehX3gCZnorJ';

    // Initialize EmailJS with public key
    emailjs.init(publicKey);

    // Template parameters for registration confirmation email
    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      from_name: 'The Sukkur Academy',
      student_name: formData.fullName,
      father_name: formData.fatherName,
      caste: formData.caste || 'Not provided',
      email: formData.email,
      phone: formData.phone,
      cnic: formData.cnic || 'Not provided',
      gender: formData.gender || 'Not specified',
      date_of_birth: formData.dateOfBirth || 'Not provided',
      address: formData.address,
      board: formData.board,
      current_class: formData.currentClass,
      school: formData.school || 'Not provided',
      entrance_test: formData.entranceTest || 'Not specified',
      exam_preparation: formData.examPreparation || 'Not specified',
      registration_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      console.log('Sending registration email with params:', templateParams);
      
      const response = await emailjs.send(serviceID, templateID, templateParams);
      
      console.log('Registration email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send confirmation email');
    }
  };

  const exportToCSV = (data) => {
    const headers = [
      'Full Name', 'Father Name', 'Caste', 'Email', 'Phone', 'CNIC', 'Gender', 'Date of Birth', 'Address',
      'Board', 'Current Class', 'School', 'Entrance Test', 'Exam Preparation', 'Registration Date'
    ];

    const csvContent = [
      headers.join(','),
      [
        data.fullName, data.fatherName, data.caste, data.email, data.phone, data.cnic, data.gender, 
        data.dateOfBirth, data.address, data.board, data.currentClass, data.school, data.entranceTest,
        data.examPreparation, new Date().toLocaleString()
      ].map(field => `"${field}"`).join(',')
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `registration_${data.fullName.replace(/\s+/g, '_')}_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.fatherName || !formData.email || !formData.phone || !formData.board || !formData.currentClass) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate phone number format
    const phoneRegex = /^03[0-9]{2}-[0-9]{7}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid Pakistani phone number in format: 03XX-XXXXXXX');
      return;
    }

    // Validate CNIC format if provided
    if (formData.cnic && formData.cnic.length > 0) {
      const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
      if (!cnicRegex.test(formData.cnic)) {
        alert('Please enter a valid CNIC in format: XXXXX-XXXXXXX-X');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Send confirmation email to student
      await sendRegistrationEmail(formData);
      
      // Store in localStorage as backup
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      registrations.push({
        ...formData,
        registrationDate: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('registrations', JSON.stringify(registrations));

        // Show success message
        setSubmitted(true);
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset form
        setFormData({
        fullName: '', fatherName: '', caste: '', email: '', phone: '', cnic: '', gender: '', dateOfBirth: '', address: '',
        board: '', currentClass: '', school: '', entranceTest: '', examPreparation: ''
        });
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error processing your registration. Please try again or contact the academy directly at +92 3152550599.');
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="registration-page">
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ 
                color: 'var(--primary-green)', 
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <CheckCircle size={80} />
              </div>
              <h1 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Registration Successful!</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Thank you for registering with The Sukkur Academy. Your registration has been saved and a confirmation email has been sent to your email address.
              </p>
              <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--gray-50)' }}>
                <h3 style={{ marginBottom: '1rem' }}>What's Next?</h3>
                <ul style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>We will contact you within 24 hours</li>
                  <li style={{ marginBottom: '0.5rem' }}>Confirm your class schedule and batch</li>
                  <li style={{ marginBottom: '0.5rem' }}>Complete the admission process</li>
                  <li>Start your academic journey with us!</li>
                </ul>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+923152550599" className="btn btn-primary">
                    Call Us: +92 3152550599
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn btn-secondary"
                  >
                    Register Another Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Student Registration</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#d1fae5' }}>
            Join The Sukkur Academy and take the first step towards academic excellence. Fill out the form below to register.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section">
        <div className="container registration-container">
          <div style={{ maxWidth: 'none', margin: '0' }}>
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <User size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <h3 style={{ margin: 0 }}>Personal Information</h3>
                </div>

                <div className="grid-3-columns">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Enter student's full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Enter father's name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Caste</label>
                    <input
                      type="text"
                      name="caste"
                      value={formData.caste}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter caste"
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
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="form-input"
                      required
                      placeholder="03XX-XXXXXXX"
                      maxLength="12"
                      pattern="03[0-9]{2}-[0-9]{7}"
                    />
                    <small style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>
                      Format: 03XX-XXXXXXX (11 digits)
                    </small>
                  </div>

                  <div className="form-group">
                    <label className="form-label">CNIC/B-Form Number</label>
                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleCNICChange}
                      className="form-input"
                      placeholder="XXXXX-XXXXXXX-X"
                      maxLength="15"
                      pattern="[0-9]{5}-[0-9]{7}-[0-9]"
                    />
                    <small style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>
                      Format: XXXXX-XXXXXXX-X (13 digits)
                    </small>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input"
                    rows="3"
                    required
                    placeholder="Enter complete address"
                  ></textarea>
                </div>
              </div>

              {/* Academic Information */}
              <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <BookOpen size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <h3 style={{ margin: 0 }}>Academic Information</h3>
                </div>

                <div className="grid-3-columns">
                  <div className="form-group">
                    <label className="form-label">Board *</label>
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Board</option>
                      {boards.map((board) => (
                        <option key={board} value={board}>{board}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Class for Admission *</label>
                    <select
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="form-select"
                      required
                      disabled={!formData.board}
                    >
                      <option value="">Select Class</option>
                      {formData.board && classes[formData.board]?.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Current School/College</label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter school/college name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Do you want Entrance Test Preparatory Class?</label>
                    <select
                      name="entranceTest"
                      value={formData.entranceTest}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                </div>

                  <div className="form-group">
                    <label className="form-label">MDCAT or ECAT?</label>
                    <select
                      name="examPreparation"
                      value={formData.examPreparation}
                      onChange={handleChange}
                      className="form-select"
                      disabled={formData.entranceTest !== 'yes'}
                    >
                      <option value="">Select Exam</option>
                      <option value="mdcat">MDCAT</option>
                      <option value="ecat">ECAT</option>
                      <option value="both">Both MDCAT & ECAT</option>
                    </select>
                  </div>
                </div>
              </div>


              {/* Submit Button */}
              <div className="text-center">
                <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--gray-50)' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Review and Submit</h4>
                  <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                    Please review all information before submitting. A confirmation email will be sent to your email address.
                  </p>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ fontSize: '1.1rem', padding: '15px 40px' }}
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} style={{ marginRight: '8px' }} />
                        Submit Registration
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

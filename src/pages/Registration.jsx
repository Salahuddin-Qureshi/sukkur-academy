import { useState } from 'react';
import { CheckCircle, Download, User, Mail, Phone, BookOpen, Calendar, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Registration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    whatsapp: '',
    dateOfBirth: '',
    gender: '',
    cnic: '',
    
    // Academic Information
    currentClass: '',
    board: '',
    school: '',
    previousMarks: '',
    
    // Course Selection
    selectedSubjects: [],
    examPreparation: '',
    batchPreference: '',
    
    // Additional Information
    address: '',
    emergencyContact: '',
    medicalConditions: '',
    previousTuition: '',
    goals: '',
    hearAboutUs: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    'Mathematics',
    'Chemistry', 
    'Biology',
    'Physics',
    'English'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'selectedSubjects') {
      setFormData(prev => ({
        ...prev,
        selectedSubjects: checked 
          ? [...prev.selectedSubjects, value]
          : prev.selectedSubjects.filter(subject => subject !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const exportToCSV = (data) => {
    const headers = [
      'Full Name', 'Father Name', 'Email', 'Phone', 'WhatsApp', 'Date of Birth', 'Gender', 'CNIC',
      'Current Class', 'Board', 'School', 'Previous Marks', 'Selected Subjects', 'Exam Preparation',
      'Batch Preference', 'Address', 'Emergency Contact', 'Medical Conditions', 'Previous Tuition',
      'Goals', 'How did you hear about us', 'Registration Date'
    ];

    const csvContent = [
      headers.join(','),
      [
        data.fullName, data.fatherName, data.email, data.phone, data.whatsapp, data.dateOfBirth,
        data.gender, data.cnic, data.currentClass, data.board, data.school, data.previousMarks,
        data.selectedSubjects.join('; '), data.examPreparation, data.batchPreference,
        data.address, data.emergencyContact, data.medicalConditions, data.previousTuition,
        data.goals, data.hearAboutUs, new Date().toLocaleString()
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

  const sendEmailNotification = async (formData) => {
    // EmailJS configuration - You'll need to set these up
    const serviceID = 'service_sukkur_academy'; // You'll get this from EmailJS
    const templateID = 'template_registration'; // You'll get this from EmailJS  
    const publicKey = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS

    const templateParams = {
      to_email: 'info@sukkuracademy.com', // Your email where you want to receive registrations
      student_name: formData.fullName,
      father_name: formData.fatherName,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp || 'Not provided',
      date_of_birth: formData.dateOfBirth || 'Not provided',
      gender: formData.gender || 'Not provided',
      cnic: formData.cnic || 'Not provided',
      current_class: formData.currentClass,
      board: formData.board,
      school: formData.school || 'Not provided',
      previous_marks: formData.previousMarks || 'Not provided',
      selected_subjects: formData.selectedSubjects.join(', '),
      exam_preparation: formData.examPreparation || 'Not selected',
      batch_preference: formData.batchPreference || 'Not selected',
      address: formData.address,
      emergency_contact: formData.emergencyContact || 'Not provided',
      medical_conditions: formData.medicalConditions || 'None',
      previous_tuition: formData.previousTuition || 'Not specified',
      goals: formData.goals || 'Not provided',
      hear_about_us: formData.hearAboutUs || 'Not specified',
      registration_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('EmailJS Error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.currentClass || formData.selectedSubjects.length === 0) {
      alert('Please fill in all required fields and select at least one subject.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification to academy
      const emailSent = await sendEmailNotification(formData);
      
      if (emailSent) {
        // Also export to CSV for student's records
        exportToCSV(formData);
        
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
        
        // Reset form
        setFormData({
          fullName: '', fatherName: '', email: '', phone: '', whatsapp: '', dateOfBirth: '', gender: '', cnic: '',
          currentClass: '', board: '', school: '', previousMarks: '', selectedSubjects: [], examPreparation: '', batchPreference: '',
          address: '', emergencyContact: '', medicalConditions: '', previousTuition: '', goals: '', hearAboutUs: ''
        });
      } else {
        // Fallback: still save locally and export CSV
        exportToCSV(formData);
        alert('Registration saved locally. Please contact the academy directly at 07156354497 to confirm your registration.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Fallback: export CSV and show message
      exportToCSV(formData);
      alert('Registration saved locally. Please contact the academy directly at 07156354497 to confirm your registration.');
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
                Thank you for registering with The Sukkur Academy. Your registration has been sent directly to the academy and a copy has been downloaded to your computer.
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
                  <a href="tel:07156354497" className="btn btn-primary">
                    Call Us: 07156354497
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
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <User size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <h3 style={{ margin: 0 }}>Personal Information</h3>
                </div>

                <div className="grid grid-2">
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
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter WhatsApp number"
                    />
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
                    <label className="form-label">CNIC/B-Form Number</label>
                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter CNIC or B-Form number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Complete Address *</label>
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

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Current Class *</label>
                    <select
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="9th">9th Class</option>
                      <option value="10th">10th Class</option>
                      <option value="11th">11th Class</option>
                      <option value="12th">12th Class</option>
                    </select>
                  </div>

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
                      <option value="sindh">Sindh Board</option>
                      <option value="federal">Federal Board</option>
                      <option value="agha_khan">Agha Khan Board</option>
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
                    <label className="form-label">Previous Year Marks/Grade</label>
                    <input
                      type="text"
                      name="previousMarks"
                      value={formData.previousMarks}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter marks or grade"
                    />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <Calendar size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <h3 style={{ margin: 0 }}>Course Selection</h3>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Subjects (Choose at least one) *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                    {subjects.map((subject) => (
                      <label key={subject} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: '1rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.selectedSubjects.includes(subject) ? 'var(--light-green)' : 'white'
                      }}>
                        <input
                          type="checkbox"
                          name="selectedSubjects"
                          value={subject}
                          checked={formData.selectedSubjects.includes(subject)}
                          onChange={handleChange}
                          style={{ marginRight: '8px' }}
                        />
                        <span style={{ fontWeight: '500' }}>{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Exam Preparation</label>
                    <select
                      name="examPreparation"
                      value={formData.examPreparation}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Exam</option>
                      <option value="mdcat">MDCAT</option>
                      <option value="ecat">ECAT</option>
                      <option value="both">Both MDCAT & ECAT</option>
                      <option value="board_only">Board Exams Only</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Batch Preference</label>
                    <select
                      name="batchPreference"
                      value={formData.batchPreference}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Preference</option>
                      <option value="mixed">Mixed Batch</option>
                      <option value="girls_only">Girls Only Batch</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Additional Information</h3>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Emergency Contact</label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter emergency contact number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Previous Tuition Experience</label>
                    <select
                      name="previousTuition"
                      value={formData.previousTuition}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Medical Conditions (if any)</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    className="form-input"
                    rows="2"
                    placeholder="Mention any medical conditions or allergies"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Academic Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className="form-input"
                    rows="3"
                    placeholder="What are your academic and career goals?"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">How did you hear about us?</label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select</option>
                    <option value="friend">Friend/Family</option>
                    <option value="social_media">Social Media</option>
                    <option value="poster">Poster/Advertisement</option>
                    <option value="website">Website</option>
                    <option value="school">School</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--gray-50)' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Review and Submit</h4>
                  <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                    Please review all information before submitting. Your registration data will be downloaded as a CSV file.
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

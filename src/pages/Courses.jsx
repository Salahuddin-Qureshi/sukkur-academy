import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, CheckCircle, Target, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      instructor: "Prof Badar Qureshi",
      classes: "9th, 10th, 11th, 12th",
      description: "Comprehensive mathematics program covering algebra, calculus, geometry, and advanced topics for MDCAT/ECAT preparation.",
      features: ["Problem-solving techniques", "Conceptual clarity", "Practice worksheets", "Weekly assessments"],
      fee: "20,000",
      icon: "📐"
    },
    {
      title: "Chemistry", 
      instructor: "Prof A Sattar Soomro",
      classes: "9th, 10th, 11th, 12th",
      description: "Complete chemistry curriculum including organic, inorganic, and physical chemistry with practical applications.",
      features: ["Laboratory concepts", "Chemical equations", "Periodic table mastery", "Reaction mechanisms"],
      fee: "20,000",
      icon: "⚗️"
    },
    {
      title: "English",
      instructor: "Prof Zulfiqar Ali Panhwar", 
      classes: "9th, 10th, 11th, 12th",
      description: "English language and literature program focusing on grammar, composition, and comprehension skills.",
      features: ["Grammar fundamentals", "Essay writing", "Literature analysis", "Vocabulary building"],
      fee: "20,000",
      icon: "📚"
    },
    {
      title: "Biology",
      instructor: "Prof Farhan Soomro & Prof Ranjeet Kumar",
      classes: "9th, 10th, 11th, 12th", 
      description: "Comprehensive biology program covering botany, zoology, and human biology for medical entrance preparation.",
      features: ["MDCAT preparation", "Diagram practice", "Conceptual understanding", "System-wise study"],
      fee: "20,000",
      icon: "🧬"
    },
    {
      title: "Physics",
      instructor: "Prof Atta M Chachar",
      classes: "9th, 10th, 11th, 12th",
      description: "Complete physics curriculum with emphasis on mechanics, thermodynamics, electromagnetism, and modern physics.",
      features: ["Problem solving", "Formula applications", "Numerical practice", "Concept building"],
      fee: "20,000", 
      icon: "⚛️"
    }
  ];

  const examPrep = [
    {
      title: "MDCAT Preparation",
      description: "Medical and Dental College Admission Test preparation with comprehensive coverage of Biology, Chemistry, Physics, and English.",
      features: ["Past papers practice", "Mock tests", "Time management", "Subject-wise preparation"],
      duration: "6-12 months"
    },
    {
      title: "ECAT Preparation", 
      description: "Engineering College Admission Test preparation focusing on Mathematics, Physics, Chemistry, and English.",
      features: ["Engineering mathematics", "Applied physics", "Problem-solving", "Exam strategies"],
      duration: "6-12 months"
    }
  ];

  const boards = [
    { name: "Sindh Board", icon: "🏛️" },
    { name: "Agha Khan Board", icon: "🎓" },
    { name: "Federal Board", icon: "🏢" }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Our Courses</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#d1fae5' }}>
            Comprehensive academic programs designed to help students excel in their studies and competitive examinations.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Subject-wise Programs</h2>
            <p style={{ fontSize: '1.1rem' }}>Expert instruction in all major subjects for classes 9th to 12th</p>
          </div>

          <div className="grid grid-3">
            {courses.map((course, index) => (
              <div key={index} className="card" style={{ height: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{course.icon}</div>
                  <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>{course.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{course.instructor}</p>
                  <div style={{ 
                    backgroundColor: 'var(--gray-100)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    Classes: {course.classes}
                  </div>
                </div>

                <p style={{ marginBottom: '1.5rem' }}>{course.description}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ marginBottom: '1rem' }}>Course Features:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {course.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        <CheckCircle size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ 
                  marginTop: 'auto',
                  padding: '1rem 0',
                  borderTop: '1px solid var(--gray-200)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: 'var(--primary-green)',
                    marginBottom: '0.5rem'
                  }}>
                    Rs. {course.fee}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>per course</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Entrance Exam Preparation</h2>
            <p style={{ fontSize: '1.1rem' }}>Specialized programs for medical and engineering entrance tests</p>
          </div>

          <div className="grid grid-2">
            {examPrep.map((exam, index) => (
              <div key={index} className="card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <Target size={40} style={{ color: 'var(--primary-green)', marginRight: '1rem' }} />
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{exam.title}</h3>
                    <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '0.9rem' }}>
                      Duration: {exam.duration}
                    </p>
                  </div>
                </div>

                <p style={{ marginBottom: '1.5rem' }}>{exam.description}</p>

                <div>
                  <h5 style={{ marginBottom: '1rem' }}>Program Highlights:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exam.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '0.5rem'
                      }}>
                        <Award size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boards & Schedule */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Boards */}
            <div>
              <h2 className="text-green">Boards We Cover</h2>
              <p style={{ marginBottom: '2rem' }}>
                We provide comprehensive preparation for all major educational boards to ensure students are well-prepared regardless of their board affiliation.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {boards.map((board, index) => (
                  <div key={index} className="card" style={{ 
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{ fontSize: '2rem' }}>{board.icon}</div>
                    <h4 style={{ margin: 0, color: 'var(--primary-green)' }}>{board.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule & Info */}
            <div>
              <div className="card" style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--primary-green)', 
                color: 'white' 
              }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Class Schedule & Information</h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Clock size={24} style={{ marginRight: '12px' }} />
                    <div>
                      <h5 style={{ color: 'white', margin: 0 }}>Class Timing</h5>
                      <p style={{ color: '#d1fae5', margin: 0 }}>04:00 PM to 07:00 PM</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Users size={24} style={{ marginRight: '12px' }} />
                    <div>
                      <h5 style={{ color: 'white', margin: 0 }}>Batch Size</h5>
                      <p style={{ color: '#d1fae5', margin: 0 }}>Small batches for personalized attention</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <BookOpen size={24} style={{ marginRight: '12px' }} />
                    <div>
                      <h5 style={{ color: 'white', margin: 0 }}>Study Material</h5>
                      <p style={{ color: '#d1fae5', margin: 0 }}>Comprehensive notes and practice materials</p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  padding: '1.5rem', 
                  borderRadius: '12px' 
                }}>
                  <h5 style={{ color: 'white', marginBottom: '1rem' }}>Special Features</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Weekly and Monthly Tests</li>
                    <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Separate Groups for Girls</li>
                    <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Conceptual Clarity Focus</li>
                    <li style={{ color: '#f0fdf4' }}>• Affordable Fee Structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Start Your Academic Journey?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join our expert-led programs and give yourself the best chance of success in your academic and professional goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/registration" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Register Now
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

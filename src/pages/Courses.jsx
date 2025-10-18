import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, CheckCircle, Target, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      classes: "9th, 10th, 11th, 12th",
      description: "Comprehensive mathematics program covering algebra, calculus, geometry, and advanced topics for MDCAT/ECAT preparation.",
      features: ["Problem-solving techniques", "Conceptual clarity", "Practice worksheets", "Weekly assessments"],
      icon: "📐"
    },
    {
      title: "Chemistry", 
      classes: "9th, 10th, 11th, 12th",
      description: "Complete chemistry curriculum including organic, inorganic, and physical chemistry with practical applications.",
      features: ["Laboratory concepts", "Chemical equations", "Periodic table mastery", "Reaction mechanisms"],
      icon: "⚗️"
    },
    {
      title: "English",
      classes: "9th, 10th, 11th, 12th",
      description: "English language and literature program focusing on grammar, composition, and comprehension skills.",
      features: ["Grammar fundamentals", "Essay writing", "Literature analysis", "Vocabulary building"],
      icon: "📚"
    },
    {
      title: "Biology",
      classes: "9th, 10th, 11th, 12th", 
      description: "Comprehensive biology program covering botany, zoology, and human biology for medical entrance preparation.",
      features: ["MDCAT preparation", "Diagram practice", "Conceptual understanding", "System-wise study"],
      icon: "🧬"
    },
    {
      title: "Physics",
      classes: "9th, 10th, 11th, 12th",
      description: "Complete physics curriculum with emphasis on mechanics, thermodynamics, electromagnetism, and modern physics.",
      features: ["Problem solving", "Formula applications", "Numerical practice", "Concept building"],
      icon: "⚛️"
    },
    {
      title: "Information Technology",
      classes: "9th, 10th, 11th, 12th",
      description: "Modern IT education covering computer fundamentals, web development basics, and introduction to artificial intelligence.",
      features: ["Computer Knowledge", "Web Development", "AI Basics", "Digital Literacy"],
      icon: "💻"
    }
  ];

  const examPrep = [
    {
      title: "MDCAT Preparation",
      description: "Medical and Dental College Admission Test preparation with comprehensive coverage of Biology, Chemistry, Physics, and English.",
      features: ["Past papers practice", "Mock tests", "Time management", "Subject-wise preparation"]
    },
    {
      title: "ECAT Preparation", 
      description: "Engineering College Admission Test preparation focusing on Mathematics, Physics, Chemistry, and English.",
      features: ["Engineering mathematics", "Applied physics", "Problem-solving", "Exam strategies"]
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
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Subject-wise Programs
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#64748b',
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Expert instruction in all major subjects for classes 9th to 12th
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem'
          }}>
            {courses.map((course, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--primary-green), #059669)'
                }}></div>

                {/* Header section */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-green), #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                    flexShrink: 0
                  }}>
                    {course.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      color: '#1e293b', 
                      marginBottom: '0',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ 
                  marginBottom: '1rem', 
                  color: '#64748b',
                  lineHeight: '1.5',
                  fontSize: '0.9rem'
                }}>
                  {course.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '1rem' }}>
                  <h5 style={{ 
                    marginBottom: '0.8rem',
                    color: '#1e293b',
                    fontSize: '0.95rem',
                    fontWeight: '600'
                  }}>
                    Key Features:
                  </h5>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '0.4rem' 
                  }}>
                    {course.features.map((feature, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        fontSize: '0.8rem',
                        color: '#475569'
                      }}>
                        <CheckCircle size={14} style={{ 
                          color: 'var(--primary-green)', 
                          marginRight: '6px',
                          flexShrink: 0
                        }} />
                        <span style={{ lineHeight: '1.3' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Entrance Exam Preparation
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#64748b',
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Specialized programs for medical and engineering entrance tests
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem'
          }}>
            {examPrep.map((exam, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}>
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--primary-green), #059669)'
                }}></div>

                {/* Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-green), #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1.5rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)'
                  }}>
                    <Target size={32} />
                  </div>
                  <div>
                    <h3 style={{ 
                      marginBottom: '0.5rem',
                      color: '#1e293b',
                      fontSize: '1.4rem',
                      fontWeight: '600'
                    }}>
                      {exam.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ 
                  marginBottom: '2rem', 
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {exam.description}
                </p>

                {/* Features */}
                <div>
                  <h5 style={{ 
                    marginBottom: '1.2rem',
                    color: '#1e293b',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Program Highlights:
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exam.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '0.8rem',
                        fontSize: '0.95rem',
                        color: '#475569'
                      }}>
                        <Award size={18} style={{ 
                          color: 'var(--primary-green)', 
                          marginRight: '12px',
                          flexShrink: 0
                        }} />
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
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Boards */}
            <div>
              <h2 style={{ 
                color: '#1e293b',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Boards We Cover
              </h2>
              <p style={{ 
                marginBottom: '2rem',
                color: '#64748b',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>
                We provide comprehensive preparation for all major educational boards to ensure students are well-prepared regardless of their board affiliation.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {boards.map((board, index) => (
                  <div key={index} style={{ 
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  }}>
                    <div style={{ 
                      fontSize: '2.5rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}>
                      {board.icon}
                    </div>
                    <h4 style={{ 
                      margin: 0, 
                      color: '#1e293b',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {board.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule & Info */}
            <div>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
                borderRadius: '24px',
                padding: '2.5rem', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  zIndex: 1
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '2rem',
                    fontSize: '1.8rem',
                    fontWeight: '700'
                  }}>
                    Class Schedule & Information
                  </h3>
                
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <Clock size={28} style={{ marginRight: '1rem', color: '#fef3c7' }} />
                    <div>
                        <h5 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>Class Timing</h5>
                        <p style={{ color: '#d1fae5', margin: 0, fontSize: '1rem' }}>04:00 PM to 07:00 PM</p>
                    </div>
                  </div>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <Users size={28} style={{ marginRight: '1rem', color: '#fef3c7' }} />
                    <div>
                        <h5 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>Batch Size</h5>
                        <p style={{ color: '#d1fae5', margin: 0, fontSize: '1rem' }}>Small batches for personalized attention</p>
                    </div>
                  </div>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '2rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <BookOpen size={28} style={{ marginRight: '1rem', color: '#fef3c7' }} />
                    <div>
                        <h5 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>Study Material</h5>
                        <p style={{ color: '#d1fae5', margin: 0, fontSize: '1rem' }}>Comprehensive notes and practice materials</p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  padding: '1.5rem', 
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <h5 style={{ 
                      color: 'white', 
                      marginBottom: '1rem',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      Special Features
                    </h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ 
                        marginBottom: '0.8rem', 
                        color: '#f0fdf4',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <CheckCircle size={18} style={{ marginRight: '10px', color: '#fef3c7' }} />
                        Weekly and Monthly Tests
                      </li>
                      
                      <li style={{ 
                        marginBottom: '0.8rem', 
                        color: '#f0fdf4',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <CheckCircle size={18} style={{ marginRight: '10px', color: '#fef3c7' }} />
                        Conceptual Clarity Focus
                      </li>
                      <li style={{ 
                        color: '#f0fdf4',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <CheckCircle size={18} style={{ marginRight: '10px', color: '#fef3c7' }} />
                        Affordable Fee Structure
                      </li>
                  </ul>
                  </div>
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

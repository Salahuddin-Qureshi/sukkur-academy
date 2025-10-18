import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BookOpen, Award, Clock } from 'lucide-react';
import studentsImage from '../assets/studentsimage1.png';

const Home = () => {
  const features = [
    {
      icon: <Users size={40} />,
      title: "Highly Qualified Faculty",
      description: "Learn from subject expert professors dedicated to student success"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Comprehensive Courses",
      description: "Well-structured curriculum covering all essential subjects for Classes 9th to 12th"
    },
    {
      icon: <Award size={40} />,
      title: "Proven Results",
      description: "Track record of student success in competitive exams"
    },
    {
      icon: <Clock size={40} />,
      title: "Flexible Timing",
      description: "Evening classes from 04:00 PM to 07:00 PM"
    }
  ];

  const subjects = [
    { 
      name: "Mathematics",
      description: "Master problem-solving with advanced mathematical concepts and techniques",
      color: "#3b82f6"
    },
    { 
      name: "Chemistry",
      description: "Explore chemical reactions, molecular structures, and practical applications",
      color: "#8b5cf6"
    },
    { 
      name: "English",
      description: "Develop communication skills through literature, grammar, and composition",
      color: "#ef4444"
    },
    { 
      name: "Biology",
      description: "Understand life sciences, human anatomy, and ecological systems",
      color: "#10b981"
    },
    { 
      name: "Physics",
      description: "Learn fundamental laws of nature, mechanics, and energy principles",
      color: "#f59e0b"
    },
    { 
      name: "Information Technology",
      description: "Build digital literacy with computer science and technology fundamentals",
      color: "#06b6d4"
    }
  ];

  const benefits = [
    "Highly Qualified Faculty",
    "Affordable Fees",
    "Weekly & Monthly test",
    "Conceptual Clarity",
    "Individual Attention & Support",
    "Sindh Board, Agha Khan Board, and Federal Board"
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div className="fade-in">
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: 'white',
                lineHeight: '1.2',
                whiteSpace: 'nowrap'
              }}>
                THE SUKKUR ACADEMY
              </h1>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#a7f3d0', 
                marginBottom: '1.5rem',
                fontWeight: '400'
              }}>
                Your Path to Academic Excellence
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: '#d1fae5',
                lineHeight: '1.6'
              }}>
                Empowering students from Classes 9th to 12th with comprehensive MDCAT & ECAT preparation. We provide quality education through highly qualified and subject expert professors, dedicated to nurturing your academic success and helping you achieve your goals.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/registration" className="btn" style={{
                  backgroundColor: 'white',
                  color: 'var(--primary-green)',
                  fontSize: '1.1rem',
                  padding: '15px 30px'
                }}>
                  Register Now <ArrowRight style={{ marginLeft: '8px' }} size={20} />
                </Link>
                <Link to="/courses" className="btn btn-secondary" style={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: '15px 30px'
                }}>
                  View Courses
                </Link>
              </div>
            </div>
            
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <img 
                src={studentsImage}
                alt="Students learning"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  // height: '300px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Why Choose The Sukkur Academy?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              We are committed to providing the highest quality education with experienced faculty and proven teaching methods.
            </p>
          </div>
          
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  color: 'var(--primary-green)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'linear-gradient(135deg, var(--primary-green)20, var(--primary-green)10)',
              borderRadius: '50px',
              marginBottom: '1rem'
            }}>
              <span style={{
                color: 'var(--primary-green)',
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Our Curriculum
              </span>
            </div>
            <h2 style={{ 
              fontSize: '2.8rem', 
              fontWeight: '800', 
              color: '#1e293b',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Subjects We Offer
            </h2>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#64748b',
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Learn from the best professors in each subject with years of experience and proven track records.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {subjects.map((subject, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
                const overlay = e.currentTarget.querySelector('.subject-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                const overlay = e.currentTarget.querySelector('.subject-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}>
                {/* Gradient Overlay */}
                <div 
                  className="subject-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${subject.color}15, ${subject.color}05)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    zIndex: 0
                  }}
                ></div>
                
                {/* Decorative Element */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `${subject.color}10`,
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Icon Circle */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: '700',
                    boxShadow: `0 8px 20px ${subject.color}40`,
                    transform: 'rotate(-5deg)'
                  }}>
                    {subject.name.charAt(0)}
                  </div>
                  
                  {/* Subject Name */}
                  <h3 style={{ 
                    color: '#1e293b', 
                    margin: '0 0 0.75rem 0',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}>
                    {subject.name}
                  </h3>
                  
                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {subject.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
            borderRadius: '24px',
            padding: '3rem',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              zIndex: 1
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              zIndex: 1
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ 
                color: 'white', 
                marginBottom: '2rem',
                fontSize: '2rem',
                fontWeight: '700'
              }}>
                Why Choose Us?
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                textAlign: 'left'
              }}>
                  {benefits.map((benefit, index) => (
                  <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '1rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <CheckCircle size={24} style={{ marginRight: '1rem', flexShrink: 0, color: '#fef3c7' }} />
                    <span style={{ fontSize: '16px', fontWeight: '500' }}>
                      {benefit}
                    </span>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Start Your Journey?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join The Sukkur Academy today and take the first step towards achieving your academic goals with expert guidance and proven teaching methods.
            </p>
            <Link to="/registration" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
              Register Now <ArrowRight style={{ marginLeft: '8px' }} size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

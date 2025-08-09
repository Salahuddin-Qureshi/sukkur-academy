import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BookOpen, Award, Clock } from 'lucide-react';

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
      description: "MDCAT & ECAT preparation for classes 9th to 12th"
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
    { name: "Mathematics", instructor: "Prof Badar Qureshi" },
    { name: "Chemistry", instructor: "Prof A Sattar Soomro" },
    { name: "English", instructor: "Prof Zulfiqar Ali Panhwar" },
    { name: "Biology", instructor: "Prof Farhan Soomro & Prof Ranjeet Kumar" },
    { name: "Physics", instructor: "Prof Atta M Chachar" }
  ];

  const benefits = [
    "Highly Qualified Faculty",
    "Affordable Fees - 20k per course",
    "Weekly & Monthly test",
    "Conceptual Clarity",
    "Separate Group for Girls",
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
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: 'white',
                lineHeight: '1.2'
              }}>
                THE SUKKUR ACADEMY
              </h1>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#a7f3d0', 
                marginBottom: '1.5rem',
                fontWeight: '400'
              }}>
                Announces MDCAT & ECAT
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: '#d1fae5',
                lineHeight: '1.6'
              }}>
                For Classes 9th, 10th, 11th and 12th. We provide quality education through highly qualified and subject expert professors, dedicated to student success.
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
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Classes Start on</h3>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#fef3c7',
                  marginBottom: '1rem'
                }}>
                  11th August
                </div>
                <div style={{ color: '#d1fae5' }}>
                  <Clock style={{ display: 'inline', marginRight: '8px' }} size={20} />
                  04:00 PM to 07:00 PM
                </div>
              </div>
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
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="text-green">Subjects We Offer</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Learn from the best professors in each subject with years of experience and proven track records.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {subjects.map((subject, index) => (
                  <div key={index} className="card" style={{ padding: '1.5rem' }}>
                    <h4 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
                      {subject.name}
                    </h4>
                    <p style={{ margin: 0, color: 'var(--text-light)' }}>
                      {subject.instructor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--primary-green)', color: 'white' }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Why Choose Us?</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {benefits.map((benefit, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '1rem',
                      fontSize: '16px'
                    }}>
                      <CheckCircle size={20} style={{ marginRight: '12px', flexShrink: 0 }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
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

import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Students Enrolled", icon: <Users size={30} /> },
    { number: "15+", label: "Years Experience", icon: <Award size={30} /> },
    { number: "5", label: "Expert Subjects", icon: <BookOpen size={30} /> },
    { number: "95%", label: "Success Rate", icon: <Target size={30} /> }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching methods to student support."
    },
    {
      icon: <Heart size={40} />,
      title: "Dedication",
      description: "Our faculty is dedicated to each student's success and personal growth."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Innovation",
      description: "We use modern teaching techniques and technology to enhance learning."
    },
    {
      icon: <Users size={40} />,
      title: "Community",
      description: "We foster a supportive learning community where students thrive together."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>About The Sukkur Academy</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#d1fae5' }}>
            Where Experience Meets Excellence - Dedicated to providing quality education and shaping the future of our students through expert guidance and proven teaching methods.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h2 className="text-green">Our Story</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The Sukkur Academy was founded with a vision to provide high-quality education to students in Sukkur and surrounding areas. Our academy specializes in preparing students for MDCAT and ECAT examinations, ensuring they have the best possible foundation for their future careers in medicine and engineering.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Located at Hira School in the heart of Sukkur, we have been serving the educational needs of students from classes 9th to 12th. Our experienced faculty members are subject experts who bring years of teaching experience and a deep understanding of competitive exam patterns.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                We believe that every student has the potential to excel, and our mission is to unlock that potential through personalized attention, comprehensive curriculum, and a supportive learning environment.
              </p>
            </div>
            
            <div>
              <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--gray-50)' }}>
                <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Our Mission</h3>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Eye size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <span style={{ fontWeight: '600' }}>Vision</span>
                </div>
                <p style={{ marginBottom: '1.5rem', paddingLeft: '36px' }}>
                  To be the leading educational institution in Sukkur, recognized for excellence in MDCAT and ECAT preparation and student success.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Target size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <span style={{ fontWeight: '600' }}>Mission</span>
                </div>
                <p style={{ paddingLeft: '36px' }}>
                  To provide quality education through highly qualified faculty, innovative teaching methods, and comprehensive support to help students achieve their academic and career goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Our Achievements</h2>
            <p style={{ fontSize: '1.1rem' }}>Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  color: 'var(--primary-green)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  color: 'var(--primary-green)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </h3>
                <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Our Core Values</h2>
            <p style={{ fontSize: '1.1rem' }}>The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="card" style={{ padding: '2rem' }}>
                <div style={{ 
                  color: 'var(--primary-green)', 
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h4 style={{ marginBottom: '1rem' }}>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h2 className="text-green">Our Location</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Conveniently located in the heart of Sukkur, our academy is easily accessible to students from all parts of the city and surrounding areas.
              </p>
              
              <div className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Address Details</h4>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Location:</strong> Hira School Bunglow no.29
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Area:</strong> Sector 3, opposite Imam bargha ladies' gate
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>City:</strong> Sukkur Township
                </p>
                <p>
                  <strong>Timing:</strong> 04:00 PM to 07:00 PM
                </p>
              </div>
            </div>
            
            <div>
              <div className="card" style={{ 
                padding: '2rem', 
                backgroundColor: 'var(--primary-green)', 
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Visit Us Today</h3>
                <p style={{ marginBottom: '2rem', color: '#d1fae5' }}>
                  Come and see our facilities, meet our faculty, and learn more about how we can help you achieve your academic goals.
                </p>
                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Information</h4>
                  <p style={{ margin: '0.5rem 0', color: '#f0fdf4' }}>📞 07156354497</p>
                  <p style={{ margin: '0.5rem 0', color: '#f0fdf4' }}>📞 03000555547</p>
                  <p style={{ margin: '0.5rem 0', color: '#f0fdf4' }}>✉️ info@sukkuracademy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

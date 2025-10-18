import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Students Enrolled", icon: <Users size={30} /> },
    { number: "15+", label: "Years Experience", icon: <Award size={30} /> },
    { number: "6+", label: "Expert Subjects", icon: <BookOpen size={30} /> },
    { number: "95%", label: "Success Rate", icon: <Target size={30} /> }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: "Accessibility",
      description: "Making quality education accessible to underprivileged students through affordable fees and comprehensive support."
    },
    {
      icon: <Heart size={40} />,
      title: "Empowerment",
      description: "Empowering students with scientific knowledge and technological skills to transform their future prospects."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Innovation",
      description: "Integrating modern IT education alongside traditional subjects to prepare students for the digital age."
    },
    {
      icon: <Users size={40} />,
      title: "Inclusivity",
      description: "Creating an inclusive learning environment where every student has the opportunity to excel regardless of their background."
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
            Your Path to Academic Excellence - Dedicated to bridging the educational gap for underprivileged students through quality education in science, mathematics, and computing technology.
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
                The Sukkur Academy was founded with a vision to bridge the educational gap for underprivileged students in Sukkur and surrounding areas. We believe that quality education in science, mathematics, and computing technology should be accessible to all students, regardless of their economic background.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Located at Hira School in Sukkur Township, we serve students from Classes 9th to 12th, offering comprehensive education in core subjects including Mathematics, Physics, Chemistry, Biology, and English. We also specialize in MDCAT & ECAT preparation for aspiring medical and engineering students.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Beyond traditional subjects, we've expanded our curriculum to include Information Technology courses covering Computer Knowledge, Web Development, and AI Basics, preparing students for the digital age and opening doors to modern career opportunities.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                Our mission is to empower students with scientific knowledge and technological skills, enabling them to see the world through the lens of science, mathematics, and computing, ultimately transforming their future prospects.
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
                  To bridge the educational gap for underprivileged students by providing accessible, quality education in science, mathematics, and computing technology, empowering them to see and work with the world through scientific knowledge and technological innovation.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Target size={24} style={{ color: 'var(--primary-green)', marginRight: '12px' }} />
                  <span style={{ fontWeight: '600' }}>Mission</span>
                </div>
                <p style={{ paddingLeft: '36px' }}>
                  To provide comprehensive education from Classes 9th to 12th, including MDCAT & ECAT preparation and modern IT courses (Computer Knowledge, Web Development, AI Basics), through qualified faculty and affordable fees, ensuring every student has the opportunity to excel.
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
                  <strong>City:</strong> Sukkur
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
                  <p style={{ margin: '0.5rem 0', color: '#f0fdf4' }}>📞 +92 3152550599</p>
                  <p style={{ margin: '0.5rem 0', color: '#f0fdf4' }}>✉️ thesukkuracademy@gmail.com</p>
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

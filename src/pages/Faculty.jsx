import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Prof Badar Qureshi",
      subject: "Mathematics",
      experience: "15+ Years",
      education: "M.Sc Mathematics, B.Ed",
      specialization: "Advanced Mathematics, MDCAT/ECAT Preparation",
      achievements: ["500+ Students Guided", "95% Success Rate", "MDCAT Math Expert"],
      description: "Prof Badar Qureshi brings over 15 years of experience in teaching mathematics. His innovative teaching methods and deep understanding of mathematical concepts have helped hundreds of students excel in their examinations.",
      icon: "📐"
    },
    {
      name: "Prof A Sattar Soomro", 
      subject: "Chemistry",
      experience: "12+ Years",
      education: "M.Sc Chemistry, Ph.D Chemistry",
      specialization: "Organic & Inorganic Chemistry, Laboratory Techniques",
      achievements: ["Research Publications", "Chemistry Olympiad Judge", "MDCAT Chemistry Specialist"],
      description: "Dr. A Sattar Soomro holds a Ph.D in Chemistry and has extensive research experience. He specializes in making complex chemical concepts simple and understandable for students.",
      icon: "⚗️"
    },
    {
      name: "Prof Zulfiqar Ali Panhwar",
      subject: "English",
      experience: "10+ Years", 
      education: "M.A English Literature, M.Ed",
      specialization: "English Grammar, Literature Analysis, Essay Writing",
      achievements: ["Published Author", "Language Expert", "Communication Skills Trainer"],
      description: "Prof Zulfiqar Ali Panhwar is an expert in English language and literature. His comprehensive approach to language learning has helped students improve their communication skills significantly.",
      icon: "📚"
    },
    {
      name: "Prof Farhan Soomro",
      subject: "Biology",
      experience: "8+ Years",
      education: "M.Sc Botany, M.Phil Biology", 
      specialization: "Botany, Plant Sciences, MDCAT Biology",
      achievements: ["Botany Research", "MDCAT Biology Expert", "Science Fair Judge"],
      description: "Prof Farhan Soomro specializes in botany and plant sciences. His detailed knowledge of biological systems and processes makes complex topics accessible to students.",
      icon: "🌱"
    },
    {
      name: "Prof Ranjeet Kumar",
      subject: "Biology", 
      experience: "9+ Years",
      education: "M.Sc Zoology, B.Ed",
      specialization: "Zoology, Human Biology, Animal Sciences",
      achievements: ["Zoology Expert", "Medical Biology Specialist", "Research Experience"],
      description: "Prof Ranjeet Kumar brings expertise in zoology and human biology. His practical approach to teaching biological concepts helps students understand the intricacies of life sciences.",
      icon: "🧬"
    },
    {
      name: "Prof Atta M Chachar",
      subject: "Physics",
      experience: "14+ Years",
      education: "M.Sc Physics, M.Phil Physics",
      specialization: "Mechanics, Electromagnetism, Modern Physics", 
      achievements: ["Physics Research", "ECAT Physics Expert", "Science Competition Judge"],
      description: "Prof Atta M Chachar is a seasoned physics educator with extensive research background. His ability to explain complex physics concepts through practical examples is highly appreciated by students.",
      icon: "⚛️"
    }
  ];

  const qualifications = [
    {
      title: "Advanced Degrees",
      description: "All faculty members hold advanced degrees in their respective subjects",
      icon: <GraduationCap size={40} />
    },
    {
      title: "Proven Experience", 
      description: "Collective experience of over 60+ years in teaching and education",
      icon: <Award size={40} />
    },
    {
      title: "Research Background",
      description: "Many faculty members have research publications and academic achievements",
      icon: <BookOpen size={40} />
    },
    {
      title: "Student Success",
      description: "Track record of helping thousands of students achieve their academic goals",
      icon: <Users size={40} />
    }
  ];

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Our Expert Faculty</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#d1fae5' }}>
            Meet our team of highly qualified and experienced professors who are dedicated to your academic success and personal growth.
          </p>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Why Our Faculty Stands Out</h2>
            <p style={{ fontSize: '1.1rem' }}>Exceptional qualifications and proven track record of student success</p>
          </div>

          <div className="grid grid-4">
            {qualifications.map((qual, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  color: 'var(--primary-green)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {qual.icon}
                </div>
                <h4>{qual.title}</h4>
                <p>{qual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Meet Our Professors</h2>
            <p style={{ fontSize: '1.1rem' }}>Get to know the experts who will guide your academic journey</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="card" style={{ padding: '2rem' }}>
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '2rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ 
                        fontSize: '3rem', 
                        backgroundColor: 'var(--gray-50)', 
                        padding: '1rem',
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {faculty.icon}
                      </div>
                      <div>
                        <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
                          {faculty.name}
                        </h3>
                        <p style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: '600', 
                          color: 'var(--text-dark)',
                          margin: 0 
                        }}>
                          {faculty.subject} Professor
                        </p>
                        <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '0.9rem' }}>
                          {faculty.experience} Experience
                        </p>
                      </div>
                    </div>

                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                      {faculty.description}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ marginBottom: '0.5rem' }}>Education:</h5>
                      <p style={{ color: 'var(--text-light)', margin: 0 }}>{faculty.education}</p>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ marginBottom: '0.5rem' }}>Specialization:</h5>
                      <p style={{ color: 'var(--text-light)', margin: 0 }}>{faculty.specialization}</p>
                    </div>
                  </div>

                  <div>
                    <div className="card" style={{ 
                      backgroundColor: 'var(--gray-50)', 
                      padding: '1.5rem',
                      height: '100%'
                    }}>
                      <h5 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>
                        Key Achievements
                      </h5>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {faculty.achievements.map((achievement, idx) => (
                          <li key={idx} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '0.8rem',
                            padding: '0.5rem',
                            backgroundColor: 'white',
                            borderRadius: '8px'
                          }}>
                            <Award size={16} style={{ 
                              color: 'var(--primary-green)', 
                              marginRight: '8px',
                              flexShrink: 0
                            }} />
                            <span style={{ fontSize: '0.9rem' }}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Our Teaching Philosophy</h2>
            <p style={{ fontSize: '1.1rem' }}>The principles that guide our educational approach</p>
          </div>

          <div className="grid grid-2" style={{ gap: '3rem' }}>
            <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--primary-green)', color: 'white' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Student-Centered Learning</h3>
              <p style={{ marginBottom: '1.5rem', color: '#d1fae5', lineHeight: '1.6' }}>
                We believe every student learns differently. Our faculty adapts teaching methods to match individual learning styles, ensuring no student is left behind.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Personalized attention to each student</li>
                <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Regular feedback and progress tracking</li>
                <li style={{ marginBottom: '0.5rem', color: '#f0fdf4' }}>• Adaptive teaching methodologies</li>
                <li style={{ color: '#f0fdf4' }}>• Encouraging environment for questions</li>
              </ul>
            </div>

            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Practical Application</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Our faculty emphasizes the practical application of theoretical concepts, helping students understand not just what to learn, but why it matters.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.5rem'
                }}>
                  <BookOpen size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                  Real-world problem solving
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.5rem'
                }}>
                  <BookOpen size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                  Conceptual understanding over memorization
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.5rem'
                }}>
                  <BookOpen size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                  Interactive learning sessions
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center'
                }}>
                  <BookOpen size={16} style={{ color: 'var(--primary-green)', marginRight: '8px' }} />
                  Hands-on practice and application
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Faculty */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h2>Want to Meet Our Faculty?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Schedule a visit to meet our professors, discuss your academic goals, and see how we can help you succeed.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:07156354497" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Call Us: 07156354497
              </a>
              <a href="mailto:info@sukkuracademy.com" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 30px' }}>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

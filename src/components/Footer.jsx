import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--text-dark)', color: 'white' }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: '3rem 0 2rem' }}>
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          {/* Academy Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'var(--primary-green)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                TSA
              </div>
              <h4 style={{ color: 'white', margin: 0 }}>The Sukkur Academy</h4>
            </div>
            <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
              Providing quality education through highly qualified and subject expert professors, dedicated to student success.
            </p>
            <p style={{ color: 'var(--primary-green)', fontWeight: '600' }}>
              "Where Experience Meets Excellence"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Courses', href: '/courses' },
                { name: 'Faculty', href: '/faculty' },
                { name: 'Registration', href: '/registration' }
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <Link 
                    to={link.href} 
                    style={{ 
                      color: '#9ca3af', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--primary-green)' }} />
                <div>
                  <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>07156354497</p>
                  <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>03000555547</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--primary-green)' }} />
                <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>info@sukkuracademy.com</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ color: 'var(--primary-green)', marginTop: '2px' }} />
                <div>
                  <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>Hira School Bunglow no.29</p>
                  <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>Sector 3, Sukkur Township</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} style={{ color: 'var(--primary-green)' }} />
                <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>04:00 PM to 07:00 PM</p>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Our Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '14px' }}>
                MDCAT & ECAT Preparation
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '14px' }}>
                Classes 9th to 12th
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '14px' }}>
                Mathematics, Chemistry, Biology
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '14px' }}>
                Physics, English
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '14px' }}>
                Sindh, Agha Khan & Federal Board
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ 
        borderTop: '1px solid #374151', 
        padding: '1.5rem 0',
        backgroundColor: '#111827'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ color: '#9ca3af', margin: 0, fontSize: '14px' }}>
              © {currentYear} The Sukkur Academy. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="#" 
                style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                style={{ color: '#9ca3af', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

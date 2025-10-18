import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    // { name: 'Faculty', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar" style={{ backgroundColor: 'var(--primary-green)', color: 'white', padding: '8px 0', fontSize: '14px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={14} />
                <span>+92 3152550599</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={14} />
                <span>thesukkuracademy@gmail.com</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={14} />
              <span>Hira School, Sukkur Township</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header" style={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'var(--primary-green)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white'
              }}>
                TSA
              </div>
              <div>
                <h1 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', margin: 0 }}>
                  THE SUKKUR ACADEMY
                </h1>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                  Your Path to Academic Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
              <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      style={{
                        textDecoration: 'none',
                        color: isActive(item.href) ? 'var(--primary-green)' : 'var(--text-dark)',
                        fontWeight: isActive(item.href) ? '600' : '500',
                        fontSize: '16px',
                        transition: 'color 0.3s ease',
                        borderBottom: isActive(item.href) ? '2px solid var(--primary-green)' : 'none',
                        paddingBottom: '5px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href)) {
                          e.target.style.color = 'var(--primary-green)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.target.style.color = 'var(--text-dark)';
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link 
                to="/registration" 
                className="btn btn-primary"
                style={{
                  display: window.innerWidth <= 768 ? 'none' : 'inline-block'
                }}
              >
                Register Now
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  display: window.innerWidth <= 768 ? 'block' : 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-dark)'
                }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav style={{ 
              display: 'block',
              backgroundColor: 'white',
              padding: '1rem 0',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navigation.map((item) => (
                  <li key={item.name} style={{ marginBottom: '0.5rem' }}>
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: isActive(item.href) ? 'var(--primary-green)' : 'var(--text-dark)',
                        fontWeight: isActive(item.href) ? '600' : '500',
                        fontSize: '16px',
                        padding: '0.5rem 0',
                        borderLeft: isActive(item.href) ? '3px solid var(--primary-green)' : 'none',
                        paddingLeft: isActive(item.href) ? '1rem' : '0'
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li style={{ marginTop: '1rem' }}>
                  <Link
                    to="/registration"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      backgroundColor: 'var(--primary-green)',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '16px',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}
                  >
                    Register Now
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

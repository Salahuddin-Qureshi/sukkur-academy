import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* 404 Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '2rem'
      }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          {/* Large 404 Number */}
          <div style={{
            fontSize: '10rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--primary-green), #059669)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1',
            marginBottom: '1rem'
          }}>
            404
          </div>

          {/* Icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-green), #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
            }}>
              <Search size={50} color="white" />
            </div>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Page Not Found
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            marginBottom: '3rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/" 
              className="btn btn-primary" 
              style={{
                fontSize: '1.1rem',
                padding: '15px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Home size={20} />
              Back to Home
            </Link>
            
            <Link 
              to="/courses" 
              className="btn btn-secondary" 
              style={{
                fontSize: '1.1rem',
                padding: '15px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <ArrowLeft size={20} />
              View Courses
            </Link>
          </div>

          {/* Quick Links */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              marginBottom: '1.5rem',
              color: '#1e293b'
            }}>
              Popular Pages
            </h3>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/" 
                style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Home
              </Link>
              <span style={{ color: '#e2e8f0' }}>|</span>
              <Link 
                to="/about" 
                style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                About Us
              </Link>
              <span style={{ color: '#e2e8f0' }}>|</span>
              <Link 
                to="/courses" 
                style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Courses
              </Link>
              <span style={{ color: '#e2e8f0' }}>|</span>
              <Link 
                to="/contact" 
                style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Contact
              </Link>
              <span style={{ color: '#e2e8f0' }}>|</span>
              <Link 
                to="/registration" 
                style={{
                  color: 'var(--primary-green)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;


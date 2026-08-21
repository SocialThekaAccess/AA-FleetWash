import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/AA-FleetWash.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/equipment', label: 'Fleet Solutions' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Minimal Header with Logo & Burger */}
      <header className="minimal-header">
        {location.pathname !== '/' && (
          <Link to="/" className="minimal-logo">
            <img src={logo} alt="AA Fleet Wash" />
          </Link>
        )}
        
        {location.pathname === '/' && (
          <div className="header-left-actions">
            <Link to="/quote" className="header-quote-btn">
              GET A FREE QUOTE
            </Link>
            <a href="tel:+61489225500" className="header-phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +61 489 225 500
            </a>
          </div>
        )}
        
        {location.pathname !== '/' && (
          <div className="header-right-actions">
            <Link to="/quote" className="header-quote-btn">
              GET A FREE QUOTE
            </Link>
            <a href="tel:+61489225500" className="header-phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +61 489 225 500
            </a>
          </div>
        )}
        
        <div className="header-actions">
          <button 
            className={`creative-burger ${isMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>

      {/* Full-Screen Creative Menu Overlay */}
      <div className={`creative-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="creative-menu__bg"></div>
        <div className="creative-menu__content">
          <nav className="creative-nav">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`creative-nav__link ${location.pathname === link.path ? 'is-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ '--index': index }}
              >
                <span className="creative-nav__number">0{index + 1}</span>
                <span className="creative-nav__text">{link.label}</span>
                <span className="creative-nav__arrow">→</span>
              </Link>
            ))}
          </nav>
          
          <div className="creative-menu__footer">
            <div className="creative-menu__contact">
              <span>Get in touch</span>
              <a href="tel:+61489225500">+61 489 225 500</a>
              <a href="mailto:info@aafleetwash.com.au">info@aafleetwash.com.au</a>
            </div>
            <div className="creative-menu__address">
              <span>Visit us</span>
              <address>
                175 Jardin Road<br />
                Wollert, VIC 3750
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/AA-FleetWashbg.png';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="AA Fleet Wash" className="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

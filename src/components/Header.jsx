import React, { useState } from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-circle"></span>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="logo-text">DiaCare</span>
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/nutri-plan" className="nav-link">Assistant</a></li>
            <li className="nav-item"><a href="#features" className="nav-link">Extension</a></li>
            <li className="nav-item"><a href="/food-scanner" className="nav-link">Food Scanner</a></li>
            <div className="auth-buttons-mobile">
              <Link to="/register"><button className="btn-mobile">Sign up</button></Link>
              <Link to="/login"><button className="btn-mobile">Log in</button></Link>
            </div>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/register"><button className="btn btn-signup">Sign up</button></Link>
          <Link to="/login"><button className="btn btn-login">Log in</button></Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

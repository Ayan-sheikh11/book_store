
import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <span>MY</span>Website
        </NavLink>

        {/* Desktop Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/contact" className="nav-button">
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

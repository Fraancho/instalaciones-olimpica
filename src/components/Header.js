import React, { useState, useEffect } from "react";
import "./Header.css"; // Archivo CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Instalaciones Olímpica Logo" />
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#tarimas">Tarimas</a>
        <a href="#puertas">Puertas</a>
        <a href="#marcas">Marcas</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;

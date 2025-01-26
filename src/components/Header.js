import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Instalaciones Olímpica</div>

      {/* Menú hamburguesa */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Enlaces de navegación */}
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


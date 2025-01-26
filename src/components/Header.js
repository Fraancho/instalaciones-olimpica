import React from "react";
import React, { useState } from "react";
import "./Header.css"; // Archivo CSS para estilos

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">Instalaciones Olímpica</div>
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

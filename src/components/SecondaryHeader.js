import React from "react";
import "./Header.css";

const SecondaryHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Instalaciones Olímpica</h1>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default SecondaryHeader;

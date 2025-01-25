import React from "react";
import "./Header.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Instalaciones Olímpica</h1>
        <ul className="nav-links">
          <li><a href="#tarimas">Tarimas</a></li>
          <li><a href="#puertas">Puertas</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

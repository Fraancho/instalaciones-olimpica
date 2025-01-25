import React, { useState, useEffect } from "react";
import "./Banner.css";
import bannerImage from "../img/Banner3.webp"; // Importa la imagen

const Banner = () => {
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
      <div
        className={`banner ${scrolled ? "scrolled" : ""}`}
        style={{
          backgroundImage: `url(${bannerImage})`, // Asignar la imagen importada como fondo
        }}
      >
        <div className="banner-content">
          <h1>Bienvenido a Instalaciones Olímpica</h1>
          <p>Expertos en tarimas y puertas con calidad y elegancia.</p>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
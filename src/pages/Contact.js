import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes alguna consulta? Completa este formulario y nos pondremos en
          contacto contigo lo antes posible.
        </p>
        <form className="contact-form">
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>

          {/* Apellidos */}
          <div className="form-group">
            <label htmlFor="lastname">Apellidos:</label>
            <input type="text" id="lastname" name="lastname" placeholder="Tus apellidos" />
          </div>

          {/* Teléfono */}
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" placeholder="Tu teléfono" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" placeholder="Tu mensaje" required></textarea>
          </div>

          {/* Botón de envío */}
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

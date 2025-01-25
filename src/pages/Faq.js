import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <h1>Preguntas Frecuentes</h1>
      <p>
        Aquí encontrarás respuestas a las preguntas más comunes sobre nuestras
        tarimas y servicios.
      </p>
      <ul>
        <li>¿Qué diferencia hay entre suelo laminado y tarima flotante?</li>
        <li>¿En qué estancias es mejor instalar tarima flotante?</li>
        <li>¿Cómo se limpia la tarima flotante?</li>
        <li>¿Qué garantías ofrecemos en la instalación?</li>
      </ul>
    </div>
  );
};

export default Faq;

import React from "react";
import "./Content.css";
import {
    FaTree,
    FaDoorOpen,
    FaTags,
    FaTh,
    FaTint,
    FaShieldAlt,
    FaBrush,
    FaLock,
    FaSquareFull,
    FaPaintRoller,
    FaWindowRestore,
    FaLayerGroup,
    FaSquare,
  } from "react-icons/fa"; // Importamos los iconos
  import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="content">
      {/* Sección de Tarimas */}
      <div id="tarimas" className="section">
        <div className="section-header">
          <FaTree className="icon" />
          <h2>Tarima</h2>
        </div>
        <div className="card">
  <h3>Tipos de tarima flotante</h3>
  <div className="tarima-types">
    {/* Suelo Laminado */}
    <div className="tarima-type">
      <div className="tarima-icon">
        <FaTh />
      </div>
      <h4>
      <Link to="/suelo-laminado" className="tarima-link">
            Suelo laminado
        </Link>
      </h4>
      <p>
        Es una opción económica y resistente, ideal para zonas con mucho tránsito.
      </p>
    </div>

    {/* Suelo Vinílico */}
    <div className="tarima-type">
      <div className="tarima-icon">
        <FaTint />
      </div>
      <h4>
      <Link to="/suelo-vinilico" className="tarima-link">
            Suelo vinílico
        </Link>
      </h4>
      <p>
        Resistente al agua y fácil de mantener, perfecto para baños y cocinas.
      </p>
    </div>
  </div>

  {/* Enlace a Preguntas Frecuentes */}
  <div className="faq-link">
    <Link to="/preguntas-frecuentes" className="faq-button">
      Ir a Preguntas Frecuentes
    </Link>
  </div>
</div>

      </div>

      {/* Sección de Puertas */}
      <div id="puertas" className="section">
        <div className="section-header">
          <FaDoorOpen className="icon" />
          <h2>Puertas</h2>
        </div>
        <div className="card">
          <h3>Tipos de Puertas</h3>
          <div className="door-types">
            {/* Puerta Seguridad Acorazada */}
            <div className="door-type">
              <div className="door-icon">
                <FaShieldAlt />
              </div>
              <h4>
                <Link to="/puerta-seguridad-acorazada" className="door-link">
                  Puerta seguridad acorazada
                </Link>
              </h4>
              <p>
                Máxima protección con materiales de acero reforzado y diseño
                moderno.
              </p>
            </div>

            {/* Puerta Barniz */}
            <div className="door-type">
              <div className="door-icon">
                <FaBrush />
              </div>
              <h4>
                <Link to="/puerta-barniz" className="door-link">
                  Puerta Barniz
                </Link>
              </h4>
              <p>
                Puertas clásicas con un acabado barnizado que resalta la textura
                natural de la madera.
              </p>
            </div>

            {/* Puerta Seguridad Blindada */}
            <div className="door-type">
              <div className="door-icon">
                <FaLock />
              </div>
              <h4>
                <Link to="/puerta-seguridad-blindada" className="door-link">
                  Puerta seguridad blindada
                </Link>
              </h4>
              <p>
                Protección superior con capas internas de acero y diseño
                decorativo.
              </p>
            </div>

            {/* Puerta Lacada Ciega */}
            <div className="door-type">
              <div className="door-icon">
                <FaSquareFull />
              </div>
              <h4>
                <Link to="/puerta-lacada-ciega" className="door-link">
                  Puerta lacada ciega
                </Link>
              </h4>
              <p>
                Diseño minimalista con superficie lisa y brillante, ideal para
                interiores modernos.
              </p>
            </div>

            {/* Puerta Lacada */}
            <div className="door-type">
              <div className="door-icon">
                <FaPaintRoller />
              </div>
              <h4>
                <Link to="/puerta-lacada" className="door-link">
                  Puerta lacada
                </Link>
              </h4>
              <p>
                Versátiles y elegantes, con acabados impecables para todo tipo de
                decoración.
              </p>
            </div>

            {/* Puerta Lacada Acristalada */}
            <div className="door-type">
              <div className="door-icon">
                <FaWindowRestore />
              </div>
              <h4>
                <Link to="/puerta-lacada-acristalada" className="door-link">
                  Puerta lacada acristalada
                </Link>
              </h4>
              <p>
                Elegancia y funcionalidad combinadas con inserciones de vidrio para
                más luminosidad.
              </p>
            </div>

            {/* Puerta Laminada Acristalada */}
            <div className="door-type">
              <div className="door-icon">
                <FaLayerGroup />
              </div>
              <h4>
                <Link to="/puerta-laminada-acristalada" className="door-link">
                  Puerta laminada acristalada
                </Link>
              </h4>
              <p>
                Duraderas y elegantes, con vidrio que permite la entrada de luz
                natural.
              </p>
            </div>

            {/* Puerta Laminada Ciega */}
            <div className="door-type">
              <div className="door-icon">
                <FaSquare />
              </div>
              <h4>
                <Link to="/puerta-laminada-ciega" className="door-link">
                  Puerta laminada ciega
                </Link>
              </h4>
              <p>
                Resistencia y funcionalidad con una superficie laminada fácil de
                limpiar.
              </p>
            </div>
          </div>

          {/* Enlace a Preguntas Frecuentes al final de Puertas */}
          <div className="faq-link">
            <Link to="/preguntas-frecuentes" className="faq-button">
              Ir a Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de Marcas */}
      <div id="marcas" className="section">
        <div className="section-header">
          <FaTags className="icon" />
          <h2>Marcas con las que trabajamos</h2>
        </div>
        <div className="card">
          <ul>
            <li>Marca Elegance</li>
            <li>Style Flooring</li>
            <li>Wooden Pro</li>
            <li>Vinyl Master</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
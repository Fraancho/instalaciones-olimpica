import React from "react";
import logo from './favico.webp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Faq from "./pages/Faq";
import SueloLaminado from "./pages/SueloLaminado";
import SueloVinilico from "./pages/SueloVinilico";
import PuertaSeguridadAcorazada from "./pages/PuertaSeguridadAcorazada";
import PuertaBarniz from "./pages/PuertaBarniz";
import PuertaSeguridadBlindada from "./pages/PuertaSeguridadBlindada";
import PuertaLacadaCiega from "./pages/PuertaLacadaCiega";
import PuertaLacada from "./pages/PuertaLacada";
import PuertaLacadaAcristalada from "./pages/PuertaLacadaAcristalada";
import PuertaLaminadaAcristalada from "./pages/PuertaLaminadaAcristalada";
import PuertaLaminadaCiega from "./pages/PuertaLaminadaCiega";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<div><MainHeader /><Banner /><Content /></div>} />
          <Route path="/preguntas-frecuentes" element={<div><SecondaryHeader /><Faq /></div>} />
          <Route path="/suelo-laminado" element={<div><SecondaryHeader /><SueloLaminado /></div>} />
          <Route path="/suelo-vinilico" element={<div><SecondaryHeader /><SueloVinilico /></div>} />
          <Route path="/" element={<div><Banner /><Content /></div>} />
          <Route path="/puerta-seguridad-acorazada" element={<div><SecondaryHeader /><PuertaSeguridadAcorazada /></div>} />
          <Route path="/puerta-barniz" element={<div><SecondaryHeader /><PuertaBarniz /></div>} />
          <Route path="/puerta-seguridad-blindada" element={<div><SecondaryHeader /><PuertaSeguridadBlindada /></div>} />
          <Route path="/puerta-lacada-ciega" element={<div><SecondaryHeader /><PuertaLacadaCiega /></div>} />
          <Route path="/puerta-lacada" element={<div><SecondaryHeader /><PuertaLacada /></div>} />
          <Route path="/puerta-lacada-acristalada" element={<div><SecondaryHeader /><PuertaLacadaAcristalada /></div>} />
          <Route path="/puerta-laminada-acristalada" element={<div><SecondaryHeader /><PuertaLaminadaAcristalada /></div>} />
          <Route path="/puerta-laminada-ciega" element={<div><SecondaryHeader /><PuertaLaminadaCiega /></div>} />
          <Route path="/contacto" element={<div><SecondaryHeader /><Contact /></div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

import React from "react";
import { NavBar } from "./components/nav/NavBar";
import { Home } from "./components/home/Home";
import { Solution } from "./components/solution/Solution";
import { Testimonio } from "./components/testimonio/Testimonio";
import { Carrousel } from "./components/carrousel/Carrousel";
import { Footer } from "./components/footer/Footer";
import { Servicios } from "./components/servicios/Servicios";
import { Fade } from "react-awesome-reveal";
import { Preguntas } from "./components/preguntas/Preguntas";
export const App = () => {
  return (
    <div className="poppins">
      <Fade duration={1500}>
        <NavBar />
        <Home />
        <Solution />
        <Servicios />
        <Testimonio />
        <Carrousel />
        <Preguntas />
        <Footer />
      </Fade>
    </div>
  );
};
